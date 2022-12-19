import React from "react";
import styles from "../css/CreateMenu.module.css";
import { Link, useParams } from 'react-router-dom';
import NavBar from '../component/NavBar';
import { render } from "@testing-library/react";
import { useState, useEffect } from 'react';
import CreateMenuShow from "./CreateMenuShow";
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
var Return_value = 0
function NewValue() {
  return (Return_value = 1);
}
function MenuPlusBtn() {

  const params = params;


  return (< Link to={`http://127.0.0.1:5000/CreateMenu/${params}`} />)
}

function CreateMenu() {

  const params = useParams().storename;
  const param2 = useParams().food;
  // MinusButton = document.getElementsByClassName("MinusButton");
  // nutrient = document.getElementsByClassName("nutrient").innerHTML;
  // MinusButton.addEventListener("click", removeNutrient(nutrient));
  // nutrient 대신 key 를 넣을 수 있으면 좋음
  const [menudata, setData] = useState()
  var menuarr = new Array();

  useEffect(() => {
    fetch(`/CreateMenu_send_data/${params}`, { //json 데이터를 받아옴
      headers: {
        Accept: 'application/json',
        method: 'GET'
      }
    })
      .then(response => response.json())
      .then(jsonData => {
        var length = Object.keys(jsonData).length
        for (var i = 0; i < length; i++) { //등록된 메뉴 갯수만큼 반복
          menuarr[i] = Object.values(jsonData)[i]
          // menuarr[i]["key"]=Object.keys(jsonData)[i] //키값 필요해서 가져옴
        }
        setData(menuarr)
      })
      .catch(
        (err) => console.log(err))
  }, [])
  console.log("menuarr")
  console.log(menuarr)

  // if (Return_value == 1) {  //Return_value는 메뉴 등록 버튼을 누르면 1이 되게 하고 싶음  on submit으로 구현 예정
  //   return (< div >

  //   </div>)
  // }
  // else {
  return (
    <div>
      <NavBar></NavBar>
      <section>
        <aside class={styles.aside}>
          <div className={styles.asideleft}>
            <Link to={`/RegisteredStore/${params}`} class={styles.up}>기본정보</Link>
            <Link to={`/CreateMenu/${params}`} class={styles.down}>메뉴</Link>
          </div>
        </aside>
        {/*
        <div className={styles.row}>
          <span className={`${styles.cell} ${styles.col1}`}>

          </span>
          <span className={`${styles.cell} ${styles.col2}`}></span>
        </div> */}

        <form action={`http://127.0.0.1:5000/CreateMenu/${params}`} onSubmit={NewValue()} method="POST" enctype="multipart/form-data">
          <div id={styles.table}>
            <div className={styles.row}>
              <span className={`${styles.cell} ${styles.col1}`}>{params}</span>
              <span className={`${styles.cell} ${styles.col2}`}></span>
            </div>

            <div className={styles.row}>
              <span className={`${styles.cell} ${styles.col1}`}>
                {menudata && menudata.map((a => {
                  if ('' || null || undefined || 0 || NaN) {
                    return <div>
                      메뉴를 등록해주세요!
                    </div>
                  }
                  return <div>
                    {a.food}
                  </div>
                }))}
              </span>
              <span className={`${styles.cell} ${styles.col2}`}></span>
            </div>
            <div className={styles.row}>
              <span className={`${styles.cell} ${styles.col1}`}></span>
              <span className={`${styles.cell} ${styles.col2}`}>
                <table>
                  <tr>
                    <th>메뉴명</th>
                    <td><input type="text" class={styles.box_input} name="food" /></td>
                  </tr>
                  <tr>
                    <th>가격</th>
                    <td><input type="text" class={styles.box_input} name="money" /></td>
                  </tr>
                  <tr>
                    <th rowspan="2">영양성분</th>
                    <td><input type="text" class={styles.box_input} name="nutrient" placeholder="+" size="70" /></td>
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
            {/* <div className={styles.row}>
                <span className={`${styles.cell} ${styles.col1}`}></span>
                <span className={`${styles.cell} ${styles.col2}`} id="menuPlus" ><button on onClick={MenuPlusBtn(params)}>+ 메뉴 새로 추가하기</button></span>
              </div> */}
          </div>
        </form>
      </section>
    </div>
  )
  // }

}

export default CreateMenu;