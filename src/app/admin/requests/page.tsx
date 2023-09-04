import RequestCard from '@/components/client/cards/request/requestCard'
import { EndlessFeedPlaceholder } from '@/components/client/endlessFeed/endlessFeedPlaceholder'
import { UserService } from '@/services/userService'
import styles from './requests.module.css'

const Requests = () => {
  const $getRequests = async (page: number) => {
    'use server'
    return await UserService.getCategoryRequests(page).catch((err) => err)
  }

  return (
    <div className={styles.request}>
      <div className={styles.request_tittle}>Заявки</div>
      <EndlessFeedPlaceholder
        className={styles.user_block}
        ItemCard={RequestCard}
        origin='/admin/requests'
        loadMore={$getRequests}
      />
    </div>
  )
}

export default Requests
