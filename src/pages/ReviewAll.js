import React from 'react';
// import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/ReviewAll.module.css';
import NavBar from '../component/NavBar';
import ReviewPost from '../component/reviewPost'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ReviewSection(props) {

    const [reviewdata, setData] = useState()
    var reviewarr = new Array();

    useEffect(() => {
        fetch(`/Review_send_data`, { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                setData(jsonData)
            })
            .catch(
                (err) => console.log(err))
    }, [])

    // console.log(reviewdata)

    return <reviewsection className={styles.reviewsection}>
        <div className={styles.reviewsection}>
            <div className={styles.presentreview}>
                {reviewdata&&reviewdata.map((a => { //a는 객체들 들어있는 배열 
                        return <ReviewPost reviewimg={a.img_path} reviewdesc={a.reviewdesc} reviewtitle={a.reviewtitle}
                        reviewstorescore={a.storescore} reviewusername={a.username} reviewstorename={a.storename} />
                    }
                ))}
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
                <ReviewSection />
            </div>
        </div>
    );
}

export default ReviewAll;