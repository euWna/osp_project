import React from "react";
import styles from "../css/MyPageMenu.module.css";
import { Link } from 'react-router-dom';

export default function MyPageMenu() {
    return (
        <>
            <header>
                <h1>My Page</h1>
            </header>
            <div className={styles.mainbar}>좋아요 누른 메뉴 모아보기</div>
            <ul>
                <li> <div className={styles.storename}>와플와플</div>
                    <ul className={styles.store}>
                        <li className={styles.menu}> MenuPost1 </li>
                        <li className={styles.menu}> MenuPost2 </li>
                        <li className={styles.menu}> MenuPost3 </li>
                    </ul>
                </li>
                <li><div className={styles.storename}>돈천동식당</div>
                    <ul className={styles.store}>
                        <li className={styles.menu}> MenuPost1 </li>
                        <li className={styles.menu}> MenuPost2 </li>
                        <li className={styles.menu}> MenuPost3 </li>
                    </ul>
                </li>
            </ul>
        </>

    );
}
