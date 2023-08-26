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
                                <Image src={'/assets/ui/loop.svg'} alt='loopSvg' width={25} height={25} />
                            </div>
                        </button>
                        </div>
                    </div>
                </div>
                <div className={styles.users_users_content}>
                    <div className={styles.users_users_column}>
                        <div className={styles.users_user}>
                            <div className={styles.user_info}>
                                <div className={styles.user_nickname}>{'Bbar0n-'}</div>
                                <div className={styles.user_name}>{'Стас Феоктистов'}</div>
                                <div className={styles.user_email}>{'vilnus1337@mail.ru'}</div>
                            </div>

                            <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                                <div className='svg_container'>
                                    <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={35} height={35} />
                                </div>
                            </button></div>
                        </div>
                        <div className={styles.users_user}>
                            <div className={styles.user_info}>
                                <div className={styles.user_nickname}>{'Glebb123-'}</div>
                                <div className={styles.user_name}>{'Глеб Глебов'}</div>
                                <div className={styles.user_email}>{'Ggleb1337@mail.ru'}</div>
                            </div>

                            <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                                <div className='svg_container'>
                                    <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={35} height={35} />
                                </div>
                            </button></div>
                        </div>
                        <div className={styles.users_user}>
                            <div className={styles.user_info}>
                                <div className={styles.user_nickname}>{'Yourec0k'}</div>
                                <div className={styles.user_name}>{'Юра Юров'}</div>
                                <div className={styles.user_email}>{'Youra1337@mail.ru'}</div>
                            </div>

                            <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                                <div className='svg_container'>
                                    <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={35} height={35} />
                                </div>
                            </button></div>
                        </div>
                    </div>
                    <div className={styles.users_users_column}>
                        <div className={styles.users_user}>
                            <div className={styles.user_info}>
                                <div className={styles.user_nickname}>{'Bbar0n-'}</div>
                                <div className={styles.user_name}>{'Стас Феоктистов'}</div>
                                <div className={styles.user_email}>{'vilnus1337@mail.ru'}</div>
                            </div>

                            <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                                <div className='svg_container'>
                                    <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={35} height={35} />
                                </div>
                            </button></div>
                        </div>
                        <div className={styles.users_user}>
                            <div className={styles.user_info}>
                                <div className={styles.user_nickname}>{'Glebb123-'}</div>
                                <div className={styles.user_name}>{'Глеб Глебов'}</div>
                                <div className={styles.user_email}>{'Ggleb1337@mail.ru'}</div>
                            </div>

                            <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                                <div className='svg_container'>
                                    <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={35} height={35} />
                                </div>
                            </button></div>
                        </div>
                        <div className={styles.users_user}>
                            <div className={styles.user_info}>
                                <div className={styles.user_nickname}>{'Yourec0k'}</div>
                                <div className={styles.user_name}>{'Юра Юров'}</div>
                                <div className={styles.user_email}>{'Youra1337@mail.ru'}</div>
                            </div>

                            <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                                <div className='svg_container'>
                                    <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={35} height={35} />
                                </div>
                            </button></div>
                        </div>
                    </div>
                    <div className={styles.users_users_column}>
                        <div className={styles.users_user}>
                            <div className={styles.user_info}>
                                <div className={styles.user_nickname}>{'Bbar0n-'}</div>
                                <div className={styles.user_name}>{'Стас Феоктистов'}</div>
                                <div className={styles.user_email}>{'vilnus1337@mail.ru'}</div>
                            </div>

                            <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                                <div className='svg_container'>
                                    <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={35} height={35} />
                                </div>
                            </button></div>
                        </div>
                        <div className={styles.users_user}>
                            <div className={styles.user_info}>
                                <div className={styles.user_nickname}>{'Glebb123-'}</div>
                                <div className={styles.user_name}>{'Глеб Глебов'}</div>
                                <div className={styles.user_email}>{'Ggleb1337@mail.ru'}</div>
                            </div>

                            <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                                <div className='svg_container'>
                                    <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={35} height={35} />
                                </div>
                            </button></div>
                        </div>
                        <div className={styles.users_user}>
                            <div className={styles.user_info}>
                                <div className={styles.user_nickname}>{'Yourec0k'}</div>
                                <div className={styles.user_name}>{'Юра Юров'}</div>
                                <div className={styles.user_email}>{'Youra1337@mail.ru'}</div>
                            </div>

                            <div className={styles.user_delite} onClick={() => UserService.delete(1)} ><button>
                                <div className='svg_container'>
                                    <Image src={'/assets/ui/delete.svg'} alt='delSvg' width={35} height={35} />
                                </div>
                            </button></div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
}
export default Users;
