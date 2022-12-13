// import React, { useState } from "react";
// import Header from "../component/header";
// import { Link } from 'react-router-dom';
// import styles from '../css/SignUp.module.css';
// import NavBar from "../component/NavBar";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import firebase from "../../flask-server";
// import 'firebase/auth';
// // import { authService } from '../firebase/fbInstance';
// const authService = firebase.auth();

// const SignUp = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [newAccount, setNewAccount] = useState(true);
//     const [error, setError] = useState('');

//     const toggleAccount = () => setNewAccount((prev) => !prev)
//     const onChange = (e) => {
//         const { target: { name, value } } = e;
//         if (name === "email") setEmail(value);
//         else if (name === "password") setPassword(value);
//     }

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         let data;
//         try {
//             if (newAccount) data = await createUserWithEmailAndPassword(authService, email, password);
//             else data = await signInWithEmailAndPassword(authService, email, password);
//         } catch (error) {
//             setError(error.message);
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input
//                     name="email"
//                     type="text"
//                     placeholder='Email'
//                     required
//                     value={email}
//                     onChange={onChange} />
//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="Password"
//                     required
//                     value={password}
//                     onChange={onChange} />
//                 <Link to="/MyPage"><input
//                     type="submit"
//                     value="회원가입" /></Link>
//             </form>
//         </div>
//     )
// }


// export default SignUp
