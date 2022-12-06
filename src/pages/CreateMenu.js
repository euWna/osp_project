import React from "react";
import styles from "../css/CreateMenu.module.css";
import { Link, useParams } from 'react-router-dom';
import NavBar from '../component/NavBar';
import { render } from "@testing-library/react";

// function removeNutrient(nutrient) {
//   // DB에서 정의...?
// }
// var i = 0;
// var MenuPlus = document.getElementsById("menuPlus")
// // for (i = 0; i < MenuPlus.length; i++) {
// MenuPlus[i].addEventListener("click", (event) => {
//   // render_template("index.html")
//   // CreateMenu();
//   // render("http://127.0.0.1:5000/CreateMenu/{params}");
//   < Link to="http://127.0.0.1:5000/CreateMenu/" />
// })
// // }


function CreateMenu() {

  const params = useParams().storename;
  // MinusButton = document.getElementsByClassName("MinusButton");
  // nutrient = document.getElementsByClassName("nutrient").innerHTML;
  // MinusButton.addEventListener("click", removeNutrient(nutrient));
  // nutrient 대신 key 를 넣을 수 있으면 좋음


  return (
    <div>
      <NavBar></NavBar>
      <section>
        <aside class={styles.aside}>
          <div className={styles.asideleft}>
            <Link to="/CreateStore" class={styles.up}>기본정보</Link>
            <Link to="/CreateMenu" class={styles.down}>메뉴</Link>
          </div>
        </aside>
        {/*
        <div className={styles.row}>
          <span className={`${styles.cell} ${styles.col1}`}>

          </span>
          <span className={`${styles.cell} ${styles.col2}`}></span>
        </div> */}

        <form action={`http://127.0.0.1:5000/CreateMenu/${params}`} method="post" enctype="multipart/form-data">
          <div id={styles.table}>
            <div className={styles.row}>
              <span className={`${styles.cell} ${styles.col1}`}>{params}</span>
              <span className={`${styles.cell} ${styles.col2}`}></span>
            </div>
            <div className={styles.row}>
              <span className={`${styles.cell} ${styles.col1}`}></span>
              <span className={`${styles.cell} ${styles.col2}`}>
                <table>
                  <tr>
                    <th>메뉴명</th>
                    <td><input type="text" name="food" /></td>
                  </tr>
                  <tr>
                    <th>가격</th>
                    <td><input type="text" name="money" /></td>
                  </tr>
                  <tr>
                    <th rowspan="2">영양성분</th>
                    <td><input type="text" name="nutrient" placeholder="+" size="70" /></td>
                  </tr>
                  <tr>
                    <td className="nutrient"><div className="MinusButton">-</div>계란</td>
                    {/* 이부분 나중에 nutrient{i} 배열 반환하는 것으로 수정해서 동적으로 생성하게 해야함 */}

                  </tr>
                  <tr>
                    <th>대표사진</th>
                    <td><input type="file" name="file" accept="image/*" /></td>
                  </tr>
                  <tr>
                    <td><input type='submit' value="메뉴 정보 등록" /></td>
                  </tr>
                </table>
              </span>
            </div>
            <div className={styles.row}>
              <span className={`${styles.cell} ${styles.col1}`}></span>
              <span className={`${styles.cell} ${styles.col2}`} id="menuPlus" >+ 메뉴 새로 추가하기</span>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default CreateMenu;
