export interface Game {
  id: string; // assumed to be UUID
  start: Date;
  end: Date;
  arrive: Date;
}

export interface ScoringEvent {
  id: string; // assumed to be UUID
  game_id: string; // assumed to be UUID
  timestamp: Date;
  data: ScorekeepingData;
}

export interface ScorekeepingData {
  code: ScorekeepingCode;
  attributes: {
    advancesCount: boolean;
    result: ScorekeepingResult;
  };
}

enum ScorekeepingCode { Pitch, Ball }

enum ScorekeepingResult { BallinPlay, Strikeout }
