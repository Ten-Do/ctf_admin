'use client'

import { UserService } from "@/services/userService";
import styles from './requests.module.css';
import Image from "next/image";


const Requests = () => {
  return (
    <div className={styles.request}>
      <div className={styles.request_tittle}>Заявки</div>
      <div className={styles.user_block}>
        <div className={styles.user} id="user1">
          <div className={styles.user_items}>
            <div className={styles.name}> {'Имя'} </div>
            <div className={styles.category}> {'Категория'} </div>
            <div className={styles.request_button}>
              <div className={styles.button_plus} onClick={() => UserService.update('1', '1', [], [])}><button>
                <div className="svg_container">
                  <Image src={'/assets/ui/add.svg'} alt="" width={40} height={40} className="L_Plus" />
                </div>
              </button></div>
              <div className={styles.button_minus} onClick={() => UserService.delete(1)}><button>
                <div className="svg_container">
                  <Image src={'/assets/ui/reject.svg'} alt="" width={40} height={40} className="L_Minus" />
                </div>
              </button></div>
            </div>
          </div>
        </div>

        <div className={styles.user} id="user1">
          <div className={styles.user_items}>
            <div className={styles.name}> {'Имя'} </div>
            <div className={styles.category}> {'Категория'} </div>
            <div className={styles.request_button}>
              <div className={styles.button_plus} onClick={() => UserService.update('1', '1', [], [])}><button>
              <div className="svg_container">
                  <Image src={'/assets/ui/add.svg'} alt="" width={40} height={40} className="L_Plus" />
                </div>
              </button></div>
              <div className={styles.button_minus} onClick={() => UserService.delete(1)}><button>
                <div className="svg_container">
                  <Image src={'/assets/ui/reject.svg'} alt="" width={40} height={40} className="L_Minus" />
                </div>
              </button></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Requests;