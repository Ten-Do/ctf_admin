'use client'
import RequestCard from '@/components/client/cards/request/requestCard';
import styles from './requests.module.css';


const Requests = () => {
  return (
    <div className={styles.request}>
      <div className={styles.request_tittle}>Заявки</div>
      <div className={styles.user_block}>
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
    </div>
  )
}

export default Requests;