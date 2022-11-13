import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/ReviewAll.module.css';
import NavBar from '../component/NavBar';

function ReviewSection() {
  return <reviewsection class={styles.reviewsection}>
    <div class = {styles.reviewsection}>
            <div class = {styles.presentreview}>
                <div class={styles.title1}>실시간 리뷰</div>
                <div class = {styles.pr_description}>
                    <div class={styles.user_name}>사용자</div>
                    <div class={styles.store_name}>음식점 이름</div>
                    <div class={styles.store_location}>신촌동 xxx xxx</div>
                    <div class={styles.review_title}>리뷰 제목입니다.</div>
                    <div class={styles.review_desc}>본문샘플<br/>본문샘플</div>
                    <div class={styles.review_img}><img src="sample.PNG" width="250" height="230" /></div>
                </div>
                <div class = {styles.pr_description}>
                    <div class={styles.user_name}>사용자</div>
                    <div class={styles.store_name}>음식점 이름</div>
                    <div class={styles.store_location}>신촌동 xxx xxx</div>
                    <div class={styles.review_title}>리뷰 제목입니다.</div>
                    <div class={styles.review_desc}>본문샘플<br/>본문샘플</div>
                    <div class={styles.review_img}><img src="sample.PNG" width="250" height="230" /></div>
                </div>
                <div class = {styles.pr_description}>
                    <div class={styles.user_name}>사용자</div>
                    <div class={styles.store_name}>음식점 이름</div>
                    <div class={styles.store_location}>신촌동 xxx xxx</div>
                    <div class={styles.review_title}>리뷰 제목입니다.</div>
                    <div class={styles.review_desc}>본문샘플<br/>본문샘플</div>
                    <div class={styles.review_img}><img src="sample.PNG" width="250" height="230" /></div>
                </div>
            </div>
            <div class = {styles.hotreview}>
                <div class={styles.title2}>최근 인기 리뷰</div>
                <div class = {styles.hot_description}>
                    리스트로 나열
                </div>
            </div>
      </div>
  </reviewsection>
}

function ReviewAll() {
    return (
        <div class={styles.default}>
          <head>
          </head>
          <body class={styles.body}>
            <NavBar></NavBar>
            <ReviewSection></ReviewSection>
          </body>
        </div>
      );
}

export default ReviewAll;