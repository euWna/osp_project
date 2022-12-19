import React from 'react';
// import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/ReviewAll.module.css';
import NavBar from '../component/NavBar';
import ReviewPost from '../component/reviewPost'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ReviewSection(props) {
    // const reviewimg = props.reviewimg
    // const reviewdesc = props.reviewdesc
    // const reviewtitle = props.reviewtitle
    // const reviewstorescore = props.reviewstorescore
    // const reviewusername = props.reviewusername
    // const reviewstorename = props.reviewstorename
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
                var length = Object.keys(jsonData).length
                // var length = Object(jsonData).length
                for (var i = 0; i < length; i++) { //식당 갯수만큼 반복
                    reviewarr[i] = Object.values(jsonData)[i]
                    reviewarr[i]["key"] = Object.keys(jsonData)[i] //키값 필요해서 가져옴
                }
                setData(reviewarr)
            })
            .catch(
                (err) => console.log(err))
    }, [])
    console.log(reviewdata)

    return <reviewsection className={styles.reviewsection}>
        <div className={styles.reviewsection}>
            <div className={styles.presentreview}>

                {reviewdata && reviewdata.map((a => {
                    return <div>
                        <ReviewPost reviewimg={a.img_path} reviewdesc={a.reviewdesc} reviewtitle={a.reviewtitle}
                            reviewstorescore={a.storescore} reviewusername={a.username} reviewstorename={a.storename} />
                    </div>
                }))}

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
                var length = Object.keys(jsonData).length
                for (var i = 0; i < length; i++) { //식당 갯수만큼 반복
                    reviewarr[i] = Object.values(jsonData)[i]
                    reviewarr[i]["key"] = Object.keys(jsonData)[i] //키값 필요해서 가져옴
                }
                setData(reviewarr)
            })
            .catch(
                (err) => console.log(err))
    }, [])
    console.log(reviewdata)
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