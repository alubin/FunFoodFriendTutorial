import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCApS4QjG0SrPjIck4VHaRGFROwott06Hk",
    authDomain: "funfriend-80575.firebaseapp.com",
    databaseURL: "https://funfriend-80575.firebaseio.com",
    projectId: "funfriend-80575",
    storageBucket: "funfriend-80575.appspot.com",
    messagingSenderId: "352968555760"
};
firebase.initializeApp(config);
export default firebase;