import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDlowuQCSlqQxajUzMKDLhdTa-OYCqsdFQ",
  authDomain: "docs-f6d5a.firebaseapp.com",
  projectId: "docs-f6d5a",
  storageBucket: "docs-f6d5a.appspot.com",
  messagingSenderId: "299777280573",
  appId: "1:299777280573:web:5a239d30d36ec1f22ef854"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
