import React from "react";
import styles from "../css/CreateMenu.module.css";
import { Link, useParams } from 'react-router-dom';
import NavBar from '../component/NavBar';
import { render } from "@testing-library/react";
import { useState, useEffect } from 'react';
import CreateMenuShow from "./CreateMenuShow";

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
        }
        setData(menuarr)
      })
      .catch(
        (err) => console.log(err))
  }, [])
  console.log("menuarr")
  console.log(menuarr)

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

        <form action={`http://127.0.0.1:5000/CreateMenu/${params}`} onSubmit={NewValue()} method="POST" enctype="multipart/form-data">
          <div id={styles.table}>
            <div className={styles.row}>
              <span className={`${styles.cell} ${styles.col1}`}><Link to={`/StoreDetail/${params}`} class={`${styles.DetailLink}`}>{params}</Link></span>
              <span className={`${styles.cell} ${styles.col2}`}></span>
            </div>

            <div className={styles.row}>
              <span className={`${styles.cell} ${styles.col1}`}>
                등록된 메뉴
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
                    <th>대표사진</th>
                    <td><input type="file" name="file" accept="image/*" /></td>
                  </tr>
                  <tr>
                    <td><input type='submit' value="메뉴 정보 등록" /></td>
                  </tr>
                </table>
              </span>
            </div>

          </div>
        </form>
      </section>
    </div>
  )
  // }

}

export default CreateMenu;