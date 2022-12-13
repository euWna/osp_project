import React, { useState } from "react";
import Header from "../component/header";
import styles from "../css/Login.module.css";
import { Link } from 'react-router-dom';
import NavBar from "../component/NavBar";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { authService } from '../firebase/fbInstance';

class Login extends React.Component {
    render() {

        return (
            <div>
                <NavBar></NavBar>
                <div className={styles.Headline}>
                    <p>로그인</p>
                </div>
                <div className={styles.Left}>
                    <input type="text" name="ID" defaultValue="ID" />
                    <input type="text" name="pwd" defaultValue="pwd" />
                    <button type="button" name="login_button">
                        로그인
                    </button>
                </div>
                <div className={styles.Right}>
                    <p>아직 회원이 아니신가요?</p>
                    <p>회원가입을 하시면 더 많은 기능을 사용하실 수 있습니.</p>
                    <button type="button" name="goto_join_button">
                        회원가입
                    </button>
                </div>
            </div>
        );
    };

}

export default Login;
