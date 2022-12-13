import { Link } from 'react-router-dom';
import styles from '../css/Storelist.module.css';
import samplelocation from "../img/location.png";
import { useState, useEffect } from 'react';
import StoreDetail from '../pages/StoreDetail';
import Info from './info';

function Storelist(props) {
    var storename = props.name
    var storelocation = props.location
    var storefood = props.food
    var storeimg = props.img
    var storekey = props.storekey
    // const location = {
    //     pathname: '/StoreDetail/:storename',
    //     state: {
    //         storename: storename,
    //         storelocation: storelocation,
    //         // food: props.food,
    //         // img: props.img
    //         // storekey: props.storekey,
    //         // storename: storename,
    //         // storelocation: storelocation
    //     }
    // }             
    const storedata = props.storedata
    console.log("여기서부터가 storelist.js 의 storedata")
    console.log(storedata)
    return (
        <div>

            <Link to={`/StoreDetail/${storename}`}
                state={{
                    storelocation: storelocation,
                    storefood: storefood,
                    storeimg: storeimg,
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
                        <img src={"http://127.0.0.1:5000/static/img/" + `${props.img}`} width="295" height="125" />
                    </div>
                    {/* 본문 박스 */}
                    <div class={styles.listdesc}>
                        <div class={styles.StoreName}>{props.name}</div>
                        <div class={styles.storelocation}>
                            <div class={styles.locationimg}>
                                <img src={samplelocation} class={styles.locationimg} width="18" height="18" />
                            </div>
                            <p class={styles.locationtext}>{props.location}</p>
                        </div>
                        <div class={styles.Tag}>#{props.food}</div>
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