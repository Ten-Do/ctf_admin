'use client'
import Image from 'next/image';
import styles from './requestCard.module.css';
import { UserService } from '@/services/userService';


interface requestProps {
    name: string,
    category: string,
    email: string
}

const RequestCard = () => {
    return (
        <div className={styles.user + ' card'} >
            <div className={styles.user_items}>
                <div className={styles.name}> {'Имя'} </div>
                <div className={styles.category}> {'Категория'} </div>
                <div className={styles.request_button}>
                    <div className={styles.button_plus} onClick={() => UserService.update('1', '1', [], [])}>
                        <button>
                            <div className={styles.plus_button + ' svg_container'}>
                                <Image src={'/assets/ui/add.svg'} alt="" width={40} height={40} className="L_Plus" />
                            </div>
                        </button>
                    </div>
                    <div className={styles.button_minus} onClick={() => UserService.delete(1)}>
                        <button>
                            <div className={styles.minus_button + ' svg_container'}>
                                <Image src={'/assets/ui/reject.svg'} alt="" width={40} height={40} className="L_Minus" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestCard;