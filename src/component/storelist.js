import { Link } from 'react-router-dom';
import styles from '../css/Storelist.module.css';
import samplelocation from "../img/location.png";

function Storelist(props) {
    const src =`/get_img/`+`${props.storekey}` //app.py의 이미지 가져오는 함수 URL
    return (
        <Link to="/StoreDetail">
            <div class={styles.listbox}>
                <div className={styles.ImagePart}>
                    <img src={src} width="295" height="125" />
                    {/* 이미지 경로에 해당 api를 넣으래서 그냥 넣었는데 안되는중 */}
                </div>
                {/* 본문 박스 */}
                <div class={styles.listdesc}>
                    <div class={styles.StoreName}>{props.name}</div>
                    <div class={styles.storelocation}>
                        <p class={styles.locationtext}>                        <img src={samplelocation} class={styles.locationimg} width="18" height="18" />{props.location}</p>
                    </div>
                    <div class={styles.Tag}>#{props.food}</div>
                    {/* <div class={styles.heart}>
                        <img src={heart} class={styles.heartimg} width="14" height="16" />
                        <div class={styles.heartnum}>150</div>
                    </div>
                    <div class={styles.reviewnum}>리뷰""개</div> */}
                </div>
            </div>
        </Link>
    );
}

export default Storelist;