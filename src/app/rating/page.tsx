import { CategoryToggler } from '@/components/server/categoryToggler/categoryToggler';
import styles from './rating.module.css';
import checkIco from '@/../public/assets/rating_icons/check.svg'
import crossIco from '@/../public/assets/rating_icons/cross.svg'
import Image from 'next/image';


export default function Rating() {
  return (
    <div className={styles.backgroundSquare}>
      <div className={styles.topPanel}>
        <div className={styles.topPanelName}>My name</div>
        <div className={styles.topPanelPlace}>... место</div>
        {/*
			<div className={styles.topPanelCompletedTasks}>
				<div className={styles.topPanelCompletedTasksText}>2</div>
				<Image src={checkIco} alt={'checkLogo'} width={30} height={30} />
			</div>
			<div className={styles.topPanelUncompletedTasks}>
				<div className={styles.topPanelUncompletedTasksText}>98</div>
				<Image src={crossIco} alt={'crossLogo'} width={30} height={30} />
			</div>
			<div className={styles.skill}>
				<div className={styles.outer}>
					<div className={styles.inner}>
						<div className={styles.number}>2%</div>
					</div>
				</div>
  </div>*/}
      </div>
      <CategoryToggler />
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
    </div>
  )
}
