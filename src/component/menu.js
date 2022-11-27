import { Link } from 'react-router-dom';
import styles from '../css/Contents.module.css';
import MenuPost from "./menuPost";

function Menu(){
    return(
        <div class={styles.outer}>
            <div class={styles.pane}>
                <div id={styles.paneName}>
                    메뉴 목록
                </div>
                <div class={styles.editPane}>
                    직접 메뉴를 등록하고 수정하세요! 
                    <div class={styles.buttons}>
                    <Link to="/CreateMenu"><button class={styles.button}>메뉴 정보 수정</button></Link>
                    </div>
                </div>
                <div class={styles.menuPane}>
                    <MenuPost/>
                    <MenuPost/>
                    <MenuPost/>
                </div>
            </div>
        </div>
    );
}

export default Menu