import React from "react";
import styles from "../css/CreateStore.module.css";
import { Link } from 'react-router-dom';
import NavBar from '../component/NavBar';

function CreateStore(){
    return (
        <div>
            <NavBar></NavBar>
        <section>
        <aside>
            <div class={styles.asideleft}>
                <Link to = "/CreateStore" class={styles.up}>기본정보</Link>
                <Link to = "/CreateMenu" class={styles.down}>메뉴</Link>
            </div>
        </aside>
                <form action="http://127.0.0.1:5000/CreateStore" method="post" enctype="multipart/form-data">
                <div id={styles.table}>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>매장명</span>
                        <span class={`${styles.cell} ${styles.col2}`}><input type="text" name="storename" /></span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>주소</span>
                        <span class={`${styles.cell} ${styles.col2}`}><input type="text" name="location" size="70" /></span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>전화번호</span>
                        <span class={`${styles.cell} ${styles.col2}`}><input type="text" name="phonenumber" /></span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>영업시간</span>
                        <span class={`${styles.cell} ${styles.col2}`}><input type="text" name="time1" size="1" />:<input type="text" name="time2" size="1" />   ~   <input type="text" name="time3" size="1" />:<input type="text" name="time4" size="1" /></span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>카테고리</span>
                        <span class={`${styles.cell} ${styles.col2}`}>
                            <select name="food">
                                <option value="">선택</option>
                                <option value="kor">한식</option>
                                <option value="jap">일식</option>
                                <option value="chi">중식</option>
                            </select>
                        </span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>주차장</span>
                        <span class={`${styles.cell} ${styles.col2}`}><input type='button' value="O" /> <input type="button" value="X" /></span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>가격대</span>
                        <span class={`${styles.cell} ${styles.col2}`}><input type="money1" name="money1" size="8" />   ~   <input type="money2" name="money2" size="8" /></span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>사이트</span>
                        <span class={`${styles.cell} ${styles.col2}`}><input type="site" name="site" size="70" /></span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>대표사진</span>
                        <span class={`${styles.cell} ${styles.col2}`}><input type="file" name="file" accept="image/*" /></span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}></span>
                        <span class={`${styles.cell} ${styles.col2}`}><input type="submit" value="기본 정보 등록" /></span>
                    </div>
                </div>
                </form>
            </section>
            </div>
    )
                    }

export default CreateStore;