import React from 'react';
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/ReviewAll.module.css';
import NavBar from '../component/NavBar';
import ReviewPost from '../component/reviewPost'

function ReviewSection() {
    return <reviewsection className={styles.reviewsection}>
        <div className={styles.reviewsection}>
            <div className={styles.presentreview}>
                <ReviewPost/>
                <ReviewPost/>
                <ReviewPost/>
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