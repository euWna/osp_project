import Header from "../component/header";
import Info from "../component/info"
import Menu from "../component/menu";
import Review from "../component/review";
import { Link, useParams } from 'react-router-dom';
import NavBar from "../component/NavBar";
import { useState, useEffect } from 'react';


function StoreDetail(props) {
    const params = useParams().storename;

    // const [registered, setData] = useState()
    // var registeredarr = new Array();
    // //var storearr = new Array(); 

    // useEffect(() => {
    //     fetch(`/get_registered_store/${params}`, { //json 데이터를 받아옴
    //         headers: {
    //             Accept: 'application/json',
    //             method: 'GET'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(jsonData => {
    //             registeredarr[0] = jsonData;
    //             setData(registeredarr);
    //         })
    //         .catch(
    //             (err) => console.log(err))
    // }, [])
    // console.log("출력확인");
    // console.log(registered);
    // useEffect 가 뭔가 이상함
    //그냥 storedata 자체를 못받아오고 있음

    return (
        <div>
            <NavBar></NavBar>
            <Info storename={params} storelocation={props.location} />
            <Menu />
            <Review />
        </div>
    );
}

export default StoreDetail;