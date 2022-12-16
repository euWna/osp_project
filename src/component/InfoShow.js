import Info from "./info"
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function InfoShow() {
    const params = useParams().storename;
    const [storedata, setData] = useState()
    var storearr = new Array();

    useEffect(() => {
        fetch(`/get_registered_store/${params}`, { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                storearr[0] = jsonData;
                setData(storearr);
            })
            .catch((err) => console.log(err))
    }, [])

    console.log(storedata)
    return (<>
        {storedata && storedata.map((a => {
            return <div>
                <Info storename={a.storename} storelocation={a.location} storephonenumber={a.phonenumber}
                    storetime1={a.time1} storetime2={a.time2} storefood={a.food} storepark={a.park} storeimg={a.img_path} storesite={a.site} storeprice1={a.price1} storeprice2={a.price2} />
            </div>
        }))}</>)


}

export default InfoShow