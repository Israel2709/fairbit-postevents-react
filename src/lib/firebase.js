import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBZag0UVOn8JOSOxHXQLdQEjWMhLACU1yA",
    authDomain: "idc-latam.firebaseapp.com",
    databaseURL: "https://idc-latam-default-rtdb.firebaseio.com",
    projectId: "idc-latam",
    storageBucket: "idc-latam.appspot.com",
    messagingSenderId: "451806080609",
    appId: "1:451806080609:web:857f2fe3206e4471c20420",
    measurementId: "G-DCKVE6G5BC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase