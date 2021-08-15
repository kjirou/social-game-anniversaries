import {
  Anniversary,
  Game,
  IndexedAnniversaries,
  IndexedGames,
} from '../types'

export const games: Game[] = [
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
export const anniversaries: Anniversary[] = [
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

export const indexedGames = games.reduce<IndexedGames>((acc, e) => {
  return {
    ...acc,
    ...{[e.id]: e},
  }
}, {})

export const indexedAnniversaries = anniversaries.reduce<IndexedAnniversaries>((acc, e) => {
  return {
    ...acc,
    ...{[e.id]: e},
  }
}, {})
