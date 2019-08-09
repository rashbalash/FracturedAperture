import * as firebase from 'firebase/app';
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAINZPxW0pAfoKYMOZRJUC7TqMijimCgXY",
    authDomain: "fractured-aperture.firebaseapp.com",
    databaseURL: "https://fractured-aperture.firebaseio.com",
    projectId: "fractured-aperture",
    storageBucket: "fractured-aperture.appspot.com",
    messagingSenderId: "621024770896",
    appId: "1:621024770896:web:038b3631a7bede5c"
}

firebase.initializeApp(config);

const db = firebase.firestore();

export {
    firebase,
    db
}

export default firebase;