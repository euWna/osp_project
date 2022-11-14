import React from "react";
import styles from "../css/MyPageMenu.module.css";
import { Link } from 'react-router-dom';

export default function MyPageMenu() {
  return (
    <>
    <header>
      <h1>My Page</h1>
    </header>
    <div class ={styles.mainbar}>좋아요 누른 메뉴 모아보기</div>
            <ul>
                <li> <div class={styles.storename}>와플와플</div>
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
