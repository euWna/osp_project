import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";
import { Link, useParams } from 'react-router-dom';
import NavBar from "../component/NavBar";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";

function StoreDetail(props) {
    const location = useLocation()
    // const params = useParams().storename;

    // storelist에서 받아온 값들을 변수에 저장
    const storefood = location.state.storefood
    const storeimg = location.state.storeimg
    const storelocation = location.state.storelocation
    const storepark = location.state.storepark
    const storephonenumber = location.state.storephonenumber
    const storeprice1 = location.state.storeprice1
    const storeprice2 = location.state.storeprice2
    const storetime1 = location.state.storetime1
    const storetime2 = location.state.storetime2
    const storesite = location.state.storesite
    const storename = location.state.storename
    // const storekey = location.state.storekey
    console.log("storedetail 출력확인")
    console.log(storelocation)

    //이제 storeDetail까지는 정보 넘어감!!!!
    // const getStoreInfo = document.getElementsByClassName("SendDatas").item()
    // textContent의 경우 display 와 상관없이 값을 가져온다고 함
    return (
        <div>
            <NavBar></NavBar>
            <Info storename={storename} storelocation={storelocation} storefood={storefood} storeimg={storeimg} pastoreparkrk={storepark} storephonenumber={storephonenumber} storeprice1={storeprice1} storeprice2={storeprice2} storesite={storesite} storetime1={storetime1} storetime2={storetime2} />
            <Menu />
            <Review />
        </div>
    );
}

export default StoreDetail;