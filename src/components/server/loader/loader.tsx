import styles from './styles.module.css'

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}></span>
    </div>
  )
}
