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

    var present = props.present

    const testHandler = event => {
        if (present !== storename) {
            event.preventDefault();
        }
      };

    return (
        <div>
            <Link to={`/StoreDetail/${storename}`} onClick={testHandler}
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
                <div class={styles.listbox}>
                        <img src={"http://127.0.0.1:5000/static/img/" + `${storeimg}`} class={styles.img}/>
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
            {/* history.push({location}) */}
            </Link >
        </div>
    );
}

export default Storelist;