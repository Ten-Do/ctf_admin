import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { Category } from '@/types/category'
import { CATEGORIES } from '@/utils/arrays/category'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import styles from './categoryToggler.module.css'

export const CategoryToggler = async ({
  origin,
  allCategories = false,
}: {
  origin: string
  allCategories?: boolean
}) => {
  let categories: Category[]
  if (allCategories) {
    categories = CATEGORIES
  } else {
    const session = await getServerSession(nextAuthOptions)
    categories = session?.user?.categories || []
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.categories}>
          {categories.map((elem) => (
            <Link href={`/${origin}/${elem}`} key={elem}>
              <p className={styles.category}>{elem}</p>
            </Link>
          ))}
        </div>
        {/* <a href='' className={styles.btl__simage}>
          * OPT SVG *{/* <img src={optSvg} alt='' className='btl__image' /> 
        </a> */}
      </div>
    </>
  )
}
