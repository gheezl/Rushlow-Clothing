import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAPu-Mx2FUqrdECfrrQ1gOfv-Qq298l3Dw",
    authDomain: "clothing-1e499.firebaseapp.com",
    databaseURL: "https://clothing-1e499.firebaseio.com",
    projectId: "clothing-1e499",
    storageBucket: "clothing-1e499.appspot.com",
    messagingSenderId: "799030423390",
    appId: "1:799030423390:web:f5020547b9ece6984829cf",
    measurementId: "G-WQ300JJG26"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log("error creating user", error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;