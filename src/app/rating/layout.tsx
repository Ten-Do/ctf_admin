import styles from './rating.module.css';
import { CategoryToggler } from '@/components/server/categoryToggler/categoryToggler';

 async function RatingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className={styles.backgroundSquare}>
                <div className={styles.topPanel}>
                    <div className={styles.topPanelName}>My name</div>
                    <div className={styles.topPanelPlace}>... место</div>
                </div>

                <CategoryToggler origin='rating' />
                {children}
            </div>
        </>
    )
}
export default RatingLayout;