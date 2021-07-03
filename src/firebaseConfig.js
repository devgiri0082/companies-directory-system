import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjbLnIg5zfh8S-4diLxSQQItUr_CYjrR4",
  authDomain: "company-directory-e7374.firebaseapp.com",
  projectId: "company-directory-e7374",
  storageBucket: "company-directory-e7374.appspot.com",
  messagingSenderId: "1024070028374",
  appId: "1:1024070028374:web:a66738c025a7413c023ff7",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
export default db;
