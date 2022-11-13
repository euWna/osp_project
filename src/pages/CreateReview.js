import React from "react";
import styles from "../css/CreateMenu.module.css";

function CreateMenu(){
    return (
        <body>
            <aside>
                <div class = "asideleft">
                <div class = "up">기본정보</div>
                <div class = "down">메뉴</div>
                </div>
            </aside>
            <section>
                <div id = "table">
                    <div class = "row">
                    <span class = "cell col1">돈카츠우동</span>
                    <span class = "cell col2"><input type = 'button' value ="편집"/></span>
                    </div>
                    <div class = "row">
                    <span class = "cell col1">가츠동(돈카츠덮밥)</span>
                    <span class = "cell col2"><input type = 'button' value ="편집"/></span>
                    </div>
                    <div class = "row">
                    <span class = "cell col1">김치나베돈카츠</span>
                    <span class = "cell col2"></span>
                    </div>
                    <div class = "row">
                    <span class = "cell col1"></span>
                    <span class = "cell col2">
                    <table>
                  <tr>
                    <th>메뉴명</th>
                    <td><input type ="text" name = "food"/></td>
                  </tr>
                  <tr>
                    <th>가격</th>
                    <td><input type ="text" name = "money"/></td>
                  </tr>
                  <tr>
                    <th rowspan = "2">영양성분</th>
                    <td><input type ="site" name = "site" value = "+" size = "70"/></td>
                  </tr>
                  <tr>
                    <td>-계란</td>
                    </tr>
                  <tr>
                    <th>대표사진</th>
                    <td><input type = 'button' value ="파일 첨부 (.jpg , .png)"/></td>
                  </tr>
                  <tr>
                    <td><input type = 'button' value ="메뉴 정보 등록"/></td>
                    </tr>
                  </table>
                        </span>
                    </div>
                    <div class = "row">
                    <span class = "cell col1"></span>
                    <span class = "cell col2">+ 메뉴 새로 추가하기</span>
                    </div>
                </div>
            </section>
        </body>
    )
}