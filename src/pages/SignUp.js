import React, { useState } from "react";
import Header from "../component/header";
import { Link } from 'react-router-dom';
import styles from '../css/SignUp.module.css';
import NavBar from "../component/NavBar";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import firebase from "../../flask-server";
// import DBhandler from database

//import authService from 'firebase/auth'
import 'firebase/auth';
import { getAuth } from "firebase/auth";
// import { authService } from '../firebase/fbInstance';
//const authService = firebase.auth();

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState('');

    const toggleAccount = () => setNewAccount((prev) => !prev)

    const onChange = (e) => {
        const { target: { name, value } } = e;
        if (name === "email")
            setEmail(value);
        else if (name === "password")
            setPassword(value);
    }

    const onSubmit1 = async (e) => {
        e.preventDefault();

        try {
            let data;
            const auth = getAuth();
            if (newAccount)
                data = await createUserWithEmailAndPassword(auth, email, password);
            else { data = await signInWithEmailAndPassword(auth, email, password); }
            console.log(data);
        }

        catch (error) {
            setError(error.message);
        }
    }


    function SubmitForm(event) {
        var form = document.getElementsByClassName("SignUpForm")
        form.submit()
    }

    return (
        <div>
            <form onSubmit={onSubmit1} className={"SignUpForm"}>
                <input
                    name="email"
                    type="text"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={onChange} />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={onChange} />
                <Link to="/MyPage" onClick={SubmitForm}>
                    { /*<input
                        type="submit"
                        value="회원가입" />*/}
                </Link>
            </form>
        </div>
    )
}


export default SignUp
