import styles from '../css/Contents.module.css';

function Menu(){
    return(
        <div class={styles.outer}>
            <div class={styles.pane}>
                <div id="paneName">
                    메뉴 목록
                </div><br/>
            </div>
        </div>
    );
}

export default Menu