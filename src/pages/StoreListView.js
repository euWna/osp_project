import React from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import styles from "../css/StoreListView.module.css";
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import StoreList from '../component/storelist';
import { useState, useEffect } from 'react';
import Preview from "../component/preview"
import Catagories from '../component/catagories'


function StoreListView() {
    const [storedata, setData] = useState()
    useEffect(() => {
        fetch("/StoreListView_send_data", { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                setData(Object.values(jsonData));
            })
            .catch(
                (err) => console.log(err))
    }, [])


    //클릭하면 오른쪽에 맛집 정보 프리뷰를 보여줌
    const [content, setContent] = useState();

    const handleClickButton = (e) => {
        setContent(e);
    };

 
    //카테고리 정렬 코드
    const allCategories = ['전체', ...new Set(storedata&&storedata.map((a) => a.food))];
    console.log("선"+JSON.stringify(storedata));
    const [menuItems, setMenuItems] = useState(storedata);
    console.log("후"+menuItems);

    const filterItems = (category) => {
        if (category === '전체') {
        setMenuItems(storedata);
        return;
        }
        const newItems = storedata.filter((item) => item.food === category);
        setMenuItems(newItems);
    };

    const [selected, setSelected] = useState("전체");

    return (
        <div>
            <NavBar />
            <section>
                <div class={styles.all} >
                    <div className={styles.StoreList}>
                        <div className={styles.TopBar}>
                            {storedata&&<span className={styles.Result}>결과건{"("}{<div class={styles.number}>{storedata.length}</div>}{")"}</span>
                            }
                            <div class={styles.dropdown}>
                                    {<Catagories categories={allCategories} filterItems={filterItems} selected={selected} setSelected={setSelected}/>} 
                            </div>
                        </div>
                        < div className={styles.Restaurant}>
                            {/* 카테고리별 정렬*/}
                            {menuItems? menuItems.map((a => { 
                                if(content){
                                    var state=content.storename
                                }else{
                                    var state=null
                                }
                                return <div onClick={()=>handleClickButton(a)}>
                                <StoreList name={a.storename} location={a.location} food={a.food} img={a.img_path} park={a.park} phonenumber={a.phonenumber} price1={a.price1} price2={a.price2} site={a.site} time1={a.time1} time2={a.time2} storekey={a.key} storedata={storedata} present={state}/>
                                </div>
                            })) : storedata? 
                            storedata.map((a => { 
                                if(content){
                                    var state=content.storename
                                }else{
                                    var state=null
                                }
                                return <div onClick={()=>handleClickButton(a)}>
                                <StoreList name={a.storename} location={a.location} food={a.food} img={a.img_path} park={a.park} phonenumber={a.phonenumber} price1={a.price1} price2={a.price2} site={a.site} time1={a.time1} time2={a.time2} storekey={a.key} storedata={storedata} present={state}/>
                                </div>})) : null
                            }
                        </div>
                    </div>
                    <div class={styles.rightbox}>
                            { content
                                ? <Preview storename={content.storename} storelocation={content.location} storefood={content.food} storeimg={content.img_path} pastoreparkrk={content.park} storephonenumber={content.phonenumber} storeprice1={content.price1} storeprice2={content.price2} storesite={content.site} storetime1={content.time1} storetime2={content.time2}/>
                                : <div class={styles.loading}>맛집을 선택해주세요!<div class={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div></div>
                            }
                    </div>
                </div >
            </section >
        </div >
    )
}
export default StoreListView;