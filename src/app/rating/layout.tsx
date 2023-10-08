import styles from './rating.module.css'
import { CategoryToggler } from '@/components/server/categoryToggler/categoryToggler'
import { UserService } from '@/services/userService'

async function RatingLayout({ children }: { children: React.ReactNode }) {
  const userScore = await UserService.getUserScores().catch((err) => console.log(err.message?.text))

  return (
    <>
      {userScore && (
        <div className={styles.userScores}>
          <h1>
            {userScore.nickname}
          </h1>
          <div className={styles.points}>
            {userScore.points?.length ? (
              userScore.points?.map(([category, score]) => (
                <p className={'subtext card ' + styles.pointCard} key={category}>
                  {category}: {score}
                </p>
              ))
            ) : (
              <p className='subtext'>Результаты ваших будущих побед будут отображены здесь</p>
            )}
          </div>
        </div>
      )}

      <CategoryToggler origin='rating' />
      {children}
    </>
  )
}
export default RatingLayout
