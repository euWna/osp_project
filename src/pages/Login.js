import React, { useState } from "react";
import Header from "../component/header";
import styles from "../css/Login.module.css";
import { Link } from 'react-router-dom';
import NavBar from "../component/NavBar";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    
    const [loginEmail, setLoginEmail] = useState(""); // 코드 추가
    const [loginPassword, setLoginPassword] = useState(""); // 코드 추가
    const [user, setUser] = useState({}); // 코드 추가

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });


    //로그인
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    //로그아웃
    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div style={{ textAlign: "center", margin: 10 }}>

            <div>
                {/* 로그인 */}
                <h3>Login</h3>
                <input
                    placeholder="Email"
                    onChange={(e) => {
                        setLoginEmail(e.target.value);
                    }}
                />
                <input
                    placeholder="Password"
                    onChange={(e) => {
                        setLoginPassword(e.target.value);
                    }}
                />
                <button onClick={login}>Login</button>
                <div>User Logged In:</div>
                <div>{user?.email}</div>
                <button onClick={logout}>로그아웃</button>
            </div>
        </div>
    );
};
export default Login;
