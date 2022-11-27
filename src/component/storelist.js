import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/Storelist.module.css';
import samplelocation from "../img/location.png";
import heart from "../img/heart.png";

// import { data } from 'browserslist';


// 맛집 모아보기 페이지 가게 리스트 컴포넌트

function Storelist() {
    return (
        <Link to="/StoreDetail">
            <div class={styles.listbox}>
                <div className={styles.ImagePart}>
                    <img src={sample} width="295" height="125" />
                </div>
                {/* 본문 박스 */}
                <div class={styles.listdesc}>
                    {/* <div class={styles.StoreName}>{data[1].Storename}</div>
                    <div class={styles.storelocation}>
                        <img src={samplelocation} class={styles.locationimg} width="18" height="18" />
                        <p class={styles.locationtext}>{data[1].location}</p>
                    </div>
                    <div class={styles.Tag}>{data[1].food}</div>
                    <div class={styles.heart}>
                        <img src={heart} class={styles.heartimg} width="14" height="16" />
                        <div class={styles.heartnum}>{data[1].heartnum}</div>
                    </div>
                    <div class={styles.reviewnum}>리뷰{data[1].reviewnum}개</div> */}
                    heartnum과 reviewnum 속성 추가해야함
                </div>
            </div>
        </Link>
    );
}

export default Storelist;