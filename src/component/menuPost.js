import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/MenuPost.module.css';
import samplelocation from "../img/location.png";
import heart from "../img/heart.png";

function MenuPost(props) {

    const menuname = props.menuname
    const menumoney = props.menumoney
    const menuimg = props.menuimg

    return (
            <div class={styles.listbox}>
                <div className={styles.ImagePart}>
                <img src={"http://127.0.0.1:5000/static/img/" + `${menuimg}`} class={styles.img}/>
                </div>
                {/* 본문 박스 */}
                <div class={styles.listdesc}>
                    <div id={styles.MenuName}>{menuname}</div>
                    <div class={styles.heart}><img src={heart} class={styles.heartimg} width="14" height="16" /> 150</div>
                    <div class={styles.price}>{menumoney}</div>
                    <div class={styles.nutrients}>영양성분</div>
                </div>
            </div>
    );
}

export default MenuPost;