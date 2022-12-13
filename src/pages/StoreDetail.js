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
    const storelocation = location.state.storelocation
    // const [storedata, setData] = useState()
    // var storearr = new Array();
    const params = useParams().storename;
    // const storename = params
    // console.log(storename)
    // useEffect(() => {
    //     fetch(`/StoreDetail/${params}`, { //json 데이터를 받아옴
    //         headers: {
    //             Accept: 'application/json',
    //             method: 'GET'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(setData(storedata))
    //         .catch(
    //             (err) => console.log(err))
    // }, [])

    console.log("storelocation:")
    console.log(storelocation)
    //이제 storeDetail까지는 정보 넘어감!!!!
    // const getStoreInfo = document.getElementsByClassName("SendDatas").item()
    // textContent의 경우 display 와 상관없이 값을 가져온다고 함



    return (
        <div>
            <NavBar></NavBar>
            {/* {storedata && storedata.map((a => {
                return <Info name={a.storename} location={a.location} food={a.food} img={a.img_path} storekey={a.key} />
            }))} */}
            <Info storename={params} storelocation={storelocation} storeimg={location.state.storeimg} />
            <Menu />
            <Review />
        </div>
    );
}

export default StoreDetail;