import { Modal } from '@/components/client/modal/modal'
import { UserService } from '@/services/userService'
import { User } from '@/types/user'

export default async function UserAbout({ params: { id } }: { params: { id: number } }) {
  const user: User = await UserService.getOneFull(id)
  return (
    <Modal>
      <pre className='code'>{JSON.stringify(user, null, '\t')}</pre>
    </Modal>
  )
}
