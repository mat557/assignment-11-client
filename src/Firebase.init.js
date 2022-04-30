import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAl_GVEnRzzkQdO_L2dKV4qxi6sEc1j5ko",
  authDomain: "assignment-11-c9588.firebaseapp.com",
  projectId: "assignment-11-c9588",
  storageBucket: "assignment-11-c9588.appspot.com",
  messagingSenderId: "16572851876",
  appId: "1:16572851876:web:a915c6f56bbd3b00e4e831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";


// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export default auth;