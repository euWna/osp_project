import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/Storelist.module.css';
import samplelocation from "../img/location.png";
import heart from "../img/heart.png";
import React, { useState, useEffect, Component } from "react";

// 맛집 모아보기 페이지 가게 리스트 컴포넌트
// function Stores() { //데이터 받아와서 식당의 정보들이 들어있는 2차원 배열 반환해주는 함수
//     const [storedata, setData] = useState([{}])
//     var storearr = new Array();
//     useEffect(async () => {
//         fetch("/StoreListView_send_data", { //json 데이터를 받아옴
//             headers: {
//                 Accept: 'application/json',
//                 method: 'GET'
//             }
//         })
//             .then(response => response.json())
//             .then(jsonData => {
//                 for (const [key] in Object.keys(jsonData)) { //식당 갯수만큼 반복
//                     var infoobject = Object.values(jsonData)[key] //각 식당의 정보 객체를 변수 a에 저장
//                     storearr[key] = infoobject
//                 }
//                 console.log(storearr)
//             })
//             .catch(
//                 (err) => console.log(err))
//     }, [])
// }
function Stores() { //데이터 받아와서 식당의 정보들이 들어있는 2차원 배열 반환해주는 함수
    const [storedata, setData] = useState()
    var storearr = new Array();
    useEffect(() => {
        fetch("/StoreListView_send_data", { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                for (const [key] in Object.keys(jsonData)) { //식당 갯수만큼 반복
                    storearr[key] = Object.values(jsonData)[key]  // 객체임 객체를 배열에 넣는건데...
                }
                setData(storearr)
            })
            .catch(
                (err) => console.log(err))
    }, [])

    return (
        <div>
            {(storedata && storedata.map((u) => <p>{u.storename}</p>))}
            {(storedata && storedata.map((u) => <p>{u.location}</p>))}
            {(storedata && storedata.map((u) => <p>{u.food}</p>))}
        </div>
    )
}

function Storelist() {
    const [storedata, setData] = useState([{}])
    var storearr = new Array();
    useEffect(async () => {
        fetch("/StoreListView_send_data", { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                for (const [key] in Object.keys(jsonData)) { //식당 갯수만큼 반복
                    var infoobject = Object.values(jsonData)[key] //각 식당의 정보 객체를 변수 a에 저장
                    storearr[key] = infoobject
                }
                console.log(storearr)
            })
            .catch(
                (err) => console.log(err))
    }, [])
    const storeDetails = storedata.map(storedata => <div key={storedata.storename}>{storedata.location}</div>);
    return (
        <div>
            <Link to="/StoreDetail">
                <Stores></Stores>
                <div class={styles.listbox}>
                    <div className={styles.ImagePart}>
                        <img src={sample} width="295" height="125" />
                    </div>
                    {/* 본문 박스 */}
                    <div class={styles.listdesc}>
                        {/* <div class={styles.StoreName}>{storeDetails["식당샘플"].location}</div> */}
                        <div class={styles.storelocation}>
                            <img src={samplelocation} class={styles.locationimg} width="18" height="18" />
                            <p class={styles.locationtext}>음식점 주소</p>
                        </div>
                        {/* <div class={styles.Tag}>{storedata[1].category}</div> */}
                    </div>
                    <div class={styles.heart}>
                        <img src={heart} class={styles.heartimg} width="14" height="16" />
                        <div class={styles.heartnum}>150</div>
                    </div>
                    <div class={styles.reviewnum}>리뷰""개</div>
                </div>
            </Link>
        </div>

    );
}

export default Storelist;