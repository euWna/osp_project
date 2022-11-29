import React from "react";
import Header from "../component/header";
import NavBar from "../component/NavBar";
import styles from "../css/StoreListView.module.css";
import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import StoreList from '../component/storelist';
// import { data } from 'browserslist';
import { useEffect, useState } from 'react';
var hreq = new XMLHttpRequest();
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
    // 여기서부터가 ajax활용한 부분, useEffect사용한 것과 동일한 효과
    const [data, setData] = useState([{}])
    // fetch("http://127.0.0.1:5000/StoreListView", {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         name: "name",
    //         number: 1,
    //     }),
    // })
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
            getJSON();
            {/* 삼항연산자
            {(typeof data.storename === 'undefined') ? (
                // fetch가 완료되지 않았을 경우에 대한 처리
                <p>loading...</p>
            ) : (
                data.keys.storename.map((u) => <p>{u.keys.storename}</p>)

            )} */}
        </div>
    )
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
                                {/* /* i=start_idx */}
                                {/* while(i<end_idx){
                                    <StoreList></StoreList>
                                } */}
                                {/* 여기에 app.py- list_Stores활용하기 */}

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

// function getJSON() {
//     $.ajax({
//         type: "get",
//         url: "data.json",
//         dataType: "json",
//         success: function (data) {
//             console.log("통신성공");
//             console.log(data);
//             str = '<TR>';
//             $.each(data, function (i) {
//                 str += '<TD>' + data[i].food + '</TD>';
//                 '<TD > ' + data[i].img_path + '</TD>';
//                 '<TD>' + data[i].location + '</TD>';
//                 '<TD>' + data[i].park + '</TD>';
//                 '<TD>' + data[i].phonenumber + '</TD>';
//                 '<TD > ' + data[i].price1 + '</TD >';
//                 '<TD > ' + data[i].price2 + '</TD >';
//                 '<TD>' + data[i].site + '</TD>';
//                 '<TD>' + data[i].storename + '</TD>';
//                 '<TD>' + data[i].time1 + '</TD>';
//                 '<TD>' + data[i].time2 + '</TD>';
//                 str += '</TR>';
//             });
//             $('.table_body').append(str);
//         },
//         error: function () {
//             console.log("통신에러");
//         }
//     })
// }

export default StoreListView;