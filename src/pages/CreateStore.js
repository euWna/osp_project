import React from "react";
import "./CreateStore.css";

function StoreCreate(){
    return (
        <body><aside>
            <div class="asideleft">
                <div class="up">기본정보</div>
                <div class="down">메뉴</div>
            </div>
        </aside><section>
                <div id="table">
                    <div class="row">
                        <span class="cell col1">매장명</span>
                        <span class="cell col2"><input type="text" name="storename" /></span>
                    </div>
                    <div class="row">
                        <span class="cell col1">주소</span>
                        <span class="cell col2"><input type="text" name="location" size="70" /></span>
                    </div>
                    <div class="row">
                        <span class="cell col1">전화번호</span>
                        <span class="cell col2"><input type="text" name="phonenumber" /></span>
                    </div>
                    <div class="row">
                        <span class="cell col1">영업시간</span>
                        <span class="cell col2"><input type="text" name="time1" size="1" />:<input type="text" name="time2" size="1" />   ~   <input type="text" name="time3" size="1" />:<input type="text" name="time4" size="1" /></span>
                    </div>
                    <div class="row">
                        <span class="cell col1">카테고리</span>
                        <span class="cell col2">
                            <select name="food">
                                <option value="">선택</option>
                                <option value="kor">한식</option>
                                <option value="jap">일식</option>
                                <option value="chi">중식</option>
                            </select>
                        </span>
                    </div>
                    <div class="row">
                        <span class="cell col1">주차장</span>
                        <span class="cell col2"><input type='button' value="O" /> <input type="button" value="X" /></span>
                    </div>
                    <div class="row">
                        <span class="cell col1">가격대</span>
                        <span class="cell col2"><input type="money1" name="money1" size="8" />   ~   <input type="money2" name="money2" size="8" /></span>
                    </div>
                    <div class="row">
                        <span class="cell col1">사이트</span>
                        <span class="cell col2"><input type="site" name="site" value="+" size="70" /></span>
                    </div>
                    <div class="row">
                        <span class="cell col1">대표사진</span>
                        <span class="cell col2"><input type='button' value="파일 첨부 (.jpg , .png)" /></span>
                    </div>
                    <div class="row">
                        <span class="cell col1"></span>
                        <span class="cell col2"><input type="button" value="기본 정보 등록" /></span>
                    </div>
                </div>
            </section></body>
    )
                    }