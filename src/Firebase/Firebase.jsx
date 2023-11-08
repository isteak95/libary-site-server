// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx1luo4rXoiD6zxSablZQfKybDXD86qtc",
  authDomain: "libary-site.firebaseapp.com",
  projectId: "libary-site",
  storageBucket: "libary-site.appspot.com",
  messagingSenderId: "35897461386",
  appId: "1:35897461386:web:4b5e3f7e5bd95ed48dbb73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;