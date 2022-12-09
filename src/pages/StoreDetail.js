import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";
import { Link, useParams } from 'react-router-dom';
import NavBar from "../component/NavBar";
import { useState, useEffect } from 'react';

function StoreDetail(props) {
    const params = useParams().storename;
    // const [location, history] = useState()
    // // console.log(storelocation)
    // const storelocation = this.props.location.state.storelocation
    const [storedata, setData] = useState()
    // // var registeredarr = new Array();
    // // //var storearr = new Array(); 

    useEffect(() => {
        fetch(`/StoreDetail/${params}`, { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                storedata = jsonData;
                setData(storedata);
            })
            .catch(
                (err) => console.log(err))
    }, [])
    const getStoreInfo = document.getElementByClassName("SendDatas").textContent
    // textContent의 경우 display 와 상관없이 값을 가져온다고 들음
    console.log(getStoreInfo)
    console.log("getStoreInfo")
    console.log("storelocation>")
    console.log(props.storelocation)
    //    location 만 받아올 수 있으면 해결인데ㅠㅠㅠㅠ
    // location.storelocation 과 같이 쓸 수 있어야함

    return (
        <div>
            <NavBar></NavBar>
            {/* {storedata && storedata.map((a => {
                return <Info name={a.storename} location={a.location} food={a.food} img={a.img_path} storekey={a.key} />
            }))} */}
            {/* <Info storename={params} storelocation={storelocation} /> */}
            <Menu />
            <Review />
        </div>
    );
}

export default StoreDetail;