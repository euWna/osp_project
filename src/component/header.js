import '../css/Header.css';
import homelogo from '../img/symbol-mark.png'
function Header(){
    return(
        <div>        
        <header>
            <div>
                <a href=""><img id="homelogo" src={homelogo}/></a>
            </div>
            <div class="signInUp">
            <a href=""/*링크*/>로그인</a>
            <a href=""/*링크*/>회원가입</a>
            </div>
        </header>
        </div>
    );
}


export default Header;