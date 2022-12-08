import styles from '../css/Contents.module.css';
import samplelocation from "../img/location.png";
import sample from '../img/sample.PNG';
import { Link } from 'react-router-dom';

function Info() {
    return (
        <div class={styles.outer}>
            <div class={styles.pane}>
                <div id={styles.paneName}>
                    음식점 정보
                </div>
                <div>
                    <img class={styles.image} src={sample} /><br/><br/>
                </div>

                <div class={styles.info}>
                    <div>
                        <div class={styles.StoreName}>맛집 이름</div>
                        <div class={styles.storelocation}>
                            <img src={samplelocation} class={styles.locationimg} width="24" height="24" />
                            "주소"
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <div class="Tag">카테고리 </div>
                        <div class={styles.site}>사이트 </div>
                        <div class={styles.phone}>전화번호 </div>
                        <div class={styles.time}>운영시간 </div>
                        <div class={styles.parking}>주차장 </div>
                    </div>
                </div>
                <div class={styles.buttons}>
                    <Link to="/CreateStore"><button class={styles.button}>정보 수정</button></Link>
                    <Link to="/CreateReview"><button class={styles.button}>리뷰 등록</button></Link>
                </div>

                <div class="map">
                    지도API
                </div>
            </div>
        </div>
    );
}

export default Info