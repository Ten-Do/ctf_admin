import Link from 'next/link'
import Image from 'next/image'
import styles from './sidebar.module.css'
import { PATHS } from '@/urls'

const isAdmin = true

type paths = keyof typeof PATHS
type link_array = Array<[paths, string]>

const common_links: link_array = [
  ['home', 'Главная'],
  ['rating', 'Рейтинг'],
  ['tasks', 'Задания'],
]
const admin_links: link_array = [
  ['a_tasks', 'Задания'],
  ['a_users', 'Пользователи'],
  ['a_unusers', 'Новые пользователи'],
  ['a_requests', 'Заявки'],
]
const special_links: link_array = [['profile', 'Аккаунт']]

type SidebarItemProps = { name: paths; title: string }
const SidebarItem = ({ name, title }: SidebarItemProps) => {
  return (
    <div className={styles.sidebar_item}>
      <Link href={PATHS[name]}>
        <div className='svg_container'>
          <Image src={`/assets/sidebar_icons/${name}.svg`} alt={name} width={20} height={20} />
        </div>
        <div className={styles.item_title}>{title}</div>
      </Link>
    </div>
  )
}

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar_container}>
      <div className={styles.sidebar_block}>
        <p className={styles.sidebar_title}>Happy hacking!</p>
        {common_links.map((elem) => (
          <SidebarItem name={elem[0]} title={elem[1]} key={elem[0]}></SidebarItem>
        ))}
      </div>
      <hr />
      {isAdmin && (
        <div className={styles.sidebar_block}>
          <p className={styles.sidebar_title}>Админ</p>
          {admin_links.map((elem) => (
            <SidebarItem name={elem[0]} title={elem[1]} key={elem[0]}></SidebarItem>
          ))}
        </div>
      )}
      <div className={styles.special_sidebar_block}>
        {special_links.map((elem) => (
          <SidebarItem name={elem[0]} title={elem[1]} key={elem[0]}></SidebarItem>
        ))}
      </div>
    </nav>
  )
}
