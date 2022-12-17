import { Link } from 'react-router-dom';
import sample from "../img/sample.PNG";
import styles from '../css/reviewPost.module.css';

function ReviewPost(props) {

    const reviewimg = props.reviewimg
    const reviewdesc = props.reviewdesc
    const reviewtitle = props.reviewtitle
    const reviewstorescore = props.reviewstorescore
    const reviewusername = props.reviewusername
    const reviewstorename = props.reviewstorename

    return (
        <div class={styles.listbox}>
            <div className={styles.ImagePart}>
                <img src={"http://127.0.0.1:5000/static/img/" + `${reviewimg}`} class={styles.img}/>
            </div>
            <div class={styles.listdesc}>
                <div className={styles.user_name}>{reviewusername}</div>
                <div className={styles.store_name}>{reviewstorename}</div>
                <div className={styles.review_title}>{reviewtitle}</div>
                <div className={styles.review_desc}>{reviewdesc}</div>
            </div>
        </div>
    );
}

export default ReviewPost;
