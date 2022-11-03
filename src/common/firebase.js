import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
   apiKey: process.env.REACT_APP_APIKEY,
   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
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
