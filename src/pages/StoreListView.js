import React from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import "./StoreListView.css";
class StoreListView extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <NavBar></NavBar>
                <div className="Searching">

                    <input type="text" name="search_box" value="다양한 맛집을 검색해보세요" />
                    <img src="" alt="검색버튼 이미지"></img>
                </div>
                <div className="TopBtn">
                    <button type="button" name="top_join_button">회원가입</button>
                    <button type="button" name="top_login_button">로그인</button>
                </div>
                <div className="StoreList">
                    <div className="TopBar">
                        <div>결과건</div>

                        <div className="Dropdown1">
                            <select className="" name="dropFood" size="">

                                <option value="Dessert">디저트</option>
                                <option value="Korean">한식</option>
                                <option value="Japanese">일식</option>
                                <option value="Chinese">중식</option>
                            </select>
                        </div>
                        <div className="Dropdown2">
                            <select className="" name="dropSort" size="">

                                <option value="SortByRecommendation">추천순</option>
                                <option value="SortByReview">리뷰많은 순</option>
                                <option value="SortByPrice">가격 낮은 순</option>
                            </select>
                        </div>
                    </div>
                    < div className="Restaurant">
                        <div className="Restaurant1">
                            <img src="" alt="restaurant1_img" />
                            <p className="StoreName">음식점 이름</p>
                            {/*store 데이터 가져와서 바꿀 것*/}
                            <img src="" alt="locationImg" />
                            {/*위치 이모지*/}
                            <p>음식점 주소</p>
                            {/* store 데이터 가져와서 수정*/}
                            <p className="Tag">태그</p>
                            {/*store 데이터 가져와서 수정*/}
                            <img src="" alt="좋아요 수" />
                            {/*<Heart></Heart> */}
                            <img src="" alt="평점" />
                            {/*<StoreScore></StoreScore> */}
                            <p>리뷰""개</p>
                        </div>
                        <div className="Restaurant2">
                            <img src="" alt="restaurant2_img" />
                            <p className="StoreName">음식점 이름</p>
                            {/*store 데이터 가져와서 바꿀 것*/}
                            <img src="" alt="locationImg" />
                            {/*위치 이모지*/}
                            <p>음식점 주소</p>
                            {/* store 데이터 가져와서 수정*/}
                            <p className="Tag">태그</p>
                            {/*store 데이터 가져와서 수정*/}
                            <img src="" alt="좋아요 수" />
                            {/*<Heart></Heart> */}
                            <img src="" alt="평점" />
                            {/*<StoreScore></StoreScore> */}
                            <p>리뷰""개</p>
                        </div>
                        <div className="Restaurant3">
                            <img src="" alt="restaurant3_img" />
                            <p className="StoreName">음식점 이름</p>
                            {/*store 데이터 가져와서 바꿀 것*/}
                            <img src="" alt="locationImg" />
                            {/*위치 이모지*/}
                            <p>음식점 주소</p>
                            {/* store 데이터 가져와서 수정*/}
                            <p className="Tag">태그</p>
                            {/*store 데이터 가져와서 수정*/}
                            <img src="" alt="좋아요 수" />
                            {/*<Heart></Heart> */}
                            <img src="" alt="평점" />
                            {/*<StoreScore></StoreScore> */}
                            <p>리뷰""개</p>
                        </div>
                        <div className="StoreMap">
                            {/*지도 API 추가할 부분*/}
                        </div>
                        <button type="button" name="next_button"></button>
                        {/*음식점 목록과 지도 API 사이에 있는 버튼*/}

                    </div>
                </div>
            </div>

        )
    }
}
export default StoreListView;