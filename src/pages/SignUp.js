
import React, { useState } from "react";
import Header from "../component/header";
import { Link } from 'react-router-dom';
import styles from '../css/SignUp.module.css';
import NavBar from "../component/NavBar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  
    const onNameHandler = (event) => {
      setName(event.currentTarget.value)
    }
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
  
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
  
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
  
    const onSubmit = (event) => {
      event.preventDefault()
      if(password !== confirmPassword) {
        return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
      }
    }
  
    return (
      <div class="loginregister">
        <form>
            <div><input name="name" type="nickname" placeholder="이름" value={name} onChange={onNameHandler} class="loginregister__input"/></div>
            <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
            <div><input name="password" type="pwd" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
            <div><input name="confirmPassword" type="pwd" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister__input"/></div>
            <div><button type="submit" onSubmit={onSubmit} class="loginregister__button">계정 생성하기</button></div>
        </form>
      </div>
    );
  }
  export default SignUp;