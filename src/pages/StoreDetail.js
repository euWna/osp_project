import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";
import { Link, useParams } from 'react-router-dom';
import NavBar from "../component/NavBar";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";
import InfoShow from "../component/InfoShow";

//이렇게 하면 info는 됨...
function StoreDetail() {
    const params = useParams().storename;

    const [storedata, setData] = useState()
    var storearr = new Array();

    useEffect(() => {
        fetch(`/StoreDetail/${params}`, { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                var length = Object.keys(jsonData).length
                for (var i = 0; i < length; i++) { //등록된 메뉴 갯수만큼 반복
                    storearr[i] = Object.values(jsonData)[i]
                }
                setData(storearr)
            })
            .catch(
                (err) => console.log(err))
    }, [])
    console.log(storedata)

    return (
        <div>
            <NavBar></NavBar>
            <InfoShow />
            <Menu />
            <Review />
        </div>
    );
}

export default StoreDetail;