'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
//import { useInView } from 'react-intersection-observer'
import styles from './styles.module.css'

export type State = {
  data: { id: number }[]
  nextPage: number
}

export const EndlessFeedPlaceholder = ({
  ItemCard,
  origin,
  loadMore,
  className,
  loadMoreParams = [],
}: {
  ItemCard: (props: { data: any }) => JSX.Element
  origin: string
  loadMore: (page: number, ...loadMoreParams: any[]) => Promise<State>
  className?: string
  loadMoreParams?: any[]
}) => {
  const [state, setState] = useState<State>({ data: [], nextPage: 1 })
  const { ref, inView } = useInView()
  console.log(state)
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
          <Link href={`${origin}/${item.id}`} key={item.id}>
            <ItemCard data={item} />
          </Link>
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
