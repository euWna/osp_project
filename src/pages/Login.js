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

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    
    const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value);
    }
  
    const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }
  
    const onSubmit = (event) => {
      event.preventDefault();
    }
  
    return (
        <div className={styles.loginregister}>
          <form>
              <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
              <div><input name="password" type="pwd" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
              <div><button type="submit" onSubmit={onSubmit} class="loginregister__button">로그인</button></div>
          </form>
        </div>
      );
    }
  
  export default Login;
