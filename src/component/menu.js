import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from '../css/Contents.module.css';
import MenuPost from "./menuPost";

function Menu(){

    const params = useParams().storename;

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
    
    return(
        <div class={styles.outer}>
            <div class={styles.pane}>
                <div id={styles.paneName}>
                    메뉴 목록
                </div>
                <div class={styles.editPane}>
                    <span>직접 메뉴를 등록하고 수정하세요!</span>
                    <Link to={`/Createmenu/${params}`}><button class={styles.button}>메뉴 정보 수정</button></Link>
                </div>
                <div class={styles.menuPane}>
                    <div class={styles.menulist}>
                        {menudata && menudata.map((a => {
                        return <div>
                            <MenuPost menuname={a.food} menuimg={a.img_path} menumoney={a.money}/>
                        </div>
                        }))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu