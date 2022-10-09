import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyC7UH9qKwCnQDurQbnAwqm3a1oDrU-ZT54",
   //  authDomain: "vietnam-tour-1664730774283.firebaseapp.com",
   //  projectId: "vietnam-tour-1664730774283",
   storageBucket: "vietnam-tour-1664730774283.appspot.com",
   //  messagingSenderId: "1038000924970",
   //  appId: "1:1038000924970:web:5c21730225ecd1ec591653",
   //  measurementId: "G-N2ZBJCGYGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const uploadImage = (title, rawFile) => {
   const storageRef = ref(storage, "image/" + Date.now() + title);
   const uploadTask = uploadBytesResumable(storageRef, rawFile);
   return new Promise((response, rej) => {
      uploadTask.on(
         "state_changed",
         null,
         (error) => console.log(`  ~ error`, error),
         () => getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => response(downloadURL))
      );
   });
};

// Create a root reference

// Create a reference to 'mountains.jpg'

// Create a reference to 'images/mountains.jpg'
// const mountainImagesRef = ref(storage, 'images/mountains.jpg');

// While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name;           // true
// mountainsRef.fullPath === mountainImagesRef.fullPath;   // false

// apiKey: process.env.API_KEY,
// authDomain: process.env.AUTH_DOMAIN,
// projectId: process.env.PROJECT_ID,
// storageBucket: process.env.STORAGE_BUCKET,
// messagingSenderId: process.env.MESSAGING_SENDER_ID,
// appId: process.env.APP_ID,
// measurementId: process.env.MEASUREMENT_ID,
