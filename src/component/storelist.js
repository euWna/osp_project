import { Link } from 'react-router-dom';
import styles from '../css/Storelist.module.css';
import samplelocation from "../img/location.png";
import { useState, useEffect } from 'react';
import StoreDetail from '../pages/StoreDetail';
import Info from './info';

function Storelist(props) {
    var storefood = props.food
    var storeimg = props.img
    var storelocation = props.location
    var storepark = props.park
    var storephonenumber = props.phonenumber
    var storeprice1 = props.price1
    var storeprice2 = props.price2
    var storesite = props.site
    var storename = props.name
    var storetime1 = props.time1
    var storetime2 = props.time2
    
    var storekey = props.storekey

    return (
        <div>
            <Link to={`/StoreDetail/${storename}`} //storelistview에서 받아온 데이터들을 storedetail에 props로 전달
                state={{
                    storefood: storefood,
                    storeimg: storeimg,
                    storelocation: storelocation,
                    storepark: storepark,
                    storephonenumber: storephonenumber,
                    storeprice1 : storeprice1,
                    storeprice2 : storeprice2,
                    storename: storename,  
                    storesite: storesite,
                    storetime1: storetime1,
                    storetime2: storetime2,
                    storekey: storekey
                }}>
                {/* <div className={styles.SendDatas}>
                    {storename}
                    {storelocation}
                    {storedata && storedata.map((a => {
                        const storename = { storename }, storelocation = { storelocation }, food = { food }, storedata = { storedata }

                    }))}

                </div> */}
                {/* , {props.food}, {props.img}, {props.storekey} */}
                {/* 위의 div는 정보를 넘겨주기 위함임 근데 안넘어감... */}
                <div class={styles.listbox}>
                    <div className={styles.ImagePart}>
                        <img src={"http://127.0.0.1:5000/static/img/" + `${storeimg}`} class={styles.img}/>
                    </div>
                    {/* 본문 박스 */}
                    <div class={styles.listdesc}>
                        <div class={styles.StoreName}>{storename}</div>
                        <div class={styles.storelocation}>
                            <div class={styles.locationimg}>
                                <img src={samplelocation} class={styles.locationimg} width="18" height="18" />
                            </div>
                            <p class={styles.locationtext}>{storelocation}</p>
                        </div>
                        <div class={styles.Tag}>#{storefood}</div>
                        {/* <div class={styles.heart}>
                        <img src={heart} class={styles.heartimg} width="14" height="16" />
                        <div class={styles.heartnum}>150</div>
                    </div>
                    <div class={styles.reviewnum}>리뷰""개</div> */}
                    </div>
                </div>
            </Link >
            {/* history.push({location}) */}
        </div>
    );
}

export default Storelist;