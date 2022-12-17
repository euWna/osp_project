import React from "react";
import styles from "../css/CreateReview.module.css";
import { Link, useParams, useLocation } from 'react-router-dom';
import NavBar from '../component/NavBar';

function CreateReview(props) {

    const params = useParams().storename;
    const location = useLocation()
    const storeimg = location.state.storeimg


    return (
        <div>
            <NavBar></NavBar>
            <section>
            <aside class={styles.aside}>
                <div class={styles.asideleft}>
                    <div class={styles.ImagePart}>
                        <img src={"http://127.0.0.1:5000/static/img/" + `${storeimg}`} class={styles.img}/>
                    </div>
                    <div class={styles.storename}>
                     {params}
                    </div>
                </div>
            </aside>
            <form action={`http://127.0.0.1:5000/CreateReview/${params}`} method="POST" enctype="multipart/form-data">
                    <div id={styles.table}>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>전체 평점</span>
                            <span class={`${styles.cell} ${styles.col1}`}>

                                <input type="text" name="storescore" size="70" />
                                {/* <img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/startwo.jpg" width="30" height ="30"/> */}
                            </span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>작성자</span>
                            <span class={`${styles.cell} ${styles.col1}`}><input type="text" name="username" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>리뷰 제목</span>
                            <span class={`${styles.cell} ${styles.col1}`}><input type="text" name="reviewtitle" size="70" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>리뷰 내용</span>
                            <span class={`${styles.cell} ${styles.col1}`}><textarea name="reviewdesc" rows="10" cols="70" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}>사진</span>
                            <span class={`${styles.cell} ${styles.col1}`}><input type="file" name="file" accept="image/*" /></span>
                        </div>
                        <div class={styles.row}>
                            <span class={`${styles.cell} ${styles.col1}`}></span>
                            <span class={`${styles.cell} ${styles.col1}`}><input type="submit" value="리뷰 등록" /></span>
                        </div>
                    </div>
            </form>
            </section>

        </div>
    )
}

export default CreateReview;