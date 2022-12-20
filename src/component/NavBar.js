import styles from '../css/Header.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/CreateStore" >맛집 정보 추가하기</Link>
            <Link to="/StoreListView" >맛집 모아보기</Link>
        </nav>
    );
}

export default NavBar;