import { Modal } from '@/components/client/modal/modal'
import { UserService } from '@/services/userService'
import { User } from '@/types/user'
import styles from './styles.module.css';

export default async function UserAbout({ params: { id } }: { params: { id: number } }) {
  const user: User = await UserService.getOneFull(id)
  console.log();
  let initialArray = Object.keys(user['points']);
  let ptsArray = initialArray.map(el => {
    return <div className={styles.user__points_el}>{el + ': ' + user['points'][el]} </div>
  })
  let initArray = user['categories'];
  let catArray = initArray?.map(el => {
    return <div className={styles.user__categories_el}>{el}</div>
  })

  return (
    <Modal>
      <div className={styles.user__container}>
        <div className={styles.user__container_photo}></div>
        <div className={styles.user__container_info}>
          <div className={styles.user__info_nickname}>{user.nickname}</div>
          <div className={styles.user__info_email}>{user.email}</div>
          <div className={styles.user__info_name}>{user.name + ' ' + user.surname}</div>
          <div className={styles.user__info_other}>{'+79277777777 user'}</div>
        </div>

        <div className={styles.user__container_points}>
          <h2>Набранные очки</h2>
          {ptsArray}
        </div>

        <div className={styles.user__container_categories}>
          <h2>Категории</h2>
          {catArray}
        </div>
      </div>
    </Modal>
  )
}
