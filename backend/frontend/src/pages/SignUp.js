import React from "react";
import Header from "../component/header";

class SignUp extends React.Component {
    render() {
        return (
            <div>

                <span className="Headline">
                    <h3>회원가입</h3>
                </span>
                <table>
                    <tr>
                        <th className="Th1">닉네임</th>
                        <th>
                            <input type="string" name="userName" value="이화연"></input>
                        </th>

                        {/*여기에 input상자 받아오기*/}
                    </tr>
                    <tr>
                        <th className="Th1">전화번호</th>
                        <th>
                            <input className="withButton" type="tel" name="userNumber"></input>
                            <button>번호 인증하기</button>
                        </th>
                    </tr>
                    <tr>
                        <th className="Th1">회원ID</th>
                        <th>
                            <input className="withButton" type="string" name="ID"></input>
                            <button>ID 중복 확인</button>
                        </th>
                    </tr>
                    <tr>
                        <th className="Th1" id="lastLine">비밀번호</th>
                        <th>
                            <input type="string" name="pwd"></input><br></br>
                            <input className="withButton" type="string" name="pwdAgain"></input>
                            <button>비밀번호 확인</button><br></br>
                            <p>*비밀번호는 영문과 숫자, 특수기호를 포함한 10~15자리로 설정해주세요</p>
                        </th>
                    </tr>
                </table><br></br>
                <button type="button" name="join_button">회원가입 완료하기</button>



            </div>
        );
    }

}
export default SignUp;
