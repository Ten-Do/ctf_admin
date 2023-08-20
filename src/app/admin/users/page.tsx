'use client'

import { UserService } from '@/services/userService';
import styles from './users.module.css';
import Image from 'next/image';

const Users = () => {

    return (
        <div>
            <div className={styles.users_users}>
                <div className={styles.users_tittle}>
                    <div className={styles.tittle_p}>Пользователи</div>
                    <div className={styles.users_search}>
                        <div className={styles.search_input}><input type="text" /></div>
                        <div className={styles.img_search}><button >
                            <div className='svg_container'>
                                <Image src={'/assets/admin_icons/users_icons/loop.svg'} alt='loopSvg' width={25} height={25} />
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
                <div className={styles.users_user}>
                    <div className={styles.user_name}>{'Стас'}</div>
                    <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                        <div className='svg_container'>
                            <Image src={'/assets/profile_icons/delete.svg'} alt='delSvg' width={35} height={35} />
                        </div>
                    </button></div>
                </div>
                <div className={styles.users_user}>
                    <div className={styles.user_name}>{'Глеб'}</div>
                    <div className={styles.user_delite} onClick={() => UserService.delete(1)}><button>
                        <div className='svg_container'>
                            <Image src={'/assets/profile_icons/delete.svg'} alt='delSvg' width={35} height={35} />
                        </div>
                    </button></div>
                </div>
                <div className={styles.users_user}>
                    <div className={styles.user_name}>{'Юра'}</div>
                    <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                        <div className='svg_container'>
                            <Image src={'/assets/profile_icons/delete.svg'} alt='delSvg' width={35} height={35} />
                        </div>
                    </button></div>
                </div>
            </div >
        </div >
    );
}
export default Users;
