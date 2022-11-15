import React from "react";
import styles from "../css/CreateReview.module.css";
import { Link } from 'react-router-dom'; 
import NavBar from '../component/NavBar';

function CreateReview(){
    return(
        <div>
            <NavBar></NavBar>
            <aside class={styles.aside}>
                <div class = {styles.asideleft}>
                <Link to = "/CreateStore" class={styles.up}>기본정보</Link>
                <Link to = "/CreateMenu" class={styles.down}>메뉴</Link>
                </div>
            </aside>
            <form action="http://127.0.0.1:5000/CreateReview" method="post" enctype="multipart/form-data">
                <section>
                    <div id = {styles.table}>
                        <div class = {styles.row}>
                        <span class = {`${styles.cell} ${styles.col1}`}>전체 평점</span>
                        <span class = {`${styles.cell} ${styles.col1}`}>

                        <input type="text" name="storescore" size="70" />
                                {/* <img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/startwo.jpg" width="30" height ="30"/> */}
                            </span> 
                        </div>
                        <div class = {styles.row}>
                        <span class = {`${styles.cell} ${styles.col1}`}>작성자</span>
                        <span class = {`${styles.cell} ${styles.col1}`}><input type ="text" name = "username"/></span>
                        </div>
                        <div class = {styles.row}>
                        <span class = {`${styles.cell} ${styles.col1}`}>리뷰 제목</span>
                        <span class = {`${styles.cell} ${styles.col1}`}><input type ="text" name = "reviewtitle" size = "70"/></span>
                        </div>
                        <div class = {styles.row}>
                        <span class = {`${styles.cell} ${styles.col1}`}>리뷰 내용</span>
                        <span class = {`${styles.cell} ${styles.col1}`}><textarea name = "reviewdesc" rows ="10" cols = "70"/></span>
                        </div>
                        <div class = {styles.row}>
                        <span class = {`${styles.cell} ${styles.col1}`}>사진</span>
                        <span class = {`${styles.cell} ${styles.col1}`}><input type="file" name="file" accept="image/*" /></span>
                        </div>
                        <div class = {styles.row}>
                        <span class = {`${styles.cell} ${styles.col1}`}></span>
                        <span class = {`${styles.cell} ${styles.col1}`}><input type="submit" value="리뷰 등록" /></span>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default CreateReview;