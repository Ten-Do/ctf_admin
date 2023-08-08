import { Category } from '@/types/category'
import Link from 'next/link'
import styles from './categoryToggler.module.css'

type CategoryTogglerProps = {
  categories?: Category[]
}

export const CategoryToggler = ({ categories = [] }: CategoryTogglerProps) => {
  return (
    <>
      <div className={styles.btl__settings}>
        <div className={styles.btl__list}>
          {categories.map((elem) => (
            <Link href={`/tasks/${elem}`} key={elem}>
              <div className={styles.btl__point}>{elem}</div>
            </Link>
          ))}
        </div>
        <a href='' className={styles.btl__simage}>
          * OPT SVG *{/* <img src={optSvg} alt='' className='btl__image' /> */}
        </a>
      </div>
    </>
  )
}
