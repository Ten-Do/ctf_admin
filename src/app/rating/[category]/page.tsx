import { Category } from '@/types/category';
import styles from '.././rating.module.css';

async function Rating({params: {category}} : { params: {category: Category}}) {
  
    return (
      < >
        <div className={styles.triplePanel}>
          <div className={styles.triplePanelFirst}>
              <div className={styles.triplePanelName}>Name</div>
              <div className={styles.triplePanelPlace}>1 место</div>
              <div className={styles.triplePanelScore}>120</div>
          </div>
          <div className={styles.triplePanelSecond}>
            <div className={styles.triplePanelName}>Name</div>
            <div className={styles.triplePanelPlace}>2 место</div>
            <div className={styles.triplePanelScore}>110</div>
          </div>
          <div className={styles.triplePanelThird}>
            <div className={styles.triplePanelName}>Name</div>
            <div className={styles.triplePanelPlace}>3 место</div>
            <div className={styles.triplePanelScore}>109</div>
          </div>
        </div>
        <div className={styles.normalPanel}>
          <div className={styles.normalPanelText}>
            4 место
          </div>
        </div>
        <div className={styles.normalPanel}>
          <div className={styles.normalPanelText}>
            5 место
          </div>
        </div>
        <div className={styles.normalPanel}>
          <div className={styles.normalPanelText}>
            ...
          </div>
        </div>
        <div className={styles.normalPanel}>
          <div className={styles.normalPanelText}>
            ...
          </div>
        </div>
        <div className={styles.normalPanel}>
          <div className={styles.normalPanelText}>
            ...
          </div>
        </div>
        <div className={styles.normalPanel}>
          <div className={styles.normalPanelText}>
            ...
          </div>
        </div>
      </>
    )
  }
  
  export default Rating;