import React from "react";
import styles from "../css/CreateStore.module.css";
import { Link } from 'react-router-dom';
import NavBar from '../component/NavBar';
import Alert from '../component/Alert';
import { useState, useEffect } from 'react';

function CreateStore() {
    const [storedata, setData] = useState()
    useEffect(() => {
        fetch("/StoreListView_send_data", { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                setData(Object.values(jsonData));
            })
            .catch(
                (err) => console.log(err))
    },[])
    //알람 뜨는 기능
    const [alert, setAlert] = useState({ show: false, type: '', msg: '' });

    const handleChange = (e) => {
        //만약 이름 겹치면, 
        storedata && storedata.map( item => {
            if (item.storename == e.target.value){
            showAlert(true, 'danger', '이미 등록된 맛집입니다!');
        }
        });
        
        
    }
    
    const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
    };

    return (
        <div>
            <NavBar></NavBar>
            <section>
                <aside>
                    <div class={styles.asideleft}>
                        <Link to="/CreateStore" class={styles.up}>기본정보</Link>
                        <span class={styles.down}>메뉴</span>
                    </div>
                </aside>
                <form action="/CreateStore_submit" method="POST" enctype="multipart/form-data">
                    <div id={styles.table}>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>매장명</span>
                            <span class={`${styles.cell} ${styles.col2}`}><div class={styles.alertbox}><input type="text" class={styles.box_input} name="storename" onChange={handleChange}/>{alert.show && <Alert {...alert} removeAlert={showAlert} />}</div></span>
                            
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>주소</span>
                            <span class={`${styles.cell} ${styles.col2}`}><input type="text" class={styles.box_input} name="location" size="70" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>전화번호</span>
                            <span class={`${styles.cell} ${styles.col2}`}><input type="text" class={styles.box_input} name="phonenumber" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>영업시간</span>
                            <span class={`${styles.cell} ${styles.col2} ${styles.box_double}`}><input type="time" class={styles.box_input} name="time1" size="1" /> ~ <input type="time" name="time2" class={styles.box_input} size="1" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>카테고리</span>
                            <span class={`${styles.cell} ${styles.col2}`}>
                                <select name="food">
                                    <option value="">선택</option>
                                        <option value="한식">한식</option>
                                        <option value="일식">일식</option>
                                        <option value="중식">중식</option>
                                        <option value="디저트">디저트</option>
                                </select>
                            </span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>주차장</span>
                            <span class={`${styles.cell} ${styles.col2}`}>
                                <select name="park">
                                    <option value="O">O</option>
                                    <option value="X">X</option>
                                </select></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>가격대</span>
                            <span class={`${styles.cell} ${styles.col2} ${styles.box_double}`}><input type="text" class={styles.box_input} name="price1" size="1" /> ~ <input type="text" class={styles.box_input} name="price2" size="1" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>사이트</span>
                            <span class={`${styles.cell} ${styles.col2}`}><input type="text" class={styles.box_input} name="site" size="70" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>대표사진</span>
                            <span class={`${styles.cell} ${styles.col2}`}><input type="file" class={styles.btn_image} name="file" accept="image/*" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}></span>
                            <span class={`${styles.cell} ${styles.col2}`}><input type="submit" class={styles.btn_submit} value="기본 정보 등록" /></span>
                            
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default CreateStore;