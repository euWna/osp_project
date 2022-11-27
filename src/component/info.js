import styles from '../css/Contents.module.css';
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
                    <img class={styles.image} src={sample} /><br /><br />
                </div>

                <div class={styles.info}>
                    <div id="info1">
                        <div id="name">"맛집 이름"</div>
                        <div id="address">"주소"</div>
                        <div id="intro">"소개 한 줄 문구"</div>
                    </div>
                    <br />
                    <div id="info2">
                        <div id="site">사이트 </div>
                        <div id="category">카테고리 </div>
                        <div id="phone">전화번호 </div>
                        <div id="hours">운영시간 </div>
                        <div id="parking">주차장 </div>
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