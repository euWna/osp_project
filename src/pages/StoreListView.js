import React from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import styles from "../css/StoreListView.module.css";
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import StoreList from '../component/storelist';
import { useState, useEffect } from 'react';
import Preview from "../component/preview"

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
                var length = Object.keys(jsonData).length
                for (var i = 0; i < length; i++) { //식당 갯수만큼 반복
                    storearr[i] = Object.values(jsonData)[i]
                    storearr[i]["key"] = Object.keys(jsonData)[i] //키값 필요해서 가져옴
                }
                setData(storearr)
            })
            .catch(
                (err) => console.log(err))
    }, [])

    //클릭하면 오른쪽에 맛집 정보 프리뷰를 보여줌
    const [content, setContent] = useState();

    const handleClickButton = (e) => {
        setContent(e);
    };

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
                            {storedata&&storedata.map((a => { 
                                if(content){
                                    var state=content.storename
                                }else{
                                    var state=null
                                }
                                return <div onClick={()=>handleClickButton(a)}>
                                <StoreList name={a.storename} location={a.location} food={a.food} img={a.img_path} park={a.park} phonenumber={a.phonenumber} price1={a.price1} price2={a.price2} site={a.site} time1={a.time1} time2={a.time2} storekey={a.key} storedata={storedata} present={state}/>
                                </div>
                            }))}
                        </div>
                    </div>
                    <div class={styles.rightbox}>
                        <div className={styles.StoreMap}>
                            {content&&<Preview storename={content.storename} storelocation={content.location} storefood={content.food} storeimg={content.img_path} pastoreparkrk={content.park} storephonenumber={content.phonenumber} storeprice1={content.price1} storeprice2={content.price2} storesite={content.site} storetime1={content.time1} storetime2={content.time2}/>}
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}
export default StoreListView;