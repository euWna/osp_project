import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";
import { Link, useParams } from 'react-router-dom';
import NavBar from "../component/NavBar";
import { useState, useEffect } from 'react';


function StoreDetail() {
    const params = useParams().storename;
    // const [storedata, setData] = useState()

    // useEffect(() => {
    //     fetch(`/StoreDetail/${params}`, { //json 데이터를 받아옴
    //         headers: {
    //             Accept: 'application/json',
    //             method: 'GET'
    //         }
    //     })
    //         .then(response => response.json())

    //         .then(jsonData => {

    //             storedata = Object.values(jsonData)
    //             storedata["key"] = Object.keys(jsonData) //키값 필요해서 가져옴

    //             setData(storedata)
    //             console.log(storedata)
    //         })
    //         .catch(
    //             (err) => console.log(err))
    // }, [])
    // useEffect 가 뭔가 이상함 
    // console.log(StoreInfo)


    return (
        <div>
            <NavBar></NavBar>
            <Info storename={params} />
            <Menu />
            <Review />
        </div>
    );
}

export default StoreDetail;