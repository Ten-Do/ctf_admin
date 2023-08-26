import { Modal } from '@/components/client/modal/modal'
import styles from './styles.module.css'

export default function NewUsersModal({
  params: { id },
  searchParams: { i },
}: {
  params: { id: number }
  searchParams: { i: string }
}) {
  return (
    <Modal>
      <img className={styles.img} src={i} alt="Документ не проявил себя..." />
    </Modal>
  )
}
