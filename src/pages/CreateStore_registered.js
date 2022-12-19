import React, {Component} from "react";
import styles from "../css/CreateStore.module.css";
import { Link, useParams } from 'react-router-dom';
import NavBar from '../component/NavBar';
import { useState, useEffect } from 'react';



function RegisteredStore() {
    const params = useParams().storename;
    const [registered, setData] = useState()
    var registeredarr = new Array();
    //const [name, setName] = useState() //매장명은 수정 못하도록
    const [location, setLocation] = useState()
    const [phonenumber, setPNumber] = useState()
    const [time1, setTime1] = useState()
    const [time2, setTime2] = useState()
    //const [food, setCategory] = useState()
    //const [park, setPark] = useState()   //select 태그들은 set함수 없이 value와 defaultValue를 함께 지정하는 것만으로도 수정기능을 구현할 수 있다.
    const [price1, setPrice1]= useState()
    const [price2, setPrice2]= useState()
    const [site, setSite]= useState()
    

    //var storearr = new Array(); 

    useEffect(() => {
        fetch(`/get_registered_store/${params}`, { //json 데이터를 받아옴
            headers: {
                Accept: 'application/json',
                method: 'GET'
            }
        })
            .then(response => response.json())
            .then(jsonData => {
                registeredarr[0] = jsonData;
                setData(registeredarr);
                console.log(registeredarr);
                //setName(registeredarr[0].storename)
                if (registeredarr){
                    setLocation(registeredarr[0].location);
                    setPNumber(registeredarr[0].phonenumber);
                    setTime1(registeredarr[0].time1);
                    setTime2(registeredarr[0].time2);
                    setPrice1(registeredarr[0].price1);
                    setPrice2(registeredarr[0].price2);
                    setSite(registeredarr[0].site);
                }
            })
            .catch(
                (err) => console.log(err))
    }, [])
    //console.log("출력확인");
    /*if(registered) {
        console.log("storename");
        setName(registered[0].storename)
        console.log(registered[0].storename);
        break;
    } 무한루프 오류*/


    // const [value, setValue] = useState('');
    // const onChange = useCallback(e=>{
    //     setValue(e.target.value);
    // }, [])

    


    return (
        <div>
            <NavBar></NavBar>
            <section>
                <aside>
                    <div class={styles.asideleft}>
                        <Link to={`/RegisteredStore/${params}`} class={styles.up}>기본정보</Link>
                        <Link to={`/CreateMenu/${params}`} class={styles.down}>메뉴</Link>
                    </div>
                </aside>
                {/*  */}
                <form  action="/UpdateStore_submit" method="POST" enctype="multipart/form-data">
                    {registered && registered.map((a => {
                        return <div id={styles.table}>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>매장명</span>
                               <span class={`${styles.cell} ${styles.col2}`}> <Link to={`/StoreDetail/${params}`}>{a.storename}</Link><input type="hidden" name="storename" value={a.storename} class={styles.box_input}
                                                                                    /* onChange={ (event) => { setName(event.target.value) }}*//></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>주소</span>
                                <span class={`${styles.cell} ${styles.col2}`}><input type="text" name="location" size="70" value={location} class={styles.box_input}
                                                                                     onChange={ (event) => { setLocation(event.target.value) }}></input></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>전화번호</span>
                                <span class={`${styles.cell} ${styles.col2}`}><input type="text" name="phonenumber" value={phonenumber} class={styles.box_input}
                                                                                     onChange={ (event) => { setPNumber(event.target.value) }}></input></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>영업시간</span>
                                <span class={`${styles.cell} ${styles.col2}`}><input type="time" name="time1" size="1" value={time1} 
                                                                                     onChange={ (event) => { setTime1(event.target.value) }} class={styles.box_input}/> 
                                                                            ~ <input type="time" name="time2" size="1" value={time2} 
                                                                            onChange={ (event) => { setTime2(event.target.value) }} class={styles.box_input}/></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>카테고리</span>
                                <span class={`${styles.cell} ${styles.col2}`}>
                                    <select name="food" key={a.food} defaultValue={a.food}>
                                    <option value="">선택</option>
                                        <option value="한식">한식</option>
                                        <option value="일식">일식</option>
                                        <option value="중식">중식</option>
                                        <option value="양식">양식</option>
                                        <option value="분식">분식</option>
                                        <option value="디저트">디저트</option>
                                    </select>
                                </span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>주차장</span>
                                <span class={`${styles.cell} ${styles.col2}`}>
                                    <select name="park" key={a.park} defaultValue={a.park}>
                                        <option value="">선택</option>
                                        <option value="O">O</option>
                                        <option value="X">X</option>
                                    </select></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>가격대</span>
                                <span class={`${styles.cell} ${styles.col2}`}><input type="text" name="price1" size="1" value={price1} class={styles.box_input}
                                                                                     onChange={ (event) => { setPrice1(event.target.value) }}/>                                 
                                                                             ~ <input type="text" name="price2" size="1"  value={price2} class={styles.box_input}
                                                                                     onChange={ (event) => { setPrice2(event.target.value) }}/></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>사이트</span>
                                <span class={`${styles.cell} ${styles.col2}`}><input type="text" name="site" size="70" value={site}
                                                                                     onChange={ (event) => { setSite(event.target.value) }} class={styles.box_input}/></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}>대표사진</span>
                                <span class={`${styles.cell} ${styles.col2}`}><input type="file" name="file" accept="image/*" /*value={a.img_path}/ file은 value 입력 못받음*/ /></span>
                            </div>
                            <div class={styles.row}>
                                <span class={`${styles.cell} ${styles.col1}`}></span>
                                <span class={`${styles.cell} ${styles.col2}`}><input type="submit" value="기본 정보 수정" /></span>
                            </div>
                        </div>
                    }))}
                    
                </form>
            </section>
        </div>
    )
}

export default RegisteredStore;
