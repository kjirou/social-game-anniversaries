import Link from 'next/link'
import { ReactElement } from 'react'
import { anniversaries, indexedGames } from '../data'

// TODO: レイアウティング。
const TopPage = (): ReactElement => {
  return <>
    <h1>ソーシャルゲーム記念日確認ツール</h1>
    <ul>
      {
        anniversaries
          .slice()
          .reverse()
          .sort((a, b) => {
            return a.date < b.date
              ? 1
              : a.date > b.date
                ? -1
                : 0
          })
          .map((anniversary) => {
            const game = indexedGames[anniversary.gameId]
            return <li key={anniversary.id}>
              <Link href={`/anniversary/${anniversary.id}`}>
                <a>{game.name}</a>
              </Link>
              <span>,</span>
              <span>{anniversary.date}</span>
              <span>,</span>
              <span>{anniversary.name}</span>
            </li>
          })
      }
    </ul>
  </>
}

export default TopPage
