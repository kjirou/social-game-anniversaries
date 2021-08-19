export type Game = Readonly<{
  aliases: Readonly<string>[];
  id: string;
  name: string;
  url: string;
}>

export type Anniversary = Readonly<{
  date: string;
  gameId: Game['id'];
  id: string;
  name: string;
}>

export type IndexedGames = Readonly<{[key in Game['id']]: Game}>

export type IndexedAnniversaries = Readonly<{[key in Anniversary['id']]: Anniversary}>
