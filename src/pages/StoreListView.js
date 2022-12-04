import React from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import styles from "../css/StoreListView.module.css";
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import StoreList from '../component/storelist';
import axios from "axios";

import samplelocation from "../img/location.png";
import heart from "../img/heart.png";

import { useState, useEffect } from 'react';

   /* 
function StoreTemplate(storename) {
    return (
        <Link to="/StoreDetail">
            <div class={styles.listbox}>
                <div className={styles.ImagePart}>
                    <img src={sample} width="295" height="125" />
                </div>
                <div class={styles.listdesc}>
                    <div class={styles.StoreName}>{storename}</div>
                    <div class={styles.storelocation}>
                        <img src={samplelocation} class={styles.locationimg} width="18" height="18" />
                        <p class={styles.locationtext}>음식점 주소</p>
                    </div>
                    <div class={styles.Tag}>#태그 #태그</div>
                    <div class={styles.heart}>
                        <img src={heart} class={styles.heartimg} width="14" height="16" />
                        <div class={styles.heartnum}>150</div>
                    </div>
                    <div class={styles.reviewnum}>리뷰""개</div>
                </div>
            </div>
        </Link>
    );
}

// function Storelist(storeinfo){ //value 객체를 props로 받아옴
//     var infoarr = new Array(); 
//     for(const [info] in Object.keys(storeinfo)){ //식당 정보만큼 반복
//         infoarr[info]=Object.values(storeinfo)[info] //식당 정보 저장
//     }
//     return infoarr //정보 담긴 배열 리턴
// }

   /* 
function Stores(){ //데이터 받아와서 식당의 정보들이 들어있는 2차원 배열 반환해주는 함수
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
            for(const [key] in Object.keys(jsonData)) { //식당 갯수만큼 반복
                storearr[key]=Object.values(jsonData)[key]  // 객체임 객체를 배열에 넣는건데...
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
}*/


class StoreListView extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <section>
                    <div class={styles.all} >
                        <div className={styles.StoreList}>
                            <div className={styles.TopBar}>
                                <span className={styles.Result}>결과건</span>
                                <div class={styles.dropdown}>
                                    <span className={styles.Dropdown1}>
                                        <select name="dropFood">
                                            <option value="Dessert">디저트</option>
                                            <option value="Korean">한식</option>
                                            <option value="Japanese">일식</option>
                                            <option value="Chinese">중식</option>
                                        </select>
                                    </span>
                                    <span className="Dropdown2">
                                        <select name="dropSort">
                                            <option value="SortByRecommendation">추천순</option>
                                            <option value="SortByReview">리뷰많은 순</option>
                                            <option value="SortByPrice">가격 낮은 순</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                            < div className={styles.Restaurant}>
                                {/*<Stores></Stores>*/}
                                <StoreList/>
                            </div>
                        </div>
                        <div class={styles.rightbox}>
                            <div className={styles.StoreMap}>
                                {/*지도 API 추가할 부분*/}
                            </div>
                            <button type="button" name="next_button"></button>
                            {/*음식점 목록과 지도 API 사이에 있는 버튼*/}
                            <div class={styles.storelistdetail}>
                            </div>
                        </div>
                    </div >
                </section >
            </div >

        )
    }
}
export default StoreListView;