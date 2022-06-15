import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBO_fOf69uJXkKCPtLbOscJmQqqcpukPM0',
  authDomain: 'crown-clothing-db-52c82.firebaseapp.com',
  projectId: 'crown-clothing-db-52c82',
  storageBucket: 'crown-clothing-db-52c82.appspot.com',
  messagingSenderId: '570891498845',
  appId: '1:570891498845:web:5bd49952ee07782cd0e4b4',
  measurementId: 'G-LDG2EB1WE9',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
