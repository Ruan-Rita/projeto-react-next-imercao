import styles from '../style/components/Experiencebar.module.css';
export function Experiencebar(){
    return (
        <div className={styles.experiencebarContainer}>
            <span>
                0 px
            </span>
            <div>
                <div style={{ width: '60%'}}></div> 
                <span className={styles.currentExperience} style={{left: '60%'}}>300px</span>
            </div>
            <span>600 px</span>
        </div>
    );
}