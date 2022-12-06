import { Link } from 'react-router-dom';
import styles from '../css/PopUp.module.css';
import samplelocation from "../img/location.png";
import React, { ReactElement, useEffect, useState } from 'react';

function PopUp(props) {

    return (
        <Link to="/StoreDetail">
            <div class={styles.listbox}>
                <div className={styles.ImagePart2}>
                    <img src={process.env.PUBLIC_URL + '/assets/' + `${props.img}`} width="295" height="125" />
                </div>
                {/* 본문 박스 */}
                <div class={styles.listdesc2}>
                    <div class={styles.StoreName2}>{props.name}</div>
                    <div class={styles.storelocation2}>
                        <p class={styles.locationtext2}>
                            <img src={samplelocation} class={styles.locationimg} width="18" height="18" />{props.location}</p>
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

export default PopUp;