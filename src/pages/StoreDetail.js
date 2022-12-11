import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";
import { Link, useParams } from 'react-router-dom';
import NavBar from "../component/NavBar";
import { useState, useEffect } from 'react';
import axios from "axios";


function StoreDetail(props) {

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

    // console.log(storename)
    // console.log(storelocation)
    // console.log("storearr")
    // console.log(storearr)
    const storelocation = this.props.location.storedata.storelocation
    // console.log("storedata")
    // console.log(storedata)
    console.log("storelocation:")
    console.log(storelocation)
    // const getStoreInfo = document.getElementsByClassName("SendDatas").item()
    // textContent의 경우 display 와 상관없이 값을 가져온다고 함
    // console.log(getStoreInfo)
    // console.log("getStoreInfo")
    // console.log("storelocation>")
    // console.log(props.storelocation)

    // console.log(storedata)
    //    location 만 받아올 수 있으면 해결인데ㅠㅠㅠㅠ
    // location.storelocation 과 같이 쓸 수 있어야함

    return (
        <div>
            <NavBar></NavBar>
            {/* {storedata && storedata.map((a => {
                return <Info name={a.storename} location={a.location} food={a.food} img={a.img_path} storekey={a.key} />
            }))} */}
            <Info storename={params} />
            <Menu />
            <Review />
        </div>
    );
}

export default StoreDetail;