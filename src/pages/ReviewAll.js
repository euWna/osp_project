import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ReviewAll.css';

function ReviewSection() {
  return <reviewsection>
            <div class = "presentreview">
                <div class="title1">실시간 리뷰</div>
                <div class = "pr_description">
                    <div class="user_name">사용자</div>
                    <div class="store_name">음식점 이름</div>
                    <div class="store_location">신촌동 xxx xxx</div>
                    <div class="review_title">리뷰 제목입니다.</div>
                    <div class="review_desc">본문샘플<br/>본문샘플</div>
                    <div class="review_img"><img src="sample.PNG" width="250" height="230" /></div>
                </div>
                <div class = "pr_description">
                    <div class="user_name">사용자</div>
                    <div class="store_name">음식점 이름</div>
                    <div class="store_location">신촌동 xxx xxx</div>
                    <div class="review_title">리뷰 제목입니다.</div>
                    <div class="review_desc">본문샘플<br/>본문샘플</div>
                    <div class="review_img"><img src="sample.PNG" width="250" height="230" /></div>
                </div>
                <div class = "pr_description">
                    <div class="user_name">사용자</div>
                    <div class="store_name">음식점 이름</div>
                    <div class="store_location">신촌동 xxx xxx</div>
                    <div class="review_title">리뷰 제목입니다.</div>
                    <div class="review_desc">본문샘플<br/>본문샘플</div>
                    <div class="review_img"><img src="sample.PNG" width="250" height="230" /></div>
                </div>
            </div>
            <div class = "hotreview">
                <div class="title2">최근 인기 리뷰</div>
                <div class = "hot_description">
                    리스트로 나열
                </div>
            </div>
  </reviewsection>
}

function ReviewAll() {
    return (
        <div className="">
          <head>
          </head>
          <body>
            <ReviewSection></ReviewSection>
          </body>
        </div>
      );
}

export default ReviewAll;