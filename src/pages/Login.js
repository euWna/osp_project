import React, { useState } from "react";
import Header from "../component/header";
import styles from "../css/Login.module.css";
import { Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    
  
    return (
        <div className={styles.loginregister}>
          <form action="/login_confirm" method="POST" enctype="multipart/form-data">
              <div><input name="email" type="email" placeholder="이메일" className="loginregister__input"/></div>
              <div><input name="pwd" type="password" placeholder="비밀번호" className="loginregister__input"/></div>
              <div><input type="submit" class={styles.btn_submit} value="로그인" /></div>
          </form>
        </div>
      );
    }
  
  export default Login;
