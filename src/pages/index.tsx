import { GetStaticPropsResult } from 'next'
import { ReactElement } from 'react'

type Game = {
  aliases: string[];
  id: string;
  name: string;
  url: string;
}
type Anniversary = {
  date: string;
  gameId: Game['id'];
  id: string;
  name: string;
}
type StaticProps = {
  anniversaries: Anniversary[];
  games: Game[];
  indexedAnniversaries: {[key in Anniversary['id']]: Anniversary};
  indexedGames: {[key in Game['id']]: Game};
}
type Props = StaticProps

const games: Game[] = [
  {
    // TODO: idを一意に保つ。
    // TODO: 多言語対応。
    id: 'fgo',
    name: 'Fate Grand/Order',
    aliases: ['FGO'],
    url: 'https://www.fate-go.jp/',
  },
  {
    id: 'umamusume',
    name: 'ウマ娘 プリティーダービー',
    aliases: ['ウマ娘'],
    url: 'https://umamusume.jp/',
  },
  {
    id: 'deresute',
    name: 'アイドルマスター シンデレラガールズ スターライトステージ',
    aliases: ['デレステ', 'シンデレラガールズ'],
    url: 'https://cinderella.idolmaster.jp/sl-stage/',
  },
  {
    id: 'syanimasu',
    name: 'アイドルマスター シャイニーカラーズ',
    aliases: ['シャニマス'],
    url: 'https://shinycolors.idolmaster.jp/',
  },
  {
    id: 'mirisita',
    name: 'アイドルマスター ミリオンスターズ！ シアターデイズ',
    aliases: ['ミリシタ'],
    url: 'https://millionlive.idolmaster.jp/theaterdays/',
  },
  {
    id: 'byakuyakyokko',
    name: '白夜極光',
    aliases: ['白夜'],
    url: 'https://www.alchemystars.jp/',
  },
]
// TODO: 月日だけを登録して繰り返しできる機能。
// TODO: 端末違いにより記念日が異なるかもしれない。
const anniversaries: Anniversary[] = [
  {
    id: '1',
    gameId: 'fgo',
    name: '6周年イベント',
    date: '2021-08-01',
  },
  {
    id: '2',
    gameId: 'fgo',
    name: '正月イベント',
    date: '2022-01-01',
  },
  {
    id: '11',
    gameId: 'umamusume',
    name: '1周年イベント',
    date: '2022-02-24',
  },
  {
    id: '31',
    gameId: 'syanimasu',
    name: '3周年イベント',
    date: '2021-04-24',
  },
  {
    id: '32',
    gameId: 'syanimasu',
    name: '3.5周年イベント',
    date: '2021-10-24',
  },
]

export const getStaticProps = async (): Promise<GetStaticPropsResult<StaticProps>> => {
  const indexedGames = games.reduce((acc, e) => {
    return {
      ...acc,
      ...{[e.id]: e},
    }
  }, {})
  const indexedAnniversaries = anniversaries.reduce((acc, e) => {
    return {
      ...acc,
      ...{[e.id]: e},
    }
  }, {})
  return {
    props: {
      games,
      indexedGames,
      anniversaries,
      indexedAnniversaries,
    },
  }
}

// TODO: レイアウティング。
const TopPage = (props: Props): ReactElement => {
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
            const game = props.indexedGames[anniversary.gameId]
            return <li key={anniversary.id}>
              <a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                >{game.name}</a>
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
