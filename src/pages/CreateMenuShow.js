import React from "react";
import styles from "../css/CreateMenu.module.css";
import { Link, useParams } from 'react-router-dom';
import NavBar from '../component/NavBar';
import { render } from "@testing-library/react";


function MenuPlusBtn() {

    const params = params;

    return (< Link to={`http://127.0.0.1:5000/CreateMenu/${params}`} />)
}

function CreateMenuShow(props) {

    const params = useParams().storename;
    const param2 = useParams().food;



    return (
        <div>
            <NavBar></NavBar>
            <section>
                <aside class={styles.aside}>
                    <div className={styles.asideleft}>
                        <Link to="/CreateStore" class={styles.up}>기본정보</Link>
                        <Link to="/CreateMenu" class={styles.down}>메뉴</Link>
                    </div>
                </aside>


                <form action={`http://127.0.0.1:5000/CreateMenu/${params}/${param2}`} method="post" enctype="multipart/form-data">
                    <div id={styles.table}>
                        <div className={styles.row}>
                            <span className={`${styles.cell} ${styles.col1}`}>{params}</span>
                            <span className={`${styles.cell} ${styles.col2}`}></span>
                        </div>
                        <div className={styles.row}>
                            <span className={`${styles.cell} ${styles.col1}`}></span>
                            <span className={`${styles.cell} ${styles.col2}`}>
                                <table>
                                    <tr>
                                        <th>메뉴명</th>
                                        <td><input type="text" name="food" value={props.food} /></td>
                                    </tr>
                                    <tr>
                                        <th>가격</th>
                                        <td><input type="text" name="money" /></td>
                                    </tr>
                                    <tr>
                                        <th rowspan="2">영양성분</th>
                                        <td><input type="text" name="nutrient" placeholder="+" size="70" /></td>
                                    </tr>
                                    <tr>
                                        <td className="nutrient"><div className="MinusButton">-</div>계란</td>

                                    </tr>
                                    <tr>
                                        <th>대표사진</th>
                                        <td><input type="file" name="file" accept="image/*" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type='submit' value="메뉴 정보 등록" /></td>
                                    </tr>
                                </table>
                            </span>
                        </div>
                        <div className={styles.row}>
                            <span className={`${styles.cell} ${styles.col1}`}></span>
                            <span className={`${styles.cell} ${styles.col2}`} id="menuPlus" ><button on onClick={MenuPlusBtn({ params })}>+ 메뉴 새로 추가하기</button></span>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default CreateMenuShow;