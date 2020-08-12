
  import firebase from "firebase"
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCirCIadKOHn7xhvjqfMxH-DsXQp9YSlPk",
    authDomain: "todo-app-eb847.firebaseapp.com",
    databaseURL: "https://todo-app-eb847.firebaseio.com",
    projectId: "todo-app-eb847",
    storageBucket: "todo-app-eb847.appspot.com",
    messagingSenderId: "888978456493",
    appId: "1:888978456493:web:8ec182e66e4a2fe8776b24",
    measurementId: "G-MNZSMV0LD0"

  })
  const db=firebaseApp.firestore()
  export default db