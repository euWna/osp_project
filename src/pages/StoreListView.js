import React, { useState, useEffect, Component} from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import styles from "../css/StoreListView.module.css";
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import StoreList from '../component/storelist';

import samplelocation from "../img/location.png";
import heart from "../img/heart.png";

import axios from 'axios';

function GetData() {
  const [data, setData] = useState({});

  useEffect(() => 
    {
    	axios.get('http://127.0.0.1:5000/StoreListView')
      .then(
        (response)=>{setData(response.data);
        }  
      )
    }, []);

    const item = (Object.values(data)).map((item) => (
      <li key={item.storename}>
        {item.storename}
      </li>
    ));

    return item;
  }

    // return (
    //     <Link to="/StoreDetail">
    //         <div class={styles.listbox}>
    //             <div className={styles.ImagePart}>
    //                 <img src={sample} width="295" height="125" />
    //             </div>
    //             {/* 본문 박스 */}
    //             <div class={styles.listdesc}>
    //                 <div class={styles.StoreName}>음식점 이름</div>
    //                 <div class={styles.storelocation}>
    //                     <img src={samplelocation} class={styles.locationimg} width="18" height="18" />
    //                     <p class={styles.locationtext}>음식점 주소</p>
    //                 </div>
    //                 <div class={styles.Tag}>#태그 #태그</div>
    //                 <div class={styles.heart}>
    //                     <img src={heart} class={styles.heartimg} width="14" height="16" />
    //                     <div class={styles.heartnum}>150</div>
    //                 </div>
    //                 <div class={styles.reviewnum}>리뷰""개</div>
    //             </div>
    //         </div>
    //     </Link>
    // );


class StoreListView extends Component {
    render() {
        const item = GetData();
        return (
            <div>
                <NavBar />
                <section>
                    <div class={styles.all} >
                        <div className={styles.StoreList}>
                            <div className={styles.TopBar}>
                                <span className={styles.Result}>결과건</span>
                                <div class={styles.dropdown}>
                                    <span className={styles.Dropdown1}>
                                        <select name="dropFood">
                                            <option value="Dessert">디저트</option>
                                            <option value="Korean">한식</option>
                                            <option value="Japanese">일식</option>
                                            <option value="Chinese">중식</option>
                                        </select>
                                    </span>
                                    <span className="Dropdown2">
                                        <select name="dropSort">
                                            <option value="SortByRecommendation">추천순</option>
                                            <option value="SortByReview">리뷰많은 순</option>
                                            <option value="SortByPrice">가격 낮은 순</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                            < div className={styles.Restaurant}>
                                <p>맛집 이름 : </p>
                                {/* flask에서 받아올 수 있는 코드 수정 */}
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                                <StoreList></StoreList>
                            </div>
                        </div>
                        <div class={styles.rightbox}>
                            <div className={styles.StoreMap}>
                                {/*지도 API 추가할 부분*/}
                            </div>
                            <button type="button" name="next_button"></button>
                            {/*음식점 목록과 지도 API 사이에 있는 버튼*/}
                            <div class={styles.storelistdetail}>
                            </div>
                        </div>
                    </div >
                </section >
            </div >

        )
    }
}
export default StoreListView;