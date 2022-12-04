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
                    storedata[key] = Object.values(jsonData)[key]  // 객체임 객체를 배열에 넣는건데...
                }
                setData(storedata)
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

export default Stores;