import React from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import styles from "../css/StoreListView.module.css";
import styles from '../css/Storelist.module.css';
import samplelocation from "../img/location.png";
import heart from "../img/heart.png";
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import StoreList from '../component/storelist';
import Storelist from "../component/storelist";
import { data } from 'browserslist';
import DBhandler from database;
DB = DBhandler()
function Storelist() {
    return (
        <Link to="/StoreDetail">
            <div class={styles.listbox}>
                <div className={styles.ImagePart}>
                    <img src={sample} width="295" height="125" />
                </div>
                {/* 본문 박스 */}
                <div class={styles.listdesc}>
                    <div class={styles.StoreName}>{data.Storename}</div>
                    <div class={styles.storelocation}>
                        <img src={samplelocation} class={styles.locationimg} width="18" height="18" />
                        <p class={styles.locationtext}>{data.location}</p>
                    </div>
                    <div class={styles.Tag}>{data.food}</div>
                    <div class={styles.heart}>
                        <img src={heart} class={styles.heartimg} width="14" height="16" />
                        <div class={styles.heartnum}>{data.heartnum}</div>
                    </div>
                    <div class={styles.reviewnum}>리뷰{data.reviewnum}개</div>
                    {/* heartnum과 reviewnum 속성 추가해야함 */}
                </div>
            </div>
        </Link>
    );
}

class StoreListView extends React.Component {
    render() {
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
                                {/* flask에서 받아올 수 있는 코드 수정 */}
                                {/* store_id를 받아오는 식이 필요함(여기말고 database.py나 result.html에서) */}
                                {/* 여기에 app.py- list_Stores활용하기 */}
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