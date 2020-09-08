const admin = require("firebase-admin");
const firebase = require('firebase')

const serviceAccount = require("./proyectowebsito-firebase-adminsdk-x28cj-442594c703.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://proyectowebsito.firebaseio.com"
});

var firebaseConfig = {
  apiKey: "AIzaSyDC9sjUZcsZVCl4AhZkB1Xl_mcsUmRLFwU",
  authDomain: "proyectowebsito.firebaseapp.com",
  databaseURL: "https://proyectowebsito.firebaseio.com",
  projectId: "proyectowebsito",
  storageBucket: "proyectowebsito.appspot.com",
  messagingSenderId: "744215087467",
  appId: "1:744215087467:web:cfc9923a06d14588fc242e"

  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = { admin, firebase };