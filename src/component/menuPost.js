import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/MenuPost.module.css';
import samplelocation from "../img/location.png";
import heart from "../img/heart.png";

function MenuPost() {
    return (
            <div class={styles.listbox}>
                <div className={styles.ImagePart}>
                    <img src={sample} width="295" height="125" />
                </div>
                {/* 본문 박스 */}
                <div class={styles.listdesc}>
                    <div class={styles.MenuName}>메뉴 이름</div>
                    <div class={styles.heart}>
                        <img src={heart} class={styles.heartimg} width="14" height="16" />
                        <div class={styles.heartnum}>150</div>
                    </div>

                </div>
            </div>
    );
}

export default MenuPost;