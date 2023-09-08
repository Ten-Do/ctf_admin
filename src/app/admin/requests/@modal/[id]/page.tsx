import { UserInfoModal } from '@/components/client/modal/userInfoModal'
import { UserService } from '@/services/userService'
import { User } from '@/types/user'

export default async function UserAbout({ params: { id } }: { params: { id: number } }) {
  const user: User = await UserService.getOneFull(id)

  return <UserInfoModal data={user} />
}
