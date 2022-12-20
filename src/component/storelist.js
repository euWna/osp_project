import { Link } from 'react-router-dom';
import styles from '../css/Storelist.module.css';
import samplelocation from "../img/location.png";
import { useState, useEffect } from 'react';
import StoreDetail from '../pages/StoreDetail';
import Info from './info';
import { useNavigate } from 'react-router-dom';

function Storelist(props) {
    const navigate = useNavigate();
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
        else {
            navigate(`/StoreDetail/${storename}`)
        }

    };

    return (
        <div>
            <Link to={`/StoreDetail/${storename}`} onClick={testHandler}>
                <div class={styles.listbox}>
                    <img src={"http://127.0.0.1:5000/static/img/" + `${storeimg}`} class={styles.img} />
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

                    </div>
                </div>

            </Link >
        </div>
    );
}

export default Storelist;