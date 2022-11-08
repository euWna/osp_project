import React from "react";
import "./MyPageBookmark.css";

export default function App() {
  return (
    <>
    <Header></Header>
      <NavBar></NavBar>
    <div class ="mainbar">좋아요 누른 맛집 모아보기</div>
    <div class="background">
        <div class="resultbar">
          <a href="#result">결과 n건</a>
          <div class="dropdown">
              <button class="dropbtn">추천순
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content" id="myDropdown">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
          </div> 
          <div class="dropdown">
              <button class="dropbtn">디저트
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content" id="myDropdown">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
          </div> 
        </div>


        <ul>
          <li>StoreList1</li>
          <li>StoreList2</li>
          <li>StoreList3</li>
          <li>StoreList4</li>
        </ul>
        
      </div>
      </>
    
  );
}
