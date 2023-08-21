import { $getRating } from '@/actions/getRating'
import { Category } from '@/types/category'
import styles from '.././rating.module.css'

async function Rating({ params: { category } }: { params: { category: Category } }) {
  const raiting: { topUser: { nickname: string; id: number; score: number }[] } = (await $getRating(
    category,
    1,
  )) as unknown
  console.log(raiting)
  return (
    <>
      {/* <div className={styles.triplePanel}>
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
      </div> */}
      {raiting.topUser?.map((user, i) => (
        <div className={styles.normalPanel} key={user.id}>
          <div className={styles.normalPanelText}>{i + '  |  ' + user.nickname} <span style={{float: 'right'}}>{user.score || 0}</span></div>
        </div>
      ))}
    </>
  )
}

export default Rating
