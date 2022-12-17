import { Link } from 'react-router-dom';
import styles from '../css/Contents.module.css';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function HotTopic(){

    const hotStorename = useParams().storename;

    return (
        <Link to="/StoreDetail" class={styles.hotlist}>
          <img src={sample} width="250" height="260" />
          <div class={styles.hotdesc}>
            <div class={styles.upcontainer}>
              <div class={styles.descname}>식당 이름</div>
              {/* <div class = "star">별점</div> */}
            </div>
            <div class={styles.descloca}><img src={samplelocation} width="14" height="14" />위치 신촌동 어쩌구</div>
            <div class={styles.menuname}>메뉴 이름</div>
            <div class={styles.review}>리뷰 본문 샘플입니다.</div>
          </div>
        </Link>
    )
}

export default HotTopic;