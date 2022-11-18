import styles from '../css/Contents.module.css';

function Review() {
    return (
        <div class={styles.outer}>
            <div class={styles.pane}>
                <div id="paneName">
                    리뷰&#40;건&#41;
                </div><br />
            </div>
        </div>
    );
}

export default Review