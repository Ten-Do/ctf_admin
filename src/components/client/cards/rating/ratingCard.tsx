import styles from './styles.module.css'

export const RatingCard = ({ data }: { data: { score: number; number: number; nickname: string } }) => {
  return (
    <>
      <div className={'card ' + styles.container}>
        <h2>{data.nickname || 'nickname'}</h2>
        <p className='subtext'>Счёт: {data.score || 314}</p>
      </div>
    </>
  )
}
