import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyDH1hwftNZ7EJDc-nP9xKwdRYogyPBFCiA",
//     authDomain: "d-dev-blog-app.firebaseapp.com",
//     projectId: "d-dev-blog-app",
//     storageBucket: "d-dev-blog-app.appspot.com",
//     messagingSenderId: "831078212605",
//     appId: "1:831078212605:web:d202f55444a020ea522f94"
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyDe14i8_J6do5HGQ5F1phbKCw30Dv7igd0",
    authDomain: "myportal-c06dc.firebaseapp.com",
    projectId: "myportal-c06dc",
    storageBucket: "myportal-c06dc.appspot.com",
    messagingSenderId: "484723216602",
    appId: "1:484723216602:web:94a22c953657d0f19d15e3",
    databaseURL: 'https://myportal-c06dc-default-rtdb.firebaseio.com/',
    measurementId: "G-340XD5XS3L"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };


