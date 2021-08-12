import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDBWVSg_kkJMFKTem3yKucqGGAvJPYkrwo",
    authDomain: "crwn-db-69d00.firebaseapp.com",
    projectId: "crwn-db-69d00",
    storageBucket: "crwn-db-69d00.appspot.com",
    messagingSenderId: "99889073527",
    appId: "1:99889073527:web:ca53002f0106cff2762572"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;