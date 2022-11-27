import styles from '../css/Contents.module.css';

function Review() {
    return (
        <div class={styles.outer}>
            <div class={styles.pane}>
                <div id={styles.paneName}>
                    리뷰&#40;  건&#41;
                </div>
                <div class={styles.editPane}>
                    여러분의 맛집 후기를 남겨주세요! 
                </div>
            </div>
        </div>
    );
}

export default Review