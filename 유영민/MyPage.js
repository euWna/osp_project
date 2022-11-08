import React from "react";
import "./MyPage.css";

export default function App() {
  return (
       
    <div class="row">
        <div class="column left" id="cl">
            <div class = "profile">
                
                <div>이화연</div>
            </div>
            <button type="button" class="black">좋아요 누른 맛집</button> <br></br>
            <button type="button" class="black">좋아요 누른 메뉴</button>
        </div>
        <div class="column right" id="cr">
          <form action="/action_page.php">
            <label for="id">회원 ID </label>
            <input type="text" id ="id" value="ewhayeon"/><br></br>

            <label for="nickname">닉네임 </label>
            <input type="text" id ="nickname" value="이화연"/><br></br>

            <label for="phonenum">전화 번호 </label>
            <input type="tel" id="phonenum" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" required/>
            <button type="submit"  class="green">번호 인증하기</button><br/>

            <label for="PWbefore">기존 PW </label>
            <input type="password" id="PWbefore"/><br/>

            <label for="PWafter">신규 PW </label>
            <input type="password" id="PWafter"/>
            <button type="submit" class="green">비밀번호 변경</button><br/><br/><br/>
            <div>*비밀번호는 영문과 숫자, 특수기호를 포함한 10~15자리로 설정해주세요</div>
            <button type="submit" class="black">변경사항 저장하기</button>
          </form>
        </div>
      </div>
  );
}
