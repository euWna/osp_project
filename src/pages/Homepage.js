import '../css/HomePage.css';
import {useState} from 'react';
import Header from '../component/header';
import sample from "../img/sample.PNG";
import samplelocation from "../img/location.png";
// import deco1 from "./img/deco1.png";
// import deco2 from "./img/deco2.png";
// import deco3 from "./img/deco3.png";
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"></link>

//금주의 HOT 맛집
//아직 정보 객체에서 못받아옴
function Section(){
  return <section>
          <div class = "green">
            <div class = "hottitle">
            {/* <h2>HOT TOPIC</h2> */}
            <div class="link-1">
        <a class="hottopic" href="#">
        <span class="thick">HOT </span><span class="thin">TOPIC</span>
        </a>
        <p>금주의 인기 맛집</p>
      </div>
            </div>
            <div class = "hotlist_container">
            <a href ="#" class = "hotlist">
              <img src={sample} width="250" height="260"/>
                  <div class = "hotdesc">
                    <div class = "upcontainer">
                      <div class = "descname">식당 이름</div>
                      {/* <div class = "star">별점</div> */}
                    </div>
                    <div class = "descloca"><img src={samplelocation} width="14" height="14" />위치 신촌동 어쩌구</div>
                    <div class = "menuname">메뉴 이름</div>
                    <div class = "review">리뷰 본문 샘플입니다.</div>
                  </div>
              </a>
              <a href ="#" class = "hotlist">
              <img src={sample} width="250" height="260"/>
                  <div class = "hotdesc">
                    <div class = "upcontainer">
                      <div class = "descname">식당 이름</div>
                      {/* <div class = "star">별점</div> */}
                    </div>
                    <div class = "descloca"><img src={samplelocation} width="14" height="14" />위치 신촌동 어쩌구</div>
                    <div class = "menuname">메뉴 이름</div>
                    <div class = "review">리뷰 본문 샘플입니다.</div>
                  </div>
              </a>
              <a href ="#" class = "hotlist">
              <img src={sample} width="250" height="260"/>
                  <div class = "hotdesc">
                    <div class = "upcontainer">
                      <div class = "descname">식당 이름</div>
                      {/* <div class = "star">별점</div> */}
                    </div>
                    <div class = "descloca"><img src={samplelocation} width="14" height="14" />위치 신촌동 어쩌구</div>
                    <div class = "menuname">메뉴 이름</div>
                    <div class = "review">리뷰 본문 샘플입니다.</div>
                  </div>
              </a>
              <a href ="#" class = "hotlist">
              <img src={sample} width="250" height="260"/>
                  <div class = "hotdesc">
                    <div class = "upcontainer">
                      <div class = "descname">식당 이름</div>
                      {/* <div class = "star">별점</div> */}
                    </div>
                    <div class = "descloca"><img src={samplelocation} width="14" height="14" />위치 신촌동 어쩌구</div>
                    <div class = "menuname">메뉴 이름</div>
                    <div class = "review">리뷰 본문 샘플입니다.</div>
                  </div>
              </a>
            </div>
          </div>
  </section>
}

function Homepage() {
  return (
    <div className="">
      <head>
      </head>
      <body>
        <Section></Section>
          <div class = "box">
            <a href="#" class="homeButton">맛집 모아보기</a>
            <a href="#" class="homeButton">맛집 정보 추가하기</a>
            <a href="reviewAll.html" class="homeButton">리뷰 모아보기</a>
          </div>
      </body>
    </div>
  );
}

export default Homepage;
