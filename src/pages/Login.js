import React, { useState } from "react";
import styles from "../css/Login.module.css";


function Login({ setLoginModalOpen, id, title, content, writer }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={closeLoginModal}>
        X
      </button>
      <h3>Login</h3>
      <div class={styles.logindesc}>
        <div class={styles.inputbox}>
          <form action="/login_confirm" method="POST" enctype="multipart/form-data">
            <div><input name="email" type="email" placeholder="이메일" className="loginregister__input" /></div>
            <div><input name="pwd" type="password" placeholder="비밀번호" className="loginregister__input" /></div>
            <div><input type="submit" class={styles.btn_submit} value="로그인" /></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
