import React from "react";
import "./MyPageMenu.css";

export default function App() {
  return (
    <>
    <Header></Header>
      <NavBar></NavBar>
    <header>
      <h1>My Page</h1>
    </header>
    <div class ="mainbar">좋아요 누른 메뉴 모아보기</div>
            <ul>
                <li> <div class="storename">와플와플</div>
                    <ul class ="store">
                        <li class="menu"> MenuPost1 </li>
                        <li class="menu"> MenuPost2 </li>
                        <li class="menu"> MenuPost3 </li>
                    </ul>
                </li>
                <li><div class="storename">돈천동식당</div>
                    <ul class ="store">
                        <li class="menu"> MenuPost1 </li>
                        <li class="menu"> MenuPost2 </li>
                        <li class="menu"> MenuPost3 </li>
                    </ul>
                </li>
            </ul>
      </>
    
  );
}
