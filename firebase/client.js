import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
//
import Compressor from 'compressorjs';

const firebaseConfig = {
  apiKey: 'AIzaSyBMlO4RABeOen3oRmzBYISOJArCrmpRK_c',
  authDomain: 'grubem-f8f27.firebaseapp.com',
  projectId: 'grubem-f8f27',
  storageBucket: 'grubem-f8f27.appspot.com',
  messagingSenderId: '66081465576',
  appId: '1:66081465576:web:18c27a175fe672312b955d',
  measurementId: 'G-71NG8HHMDW',
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// auth
const normailizeUser = (user) => {
  if (user) {
    const { email, photoURL } = user;
    return { email, photoURL };
  }
  return null;
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normUser = normailizeUser(user);
    console.log('AuthStateChange', normUser);
    onChange(normUser);
  });
};

export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

// posts

export const addPost = ({ description, picture = null }) => {
  return db.collection('posts').add({
    description,
    picture,
    likesCount: 0,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const getPosts = () => {
  return db
    .collection('posts')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { createdAt } = data;

        return { ...data, id, createdAt: +createdAt.toDate() };
      });
    });
};

// ======================= DOGS

const getRealDate = (date) => {
  const dateArray = date.split('-');
  return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
};

export const addDog = (data) => {
  return db.collection('dogs').add({
    ...data,
    dateOfBirth: getRealDate(data.dateOfBirth),
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

const normalizeDogs = (dogs) => {
  const isPuppy = (timestamp) => {
    const now = Date.now();
    const elapsed = (now - timestamp) / 1000;
    return elapsed < 31556900;
  };

  const female = dogs.filter(
    (dog) => dog.gender === 'female' && !isPuppy(dog.dateOfBirth)
  );
  const male = dogs.filter(
    (dog) => dog.gender === 'male' && !isPuppy(dog.dateOfBirth)
  );
  const puppy = dogs.filter((dog) => isPuppy(dog.dateOfBirth));

  return { female, male, puppy };
};

export const getDogs = (ids) => {
  return db
    .collection('dogs')
    .get()
    .then((snapshot) => {
      const dogs = snapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { dateOfBirth, createdAt } = data;

        return {
          ...data,
          id,
          dateOfBirth: +dateOfBirth.toDate(),
          createdAt: +createdAt.toDate(),
        };
      });

      return ids ? dogs : normalizeDogs(dogs);
    });
};

export const getDogById = async (id) => {
  return db
    .collection('dogs')
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        const { dateOfBirth, createdAt } = data;

        return {
          ...data,
          id,
          dateOfBirth: +dateOfBirth.toDate(),
          createdAt: +createdAt.toDate(),
        };
      } else {
        return {};
      }
    })
    .catch(() => {});
};

// ======================= IMAGES

export const uploadFiles = async (folder, subFolder, files) => {
  let tasks = [];

  return compressFiles({
    files: files,
    quality: 0.8,
    width: 1280,
    wait: files.length > 2 ? 1000 * files.length : 1000,
  })
    .then((compressedFiles) => {
      for (let file of compressedFiles) {
        const task = firebase
          .storage()
          .ref()
          .child(`${folder}/${subFolder}/${file.name}`)
          .put(file)
          .then((snap) => snap.ref.getDownloadURL())
          .catch((err) => console.log(err));

        tasks.push(task);
      }
    })
    .then(() => Promise.all(tasks).then((links) => links))
    .catch((err) => console.log(err));
};

// ======================= Cover

export const uploadCov = async (folder, subFolder, files) => {
  let tasks = [];

  return compressFiles({
    files: files,
    quality: 0.4,
    width: 600,
    minSize: 600000,
  })
    .then((compressedFiles) => {
      for (let file of compressedFiles) {
        const task = firebase
          .storage()
          .ref()
          .child(`${folder}/${subFolder}/cover-${file.name}`)
          .put(file)
          .then((snap) => snap.ref.getDownloadURL())
          .catch((err) => console.log(err));

        tasks.push(task);
      }
    })
    .then(() => Promise.all(tasks).then((links) => links))
    .catch((err) => console.log(err));
};

// ======================= COMPPRESS

const compressFiles = async ({
  files,
  quality,
  width,
  wait = 1000,
  minSize = 900000,
}) => {
  return new Promise((resolve, reject) => {
    let compressedFiles = [];

    for (let file of files) {
      if (file.size > minSize) {
        new Compressor(file, {
          quality: quality,
          width: width,
          success(result) {
            //console.dir({ original: file.size, comprimido: result.size });
            if (file.size > result.size) {
              compressedFiles.push(result);
            } else {
              compressedFiles.push(file);
            }
          },
        });
      } else {
        compressedFiles.push(file);
      }
    }

    setTimeout(() => {
      resolve(compressedFiles);
    }, wait);
  });
};
