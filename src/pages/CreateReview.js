import React from "react";
import styles from "../css/CreateReview.module.css";
import { Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from '../component/NavBar';

// var MenuInsertAt = document.getElementsByClassName("ForMenus")
// var newCheckBox = document.createElement("input")
// newCheckBox.setAttribute('type', 'checkbox')
// newCheckBox.setAttribute('size', '70')
// function CreateCheckBox(storename) {
//     const params = useParams().storename;

//     const [menudata, setData] = useState()
//     var menuarr = new Array();

//     useEffect(() => {
//         fetch(`/CreateMenu_send_data/${params}`, { //json 데이터를 받아옴
//             headers: {
//                 Accept: 'application/json',
//                 method: 'GET'
//             }
//         })
//             .then(response => response.json())
//             .then(jsonData => {
//                 var length = Object.keys(jsonData).length
//                 for (var i = 0; i < length; i++) { //등록된 메뉴 갯수만큼 반복
//                     menuarr[i] = Object.values(jsonData)[i]
//                 }
//                 setData(menuarr)
//             })
//             .catch(
//                 (err) => console.log(err))
//     }, [])

// newCheckBox.innerHTML({ menuarr[i]})

// return (<>
//     {menudata && menudata.map((a => {
//         return <div>
//             <MenuCheck menuname={a.food} />
//         </div>
//     }))} </>)



// }
// function MenuCheck(props) {
//     var txt = document.createTextNode(props.menuname)
//     newCheckBox.setAttribute('value', props.menuname)
//     newCheckBox.appendChild(txt)
//     MenuInsertAt.appendChild("newCheckBox")
//     // MenuInsertAt.appendChild("newCheckBox")
// }
function CreateReview(props) {

    const params = useParams().storename;

    // const [reviewdata, setData] = useState()
    // var reviewarr = new Array();
    // useEffect(() => {
    //     fetch(`/CreateReview/${params}`, { //json 데이터를 받아옴
    //         headers: {
    //             Accept: 'application/json',
    //             method: 'GET'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(jsonData => {
    //             reviewarr[0] = jsonData;
    //             setData(reviewarr);
    //         })
    //         .catch((err) => console.log(err))
    // }, [])
    // console.log(reviewdata)

    const [storedata, setData] = useState()
    var storearr = new Array();

    useEffect(() => {
        fetch(`/get_registered_store/${params}`, { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                storearr[0] = jsonData
                setData(storearr)
            })
            .catch((err) => console.log(err))
    }, [])
    console.log(storedata)
    console.log("여기까지가 CreateReview storedata")
    // const location = useLocation()
    // const storeimg = location.state.storeimg
    return (
        <div>
            <NavBar></NavBar>
            {storedata && storedata.map((a => {
                return <section>
                    <aside class={styles.aside}>
                        <div class={styles.asideleft}>
                            <div class={styles.ImagePart}>
                                <img src={"http://127.0.0.1:5000/static/img/" + `${a.img_path}`} class={styles.img} />
                            </div>
                            <div class={styles.storename}>
                                {params}
                            </div>
                        </div>
                    </aside>
                    <form action={`/StoreDetail/${params}`} method="POST" enctype="multipart/form-data">
                        <div id={styles.table}>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>전체 평점</span>
                                <span class={`${styles.cell} ${styles.col1}`}>

                                    {/* <input type="text" name="storescore" class={styles.box_input} size="70" /> */}
                                    <select name="storescore">
                                        <option value={"one"}>1</option>
                                        <option value={"two"}>2</option>
                                        <option value={"three"}>3</option>
                                        <option value={"four"}>4</option>
                                        <option value={"five"}>5</option>
                                    </select>
                                    {/* <img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/starone.jpg" width="30" height ="30"/><img src = "../img/startwo.jpg" width="30" height ="30"/> */}
                                </span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>작성자</span>
                                <span class={`${styles.cell} ${styles.col1}`}><input type="text" name="username" class={styles.box_input} /></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>리뷰 제목</span>
                                <span class={`${styles.cell} ${styles.col1}`}><input type="text" name="reviewtitle" class={styles.box_input} size="70" /></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>메뉴이름</span>
                                <span class={`${styles.cell} ${styles.col1} `}>{/*"ForMenus"*/}{/*CreateCheckBox(params)*/}</span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>리뷰 내용</span>
                                <span class={`${styles.cell} ${styles.col1}`}><textarea name="reviewdesc" class={styles.desc_input} rows="10" cols="70" /></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>사진</span>
                                <span class={`${styles.cell} ${styles.col1}`}><input type="file" name="file" accept="image/*" /></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}></span>
                                <span class={`${styles.cell} ${styles.col1}`}><input onClick={window.history.back} type="submit" value="리뷰 등록" /></span>
                                {/* onClick={location.href(`/StoreDetail/${params}`)} */}
                            </div>
                            {/* onClick={window.location.href(`/StoreDetail/${params}`)}  */}
                        </div>
                    </form>
                </section>
            }))}


        </div>
    )
}

export default CreateReview;