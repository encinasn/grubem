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

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    console.log('AuthStateChange', user);
    onChange(user);
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

// dog

export const addDog = ({ name, picture = null, gender, dateOfBirth }) => {
  return db.collection('dogs').add({
    name,
    picture,
    gender,
    dateOfBirth,
    isPuppy,
    selection,
    femaleParent,
    maleParent,
    elbowPlate,
    hipPlate,
    pedegree,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  });
};

export const uploadImage = (file) => {
  const storageRef = firebase.storage().ref().child(`images/${file.name}`);
  return storageRef.put(file);
};
