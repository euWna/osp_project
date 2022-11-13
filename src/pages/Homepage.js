import React from 'react';
import { Link } from 'react-router-dom'; //라우팅을 위한 임포트문

import styles from '../css/HomePage.module.css';

import {useState} from 'react';

import sample from "../img/sample.PNG";
import samplelocation from "../img/location.png";

<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"></link>

//금주의 HOT 맛집
//아직 정보 객체에서 못받아옴
function Section(){
  return <section class={styles.section}>
          <div class={styles.green}>
            <div class = {styles.hottitle}>
            {/* <h2>HOT TOPIC</h2> */}
            <div class={styles['link-1']}>
        <a class={styles.hottopic} href="#">
        <span class={styles.thick}>HOT </span><span class={styles.thin}>TOPIC</span>
        </a>
        <p>금주의 인기 맛집</p>
      </div>
            </div>
            <div class = {styles.hotlist_container}>
            <Link to="/StoreDetail" class={styles.hotlist}>
            <img src={sample} width="250" height="260"/>
                  <div class = {styles.hotdesc}>
                    <div class = {styles.upcontainer}>
                      <div class = {styles.descname}>식당 이름</div>
                      {/* <div class = "star">별점</div> */}
                    </div>
                    <div class = {styles.descloca}><img src={samplelocation} width="14" height="14" />위치 신촌동 어쩌구</div>
                    <div class = {styles.menuname}>메뉴 이름</div>
                    <div class = {styles.review}>리뷰 본문 샘플입니다.</div>
                  </div>
            </Link>
              <a href ="#" class = {styles.hotlist}>
              <img src={sample} width="250" height="260"/>
                  <div class = {styles.hotdesc}>
                    <div class = {styles.upcontainer}>
                      <div class = {styles.descname}>식당 이름</div>
                      {/* <div class = "star">별점</div> */}
                    </div>
                    <div class = {styles.descloca}><img src={samplelocation} width="14" height="14" />위치 신촌동 어쩌구</div>
                    <div class = {styles.menuname}>메뉴 이름</div>
                    <div class = {styles.review}>리뷰 본문 샘플입니다.</div>
                  </div>
              </a>
              <a href ="#" class = {styles.hotlist}>
              <img src={sample} width="250" height="260"/>
                  <div class = {styles.hotdesc}>
                    <div class = {styles.upcontainer}>
                      <div class = {styles.descname}>식당 이름</div>
                      {/* <div class = "star">별점</div> */}
                    </div>
                    <div class = {styles.descloca}><img src={samplelocation} width="14" height="14" />위치 신촌동 어쩌구</div>
                    <div class = {styles.menuname}>메뉴 이름</div>
                    <div class = {styles.review}>리뷰 본문 샘플입니다.</div>
                  </div>
              </a>
              <a href ="#" class = {styles.hotlist}>
              <img src={sample} width="250" height="260"/>
                  <div class = {styles.hotdesc}>
                    <div class = {styles.upcontainer}>
                      <div class = {styles.descname}>식당 이름</div>
                      {/* <div class = "star">별점</div> */}
                    </div>
                    <div class = {styles.descloca}><img src={samplelocation} width="14" height="14" />위치 신촌동 어쩌구</div>
                    <div class = {styles.menuname}>메뉴 이름</div>
                    <div class = {styles.review}>리뷰 본문 샘플입니다.</div>
                  </div>
              </a>
            </div>
          </div>
  </section>
}

function Homepage() {
  return (
    <div className="">
        <Section></Section>
          <div class = {styles.Hbox}>
            <Link to="/StoreListView" class={styles.homeButton}>맛집 모아보기</Link>
            <Link to="/CreateStore" class={styles.homeButton}>맛집 정보 추가하기</Link>
            <Link to="/reviewAll" class={styles.homeButton}>리뷰 모아보기</Link>
            {/* 페이지 링크는 이렇게 걸어주세요 */}
          </div>
    </div>
  );
} 

export default Homepage;
