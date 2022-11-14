import React from "react";
import styles from "../css/CreateMenu.module.css";
import { Link } from 'react-router-dom'; 
import NavBar from '../component/NavBar';

function CreateMenu(){
    return (
        <div>
           <NavBar></NavBar>
            <aside>
                <div class = {styles.asideleft}>
                <Link to = "/CreateStore" class={styles.up}>기본정보</Link>
                <Link to = "/CreateMenu" class={styles.down}>메뉴</Link>
                </div>
            </aside>
            <section>
                <div id = {styles.table}>
                    <div class = {styles.row}>
                    <span class = {`${styles.cell} ${styles.col1}`}>돈카츠우동</span>
                    <span class = {`${styles.cell} ${styles.col1}`}><input type = 'button' value ="편집"/></span>
                    </div>
                    <div class = {styles.row}>
                    <span class = {`${styles.cell} ${styles.col1}`}>가츠동(돈카츠덮밥)</span>
                    <span class = {`${styles.cell} ${styles.col1}`}><input type = 'button' value ="편집"/></span>
                    </div>
                    <div class = {styles.row}>
                    <span class = {`${styles.cell} ${styles.col1}`}>김치나베돈카츠</span>
                    <span class = {`${styles.cell} ${styles.col1}`}></span>
                    </div>
                    <div class = {styles.row}>
                    <span class = {`${styles.cell} ${styles.col1}`}></span>
                    <span class = {`${styles.cell} ${styles.col1}`}>
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
                    <div class = {styles.row}>
                    <span class ={`${styles.cell} ${styles.col1}`}></span>
                    <span class = {`${styles.cell} ${styles.col1}`}>+ 메뉴 새로 추가하기</span>
                    </div>
                </div>
            </section>
          </div>
    )
}

export default CreateMenu;