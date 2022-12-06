import { Link } from 'react-router-dom';
import styles from '../css/Storelist.module.css';
import samplelocation from "../img/location.png";
import { useState, useEffect } from 'react';

function Storelist(props) {
    // super(props)
    return (
        <Link to="/StoreDetail">
            <div class={styles.listbox}>
                <div className={styles.ImagePart}>
                 <img src={"http://127.0.0.1:5000/static/img/"+ `${props.img}`} width="295" height="125" />
                </div>
                {/* 본문 박스 */}
                <div class={styles.listdesc}>
                    <div class={styles.StoreName}>{props.name}</div>
                    <div class={styles.storelocation}>
                        <div class={styles.locationimg}>
                        <img src={samplelocation} class={styles.locationimg} width="18" height="18" />
                        </div>
                        <p class={styles.locationtext}>{props.location}</p>
                    </div>
                    <div class={styles.Tag}>#{props.food}</div>
                    {/* <div class={styles.heart}>
                        <img src={heart} class={styles.heartimg} width="14" height="16" />
                        <div class={styles.heartnum}>150</div>
                    </div>
                    <div class={styles.reviewnum}>리뷰""개</div> */}
                </div>
            </div>
        </Link>
    );
}

export default Storelist;
