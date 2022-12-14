
import React, { useState } from "react";
import Header from "../component/header";
import { Link } from 'react-router-dom';
import styles from '../css/SignUp.module.css';
import NavBar from "../component/NavBar";


function SignUp({ setSignUpModalOpen, id, title, content, writer }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const closeSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  return (
    <div className={styles.loginregister}>
      <div className={styles.container}>
        <button className={styles.close} onClick={closeSignUpModal}>
          X
        </button>
        <h3>Sign Up</h3>
        <div class={styles.logindesc}>
          <div class={styles.inputbox}>
            <form action="/SignUp_post" method="POST" enctype="multipart/form-data">
              <div id={styles.table}>
                <div class={styles.row}>
                  <span class={`${styles.cell} ${styles.col1}`}>이름</span>
                  <span class={`${styles.cell} ${styles.col2}`}><input name="nickname" type="text" placeholder="이름" className="loginregister__input" /></span>
                </div>
                <div class={styles.row}>
                  <span class={`${styles.cell} ${styles.col1}`}>이메일</span>
                  <span class={`${styles.cell} ${styles.col2}`}><input name="email" type="email" placeholder="이메일" className="loginregister__input" /></span>
                </div>
                <div class={styles.row}>
                  <span class={`${styles.cell} ${styles.col1}`}>비밀번호</span>
                  <span class={`${styles.cell} ${styles.col2}`}><input name="pwd" type="password" placeholder="비밀번호" classNames="loginregister__input" /></span>
                </div>
              </div>
              <div>
                <input type="submit" class={styles.btn_submit} value="회원가입" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;