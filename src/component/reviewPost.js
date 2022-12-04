import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/ReviewAll.module.css';

function ReviewPost() {
    return (
        <Link to="/CreateMenu">
        <div className={styles.pr_description}>
            <div className={styles.user_name}>사용자</div>
            <div className={styles.store_name}>음식점 이름</div>
            <div className={styles.review_title}>리뷰 제목입니다.</div>
            <div className={styles.review_desc}>본문샘플<br />본문샘플</div>
            <div className={styles.review_img}><img src={sample} width="250" height="230" /></div>
        </div>
        </Link>
    );
}

export default ReviewPost;
