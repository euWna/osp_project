import React from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import styles from "../css/StoreListView.module.css";
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import StoreList from '../component/storelist';
// import { data } from 'browserslist';
import { useEffect, useState } from 'react';
// const [articles, setArticles] = useState([]);
// useEffect(() => {
//     fetch('http://127.0.0.1:5000/StoreList', {
//         'methods': 'GET',
//         headers: {
//             'Content-Type': 'applications/json'
//         }

//     })
//         .then(resp => resp.json())
//         .then(resp => resp.log(resp))
//         .catch(error => console.log(error))
// }, [])
function Stores() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("http://127.0.0.1:5000/StoreListView", {
            headers: {
                Accept: "application / json",
            },
        }, { method: "GET" })
            .then(
                response => response.json()
            ).then(
                data => {
                    setData(data);
                }
            ).catch(
                (err) => console.log(err)
            )
    }, [])

    return (
        <div>
            {/* 삼항연산자 */}
            {(typeof data.StoreListView === 'undefined') ? (
                // fetch가 완료되지 않았을 경우에 대한 처리
                <p>loading...</p>
            ) : (
                data.StoreListView.map((u) => <p>{u.storename}</p>)
            )}
        </div>
    )
}

class StoreListView extends React.Component {
    render() {
        var datas = document.getElementsById('STORELISTVIEW')
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
                                {/* /* i=start_idx */}
                                {/* while(i<end_idx){
                                    <StoreList></StoreList>
                                } */}
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