import { UserService } from '../../../../services/userService';
import styles from './user.module.css'



const User = (props) => {
    return (
        <div className={styles.users_user}>
            <div className={styles.user_name}>{props.data.name}</div>
            <div className={styles.user_delite} onClick={() => UserService.delete(props.data.id)}><button>
                <img src={delSvg} alt="" className="L_Trash" />
            </button></div>
        </div>
    );
}
export default User;