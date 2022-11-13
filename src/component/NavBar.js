// import styles from '../css/Contents.module.css';
import styles from '../css/Header.module.css';
import { Link } from 'react-router-dom';

function NavBar(){
    return(
        <nav>
        맛집 상세 조회
            <Link to="/ReviewAll" class={styles.nava}>리뷰 모아보기</Link>
            <Link to="/CreateStore" class={styles.nava}>맛집 정보 추가하기</Link>
            <Link to="/StoreListView" class={styles.nava}>맛집 모아보기</Link>
        </nav>
    );
}

export default NavBar;