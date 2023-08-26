import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import styles from './profile.module.css';
import Image from 'next/image';

export default async function Profile() {
  const session = await getServerSession(nextAuthOptions)
  return (
    <div>
      <div className={styles.fixed_container}>
        <div className={styles.main_container}>
          <form className={styles.forma2}>
            <div className={styles.main_container_info}>
              <h1 className={styles.hh}>Личная информация</h1>
              <div className={styles.login}>
                <label className={styles.login_label}>Логин</label>
                <input type="text" className={styles.login_input} defaultValue={session?.user?.name} />
              </div>
              <div className={styles.email}>
                <label className={styles.email_label}>Email</label>
                <input type="email" className={styles.email_input} defaultValue={session?.user?.email} />
              </div>
              <div className={styles.password}>
                <label className={styles.password_label}>Пароль</label>
                <input type="password" className={styles.password_input} defaultValue={'password'} />
              </div>
            </div>
            <div className={styles.main_container_button}>
              <button type="submit" className={styles.main_container_button_button}>Сохранить</button>
            </div>
          </form>
        </div>
        <div className={styles.right_container}>
          <div className={styles.right_container_top}>
            <p className={styles.right_container_top_p}>Ваши категории</p>
            <div className={styles.right_container_top1}>
              Название категории
              <button className={styles.container_button}>
                <div >
                  <Image src={'/assets/ui/delete.svg'} alt={'delLogo'} width={37} height={37} />
                </div>
                
              </button>
            </div>
          </div>
          <div className={styles.right_container_bottom}>
            <p className={styles.right_container_bottom_p}>Все категории</p>
            <div className={styles.right_container_bottom1}>
              Название категории
              <button className={styles.container_button}>
                <div >
                <Image src={'/assets/ui/add.svg'} alt={'plusLogo'} width={37} height={37} />
                </div>
                
              </button>
            </div>
            <div className={styles.right_container_bottom2}>
              Название категории
              <button className={styles.container_button} >
                <div >
                <Image src={'/assets/ui/add.svg'} alt={'plusLogo'} width={37} height={37} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
