import { RatingCard } from '@/components/client/cards/rating/ratingCard'
import { UserService } from '@/services/userService'
import { Category } from '@/types/category'
import styles from '.././rating.module.css'

async function Rating({ params: { category } }: { params: { category: Category } }) {
  const topUser: { nickname: string; id: number; score: number }[] = await UserService.getScoreboard(category).catch(
    (err) => err,
  )

  return (
    <div className={styles.cards}>
      <h2>
        Рейтинг в категории <span className={styles.category}>{category.toUpperCase()}</span>
      </h2>
      {topUser.map((user, i) => (
        <RatingCard key={user.id} data={{ number: i, ...user }} />
      ))}
    </div>
  )
}

export default Rating
