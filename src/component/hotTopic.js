import { Link } from 'react-router-dom';
import styles from '../css/HotTopic.module.css';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sample from "../img/sample.PNG";
import samplelocation from "../img/location.png";

function HotTopic(props) {

  var storeimg = props.img
  var storelocation = props.location
  var storename = props.name
  var reviewtitle = props.reviewtitle
  var reviewdesc = props.reviewdesc


  console.log(storeimg)

  return (
    <Link to={`/StoreDetail/${storename}`} class={styles.hotlist}>
      <img src={"http://127.0.0.1:5000/static/img/" + `${storeimg}`} class={styles.img} width="250" height="260" />
      <div class={styles.hotdesc}>
        <div class={styles.upcontainer}>
          <div class={styles.descname}>{storename}</div>
        </div>
        <div class={styles.descloca}><img src={samplelocation} width="14" height="14" />{storelocation}</div>
        <div class={styles.menuname}>{reviewtitle}</div>
        <div class={styles.review}>{reviewdesc}</div>
      </div>
    </Link>
  )
}

export default HotTopic;