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
        <nav class="page">
        <span class="pageName">맛집 상세 조회 </span>{/* 해당 페이지명 뜨도록*/}
            <a href=""/*링크*/>리뷰 모아보기</a>
            <a href=""/*링크*/>맛집 정보 추가하기</a>
            <a href="" id="last"/*링크*/>맛집 모아보기</a>
        </nav>
        </div>
    );
}


export default Header;