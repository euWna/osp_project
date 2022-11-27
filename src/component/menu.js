import styles from '../css/Contents.module.css';
import MenuPost from "./menuPost";

function Menu(){
    return(
        <div class={styles.outer}>
            <div class={styles.pane}>
                <div id="paneName">
                    메뉴 목록
                    <MenuPost/>
                    <MenuPost/>
                    <MenuPost/>
                </div><br/>
            </div>
        </div>
    );
}

export default Menu