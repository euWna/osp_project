import styles from '../css/Contents.module.css';
import samplelocation from "../img/location.png";
import sample from '../img/sample.PNG';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Info(props) { //storedetail에서 정보들 props로 받아옴
    const navigate = useNavigate();
    const storefood = props.storefood
    const storeimg = props.storeimg
    const storelocation = props.storelocation
    const storepark = props.storepark
    const storephonenumber = props.storephonenumber
    const storeprice1 = props.storeprice1
    const storeprice2 = props.storeprice2
    const storesite = props.storesite
    const storename = props.storename
    const storetime1 = props.storetime1
    const storetime2 = props.storetime2
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

    const GoCreateReview = () => {

        navigate(`/CreateReview/${params}`);
        // console.log("Pushed")
    }
    const GoRegisteredStore = () => {

        navigate(`/RegisteredStore/${params}`);

    }

    return (
        <div class={styles.outer}>
            <div class={styles.pane}>
                <div id={styles.paneName}>
                    음식점 정보
                </div>
                <div>
                    <img src={"http://127.0.0.1:5000/static/img/" + `${storeimg}`} class={styles.img} />
                </div>
                <div class={styles.info}>
                    <div>
                        <div class={styles.StoreName}>{storename}</div>
                        <div class={styles.storelocation}>
                            <img src={samplelocation} class={styles.locationimg} width="24" height="24" />
                            {props.storelocation}
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                        <div class="Tag">#{storefood} </div>
                        <div class={styles.site}>사이트 {storesite}</div>
                        <div class={styles.phone}>전화번호 {storephonenumber}</div>
                        <div class={styles.time}>운영시간 {storetime1}~{storetime2}</div>
                        <div class={styles.parking}>주차장 {storepark} </div>
                    </div>
                </div>
                <div class={styles.buttons}>
                    <Link to={`/RegisteredStore/${params}`}><button onClick={GoRegisteredStore} class={styles.button}>정보 수정</button></Link>
                    <Link to={`/CreateReview/${params}`}

                    ><button onClick={GoCreateReview} class={styles.button}>리뷰 등록</button></Link>

                </div>
            </div>
        </div>
    );
}

export default Info