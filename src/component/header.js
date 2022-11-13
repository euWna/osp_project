import styles from '../css/Header.module.css';
import homelogo from '../img/symbol-mark.png'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div>        
        <header>
            <Link to="/"><img id={styles.homelogo} src={homelogo}/></Link>
                <div class={styles.signInUp}>
            <Link to="/Login">로그인</Link>
            <Link to="/SignUp">회원가입</Link>
            </div>
        </header>
        </div>
    );
}

export default Header;