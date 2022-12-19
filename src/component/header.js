import styles from '../css/Header.module.css';
import homelogo from '../img/symbol-mark.png'
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

function Header() {

    const [LoginmodalOpen, setLoginModalOpen] = useState(false);
    const [SignUpmodalOpen, setSignUpModalOpen] = useState(false);

    // 모달창 노출
    const showLoginModal = () => {
        setLoginModalOpen(true);
    };

    const showSignUpModal = () => {
        setSignUpModalOpen(true);
    };

    return (
        <div>
            <header>
                <div class={styles.logotitle}>
                    <Link to="/"><img id={styles.homelogo} src={homelogo} /></Link>
                    <Link to="/" class={styles.hometitle}>이화여자대학교 맛집 오픈소스</Link>
                </div>
                <div class={styles.signInUp}>
                    <Link onClick={showLoginModal}>로그인</Link>
                    {LoginmodalOpen && <Login setLoginModalOpen={setLoginModalOpen} />}
                    <Link onClick={showSignUpModal}>회원가입</Link>
                    {SignUpmodalOpen && <SignUp setSignUpModalOpen={setSignUpModalOpen} />}
                </div>
            </header>
        </div>
    );
}

export default Header;