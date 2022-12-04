import { Link } from 'react-router-dom';
import styles from '../css/Contents.module.css';
import ReviewPost from './reviewPost';

function Review() {
    return (
        <div class={styles.outer}>
            <div class={styles.pane}>
                <div id={styles.paneName}>
                    리뷰&#40; {/*total*/} 건&#41;
                </div>
                <div class={styles.editPane}>
                    <span>여러분의 맛집 후기를 남겨주세요!</span>
                    <Link to="/CreateMenu"><button class={styles.button}>리뷰 등록</button></Link>
                </div>
                <div class={styles.menuPane}>
                    <ReviewPost/>
                    <ReviewPost/>
                    <ReviewPost/>
                </div>
            </div>
        </div>
    );
}

export default Review