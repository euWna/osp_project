import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";
import { Link, useParams } from 'react-router-dom';
import NavBar from "../component/NavBar";
import { useState, useEffect } from 'react';

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
                for (var i = 0; i < length; i++) { //식당 갯수만큼 반복
                    storearr[i] = Object.values(jsonData)[i]
                    storearr[i]["key"] = Object.keys(jsonData)[i] //키값 필요해서 가져옴
                }
                setData(storearr)
                console.log(storearr)
            })
            .catch(
                (err) => console.log(err))
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            {/* {storedata && storedata.map((a => {
                return <Info storename={a.storename} location={a.location} food={a.food} img={a.img_path} storekey={a.key} />
            }))} */}
            <Menu />
            <Review />
        </div>
    );
}

export default StoreDetail;