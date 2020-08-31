const admin = require("firebase-admin");
const firebase = require('firebase')

const serviceAccount = require("./proyectoweb28092020-firebase-adminsdk-ar7ff-1a7d48c8bb.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://proyectobibliotecariaudla.firebaseio.com"
});

var firebaseConfig = {
  apiKey: "AIzaSyB9wYAeBrXYb2ODfV0dJzxTR266jvXQ6bk",
  authDomain: "proyectobibliotecariaudla.firebaseapp.com",
  databaseURL: "https://proyectobibliotecariaudla.firebaseio.com",
  projectId: "proyectobibliotecariaudla",
  storageBucket: "proyectobibliotecariaudla.appspot.com",
  messagingSenderId: "1053389462582",
  appId: "1:1053389462582:web:55163b63619ab60be00c97",
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = { admin, firebase };