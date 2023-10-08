'use client'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './styles.module.css'

export type State = {
  data: { id: number }[]
  nextPage: number | null
}

export const EndlessFeedPlaceholder = ({
  ItemCard,
  origin,
  loadMore,
  className,
  loadMoreParams = [],
  idKey = 'id',
}: {
  ItemCard: (props: { data: any; card_href: string }) => JSX.Element
  origin: string
  loadMore: (page: number, ...loadMoreParams: any[]) => Promise<State>
  className?: string
  loadMoreParams?: any[]
  idKey: string
}) => {
  const [state, setState] = useState<State>({ data: [], nextPage: 1 })
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView && state.nextPage) {
      loadMore(state.nextPage, ...loadMoreParams).then((newState) => {
        if (newState.data) {
          setState(
            (prev: State): State => ({
              data: [...prev.data, ...newState.data],
              nextPage: newState.nextPage,
            }),
          )
        } else {
          throw newState
        }
      })
    }
  }, [inView, state])
  return (
    <>
      <div className={className}>
        {state.data.map((item) => (
          <ItemCard
            data={item}
            card_href={`${origin}/${encodeURIComponent(item[idKey])}`}
            key={item[idKey] + Math.random()}
          />
        ))}
      </div>
      {state.nextPage && (
        <div className={styles.loader_container} ref={ref}>
          <p>Loading...</p>
        </div>
      )}
    </>
  )
}
