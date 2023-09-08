import { User } from '@/types/user'
import { Modal } from './modal'
import styles from './userInfoModal.module.css'

export const UserInfoModal = ({ data }: { data: User }) => {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.document}></div>
        <div className={styles.card}>
          <h2>Инфо</h2>
          <p>{data.nickname}</p>
          <p>{data.email}</p>
          <p>{data.name + ' ' + data.surname}</p>
          <p>{data.phonenum || '+7 981 997-78-01'}</p>
        </div>

        <div className={styles.card}>
          <h2>Набранные очки</h2>
          {Object.entries(data.points!).map(([category, points]) => (
            <p key={category}>{`${category}: ${points}`}</p>
          ))}
        </div>

        <div className={styles.card}>
          <h2>Категории</h2>
          {data['categories']?.map((category) => (
            <p key={category}>{category}</p>
          ))}
        </div>
      </div>
    </Modal>
  )
}
