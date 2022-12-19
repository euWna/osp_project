
import React, { useState } from "react";
import Header from "../component/header";
import { Link } from 'react-router-dom';
import styles from '../css/SignUp.module.css';
import NavBar from "../component/NavBar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function SignUp({ setSignUpModalOpen, id, title, content, writer }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const closeSignUpModal = () => {
      setSignUpModalOpen(false);
  };
  
    // const onNameHandler = (event) => {
    //   setName(event.currentTarget.value)
    // }
    // const onEmailHandler = (event) => {
    //     setEmail(event.currentTarget.value)
    // }
  
    // const onPasswordHandler = (event) => {
    //     setPassword(event.currentTarget.value)
    // }
  
    return (
      <div className={styles.loginregister}>
        <div className={styles.container}>
            <button className={styles.close} onClick={closeSignUpModal}>
                X
            </button>
            <h3>Sign Up</h3>
            <div class={styles.logindesc}>
                <div class={styles.inputbox}>
            <form action="SignUp_post" method="POST" enctype="multipart/form-data">
            <div><input name="nickname" type="text" placeholder="이름"   className="loginregister__input"/></div>
            <div><input name="email" type="email" placeholder="이메일"  className="loginregister__input"/></div>
            <div><input name="pwd" type="password" placeholder="비밀번호"   classNames="loginregister__input"/></div>
            <div><input type="submit" class={styles.btn_submit} value="회원가입" /></div>
        </form>
        </div>
        </div>
        </div>
      </div>
    );
  }

  export default SignUp;