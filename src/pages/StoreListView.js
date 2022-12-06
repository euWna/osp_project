import React from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import styles from "../css/StoreListView.module.css";
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import StoreList from '../component/storelist';
import { useState, useEffect } from 'react';

function StoreListView() {
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
                            {storedata && storedata.map((a => {
                                return <StoreList name={a.storename} location={a.location} food={a.food} img={a.img_path} img_file={a.img_file} /> //img_path로 해야 undefined가 안떠서 수정했어요
                            }))}
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
export default StoreListView;