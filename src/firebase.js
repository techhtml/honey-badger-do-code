import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAWjG7E8sBLzbWc3WpCsKjXa2leQm7YOlQ",
  authDomain: "honey-badger-to-do.firebaseapp.com",
  databaseURL: "https://honey-badger-to-do.firebaseio.com",
  projectId: "honey-badger-to-do",
  storageBucket: "honey-badger-to-do.appspot.com",
  messagingSenderId: "112825270792"
};
firebase.initializeApp(config);
export default firebase;