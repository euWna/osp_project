import styles from '../css/preview.module.css';
import samplelocation from "../img/location.png";
import sample from '../img/sample.PNG';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';


function Preview(props) { //storedetail에서 정보들 props로 받아옴
    const navigate = useNavigate();
    const storefood = props.storefood
    const storeimg = props.storeimg
    const storelocation = props.storelocation
    const storepark = props.storepark
    const storephonenumber = props.storephonenumber
    const storeprice1 = props.storeprice1
    const storeprice2 = props.storeprice2
    const storesite = props.storesite
    const storename = props.storename
    const storetime1 = props.storetime1
    const storetime2 = props.storetime2
    const GoRegisteredStore = () => {

        navigate(`/RegisteredStore/${storename}`);

    }
    const GoCreateReview = () => {

        navigate(`/CreateReview/${storename}`);
        console.log("Pushed")
    }
    const GoStoreDetail = () => {

        navigate(`/StoreDetail/${storename}`);

    }
    return (
        <div class={styles.prebox}>
            {/* <div class={styles.pretitle}>
                    음식점 정보
                </div> */}
            <img src={"http://127.0.0.1:5000/static/img/" + `${storeimg}`} class={styles.img} />
            <div class={styles.info}>
                <div class={styles.StoreName}>
                    {storename}
                </div>
                <div class={styles.storelocation}>
                    <img src={samplelocation} class={styles.locationimg} width="24" height="24" />
                    <div class={styles.locationtext}>{props.storelocation}</div>
                </div>
                <div class={styles.Tag}>#{storefood} </div>
                <div id={styles.table}>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>사이트</span>
                        <span class={`${styles.cell} ${styles.col2}`}>
                            <a href={storesite} class={styles.link}>{storesite}</a></span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>전화번호</span>
                        <span class={`${styles.cell} ${styles.col2}`}>{storephonenumber}</span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>운영시간</span>
                        <span class={`${styles.cell} ${styles.col2}`}>{storetime1}~{storetime2}</span>
                    </div>
                    <div class={styles.row}>
                        <span class={`${styles.cell} ${styles.col1}`}>주차장</span>
                        <span class={`${styles.cell} ${styles.col2}`}>{storepark}</span>
                    </div>
                </div>
            </div>
            <div class={styles.buttons}>
                <Link to={`/RegisteredStore/${props.storename}`}><button onClick={GoRegisteredStore} class={styles.button}>정보 수정</button></Link>
                <Link to={`/CreateReview/${props.storename}`}
                    state={{
                        storefood: storefood,
                        storeimg: storeimg,
                        storelocation: storelocation,
                        storepark: storepark,
                        storephonenumber: storephonenumber,
                        storeprice1: storeprice1,
                        storeprice2: storeprice2,
                        storename: storename,
                        storesite: storesite,
                        storetime1: storetime1,
                        storetime2: storetime2
                    }}><button onClick={GoCreateReview} class={styles.button}>리뷰 등록</button></Link>
                <Link to={`/StoreDetail/${props.storename}`}><button onClick={GoStoreDetail} class={styles.button}>자세히 보기</button></Link>
            </div>
        </div>
    );
}

export default Preview;