'use client'

import styles from './unusers.module.css';
import loopSvg from '../../../../public/assets/admin_icons/users_icons/loop.svg';
import delSvg from '../../../../public/assets/profile_icons/delete.svg';
import { UserService } from '@/services/userService';
import Image from 'next/image';


const Unusers = () => {
  return (
    <div className={styles.unusers}>
      <div className={styles.unusers_tittle}>
        <div className={styles.unusers_p}>Неподтверждённые пользователи</div>
        <div className={styles.users_search}>
          <div className={styles.search_input}><input type="text" /></div>
          <div className={styles.img_search}><button>
            <div className='svg_container'>
              <Image src={loopSvg} alt="" width={26} height={26} />
            </div>
          </button>
          </div>
        </div>
      </div>


      <div className={styles.user_reg}>
        <div className={styles.user_data}>
          <div className={styles.stud_ticket}>
            <p>Студенческий билет</p>
          </div>
          <div className={styles.user_reg_data}>
            <div className={styles.name_surname}>
              <div className={styles.name_surname_p}>Имя Фамилия:</div>
              <div className={styles.name_input}>{'Стас Феоктистов'}</div>
            </div>
            <div className={styles.email}>
              <div className={styles.email_p}>Email:</div>
              <div className={styles.email_input}>{'vilnu13rk@mail.ru'}</div>
            </div>
            <div className={styles.categoria}>
              <div className={styles.categoria_p}>Категория:</div>
              <div className={styles.categoria_input}>{'Crypto'}</div>
            </div>
          </div>
        </div>
        <div className={styles.reg_buttons}>
          <div className={styles.reg_delite} onClick={() => UserService.delete(1)}><button>
            <div className='svg_container'>
            <Image src={delSvg} alt="" className={styles.L_Trash} />
            </div>
          </button></div>
          <div className={styles.reg_aply} onClick={() => UserService.verifyRegistration('1mo', 'dsadas')}><button>Добавить</button></div>
        </div>
      </div>

    </div>
  )
}

export default Unusers;
