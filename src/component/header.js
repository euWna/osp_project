import styles from '../css/Header.module.css';
import homelogo from '../img/symbol-mark.png'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header>
                <div class={styles.logotitle}>
                    <Link to="/"><img id={styles.homelogo} src={homelogo} /></Link>
                    <Link to="/" class={styles.hometitle}>이화여자대학교 맛집 오픈소스</Link>
                </div>
                <div class={styles.signInUp}>
                    <Link to="/Login">로그인</Link>
                    <Link to="/SignUp">회원가입</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;