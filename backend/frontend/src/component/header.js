import styles from '../css/Header.module.css';
import homelogo from '../img/symbol-mark.png'
import { Link } from 'react-router-dom';

const CSSModule = () => {
    return (
        <div Header={styles.}
    )
}

function Header(){
    return(
        <div>        
        <header>
            <div>
                <a href=""><img id="homelogo" src={homelogo}/></a>
            </div>
            <div class="signInUp">
            <Link to="/Login">로그인</Link>
            <Link to="/SignUp">회원가입</Link>
            </div>
        </header>
        </div>
    );
}

export default Header;