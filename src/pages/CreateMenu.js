import React from "react";
import styles from "../css/CreateReview.module.css";

function CreateReview(){
    return(
        <body>
            <aside>
                <div class = "asideleft">
                <div class = "up">돈천동식당</div>
                <div class = "down">대표 사진</div>
                </div>
            </aside>
            <section>
                <div id = "table">
                    <div class = "row">
                    <span class = "cell col1">전체 평점</span>
                    <span class = "cell col2"><img src = "starone.jpg" width="30" height ="30"/><img src = "starone.jpg" width="30" height ="30"/><img src = "starone.jpg" width="30" height ="30"/><img src = "starone.jpg" width="30" height ="30"/><img src = "startwo.jpg" width="30" height ="30"/></span> 
                    </div>
                    <div class = "row">
                    <span class = "cell col1">작성자</span>
                    <span class = "cell col2"><input type ="text" name = "location"/></span>
                    </div>
                    <div class = "row">
                    <span class = "cell col1">리뷰 제목</span>
                    <span class = "cell col2"><input type ="text" name = "phonenumber" size = "70"/></span>
                    </div>
                    <div class = "row">
                    <span class = "cell col1">리뷰 내용</span>
                    <span class = "cell col2"><textarea name = "aboutreview" rows ="10" cols = "70"/></span>
                    </div>
                    <div class = "row">
                    <span class = "cell col1">사진</span>
                    <span class = "cell col2"><input type = 'button' value ="파일 첨부 (.jpg , .png)"/></span>
                    </div>
                    <div class = "row">
                    <span class = "cell col1"></span>
                    <span class = "cell col2"><input type = 'button' value ="리뷰 등록"/></span>
                    </div>
                </div>
            </section>
        </body>
    )
}