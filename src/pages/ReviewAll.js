import React from 'react';
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/ReviewAll.module.css';
import NavBar from '../component/NavBar';

function ReviewSection() {
    return <reviewsection className={styles.reviewsection}>
        <div className={styles.reviewsection}>
            <div className={styles.presentreview}>
                <div className={styles.title1}>실시간 리뷰</div>
                <div className={styles.pr_description}>
                    <div className={styles.user_name}>사용자</div>
                    <div className={styles.store_name}>음식점 이름</div>
                    <div className={styles.store_location}>신촌동 xxx xxx</div>
                    <div className={styles.review_title}>리뷰 제목입니다.</div>
                    <div className={styles.review_desc}>본문샘플<br />본문샘플</div>
                    <div className={styles.review_img}><img src={sample} width="250" height="230" /></div>

                </div>
                <div className={styles.pr_description}>
                    <div className={styles.user_name}>사용자</div>
                    <div className={styles.store_name}>음식점 이름</div>
                    <div className={styles.store_location}>신촌동 xxx xxx</div>
                    <div className={styles.review_title}>리뷰 제목입니다.</div>
                    <div className={styles.review_desc}>본문샘플<br />본문샘플</div>
                    <div className={styles.review_img}><img src={sample} width="250" height="230" /></div>
                </div>
                <div className={styles.pr_description}>
                    <div className={styles.user_name}>사용자</div>
                    <div className={styles.store_name}>음식점 이름</div>
                    <div className={styles.store_location}>신촌동 xxx xxx</div>
                    <div className={styles.review_title}>리뷰 제목입니다.</div>
                    <div className={styles.review_desc}>본문샘플<br />본문샘플</div>
                    <div className={styles.review_img}><img src={sample} width="250" height="230" /></div>
                </div>
            </div>
            <div className={styles.hotreview}>
                <div className={styles.title2}>최근 인기 리뷰</div>
                <div className={styles.hot_description}>
                    리스트로 나열
                </div>
            </div>
        </div>
    </reviewsection>
}

function ReviewAll() {
    return (
        <div className={styles.default}>
            <div className={styles.body}>
                <NavBar></NavBar>
                <ReviewSection></ReviewSection>
            </div>
        </div>
    );
}

export default ReviewAll;