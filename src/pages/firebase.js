import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    "apiKey": "AIzaSyANcW4W-7NcHf_1VfQYoX8pZKfMzPkr_0o",
    "authDomain": "ewha-osp-yahak.firebaseapp.com",
    "databaseURL": "https://ewha-osp-yahak-default-rtdb.firebaseio.com",
    "projectId": "ewha-osp-yahak",
    "storageBucket": "ewha-osp-yahak.appspot.com",
    "messagingSenderId": "918941450246",
    "appId": "1:918941450246:web:98951a7cbbde67bae28387",
    "measurementId": "G-3ZG5KPCBDL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);