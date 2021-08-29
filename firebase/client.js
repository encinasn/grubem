import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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

// dogs

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
  const female = dogs.filter((dog) => dog.gender === 'female' && !dog.isPuppy);
  const male = dogs.filter((dog) => dog.gender === 'male' && !dog.isPuppy);
  const puppy = dogs.filter((dog) => dog.isPuppy === true);

  return { female, male, puppy };
};

export const getDogs = () => {
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

      return normalizeDogs(dogs);
    });
};

export const uploadImage = (file, folder) => {
  const storageRef = firebase.storage().ref().child(`${folder}/${file.name}`);
  return storageRef.put(file);
};
