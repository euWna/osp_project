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

function Stores(){
    const [storedata, setData] = useState([{}])
    useEffect(() => {
        fetch("/StoreListView", {
            headers: {
                Accept: "application/json",
            }
        })
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData)
            setData(storedata);
        })
        .catch(
            (err) => console.log(err))
    }, [])

    return (
          <div>
            {/* 삼항연산자 */}
            { (typeof storedata.storename === 'undefined') ? (
              // fetch가 완료되지 않았을 경우에 대한 처리
              <p>loding...</p>
            ) : (
              storedata.storename.map((u) => <p>{u.storename}</p>)
            )}
            </div>
      )
}


class StoreListView extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <section>
                <Stores></Stores>
                
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
                                {/* flask에서 받아올 수 있는 코드 수정 */}
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
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