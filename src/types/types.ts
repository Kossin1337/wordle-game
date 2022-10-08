export interface IGameHistory {
  gameID: number;
  time: number;
  win: boolean;
  turns: number;
}

export interface IGameInfo {
  totalGames: number;
  wins: number;
  gamesHistory: IGameHistory[];
}

export interface IUsedKeys {
  a?: string;
  b?: string;
  c?: string;
  d?: string;
  e?: string;
  f?: string;
  g?: string;
  h?: string;
  i?: string;
  j?: string;
  k?: string;
  l?: string;
  m?: string;
  n?: string;
  o?: string;
  p?: string;
  q?: string;
  r?: string;
  s?: string;
  t?: string;
  u?: string;
  v?: string;
  w?: string;
  x?: string;
  y?: string;
  z?: string;
}

export interface IFormatedGuess {
  key: string;
  color: string;
  // color: "green" | "yellow" | "grey";
}

export interface IGuess {
  key: string;
  color: string;
}

export interface IFormattedGuesses {
  formattedGuess: IFormatedGuess[];
}
