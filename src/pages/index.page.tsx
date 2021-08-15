import Link from 'next/link'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { anniversaries, indexedGames } from '../data'

const AnniversaryListItem = styled.li`
  display: block;
`

const AnniversaryListItemHeading = styled.h3`
  cursor: pointer;
  > a > span:nth-child(n+2) {
    margin-left: 8px;
  }
`

// TODO: レイアウティング。
const TopPage = (): ReactElement => {
  const sortedAnniversaries = anniversaries
    .slice()
    .reverse()
    .sort((a, b) => {
      return a.date < b.date
        ? 1
        : a.date > b.date
          ? -1
          : 0
    })
  return <>
    <h1>ソシャゲ記念日</h1>
    <ul>
      {
        sortedAnniversaries.map((anniversary) => {
          const game = indexedGames[anniversary.gameId]
          return <AnniversaryListItem key={anniversary.id}>
            <AnniversaryListItemHeading>
              <Link href={`/anniversary/${anniversary.id}`} passHref>
                  <a>
                    <span>{anniversary.date}</span>
                    <span>{game.name}</span>
                    <span>{anniversary.name}</span>
                  </a>
              </Link>
            </AnniversaryListItemHeading>
          </AnniversaryListItem>
        })
      }
    </ul>
  </>
}

export default TopPage
