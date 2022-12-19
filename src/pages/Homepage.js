import React from 'react';
import { Link } from 'react-router-dom'; //라우팅을 위한 임포트문

import styles from '../css/HomePage.module.css';

import { useState,useEffect } from 'react';

import sample from "../img/sample.PNG";
import samplelocation from "../img/location.png";
import NavBar from '../component/NavBar';
import HotTopic from '../component/hotTopic';

<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"></link>

//금주의 HOT 맛집
//아직 정보 객체에서 못받아옴
function Section() {

      //data 받아오기
      const [random_storedata, setData] = useState()

      useEffect(() => {
          fetch("/Homepage_send_data", { //랜덤 맛집 4개에 대한 json 데이터를 받아옴
              headers: {
                  Accept: 'application/json',
                  method: 'GET'
              }
          })
              .then(response => response.json())
              .then(jsonData => {
                  setData(Object.values(jsonData));
              })
              .catch(
                  (err) => console.log(err))
      }, [])
  
      console.log(random_storedata)

  return <section class={styles.section}>
    <div className={styles.green}>
      <div className={styles.hottitle}>
        {/* <h2>HOT TOPIC</h2> */}
        <div className={styles['link-1']}>
          <a className={styles.hottopic} href="#">
            <span className={styles.thick}>HOT </span><span class={styles.thin}>TOPIC</span>
          </a>
          <p className={styles.homep}>오늘은 여기 어때요?</p>
        </div>
      </div>
      <div className={styles.hotlist_container}>
        {random_storedata
          ? random_storedata.map((a=>{
            return <HotTopic name={a[1].storename} location={a[1].location} img={a[1].img_path} reviewtitle={a[1].reviewtitle} reviewdesc={a[1].reviewdesc}></HotTopic>
        }))
        : <div class={styles.loading}><div class={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div></div>
      }
      </div>
    </div>
  </section>
}

function Homepage() {

  return (
    <div className="">
      <Section></Section>
      <div class={styles.Hbox}>
        <Link to="/StoreListView" class={styles.homeButton}>맛집 모아보기</Link>
        <Link to="/CreateStore" class={styles.homeButton}>맛집 정보 추가하기</Link>
        <Link to="/ReviewAll" class={styles.homeButton}>리뷰 모아보기</Link>
        {/* 여기서 ReviewAll이어야 라우팅 제대로 되는데 혹시 git 오류로 안바뀌면 바꿔주세요 */}
        {/* 페이지 링크는 이렇게 걸어주세요 */}
      </div>
    </div>
  );
}

export default Homepage;
