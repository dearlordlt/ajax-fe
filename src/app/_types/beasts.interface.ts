  export interface IBeasts extends Document {
    _id?: string;
    npc: string;
    attributes: IAttributes;
    talents: ITalents;
    stats: IStats;
    abilities: string[];
    weight: string;
  }

  export interface IAttributes {
    str: number;
    dex: number;
    ref: number;
    hp: number;
    move: IMove;
  }

  export interface IMove {
    ground: number;
    flight: number;
  }

  export interface ITalents {
    sense: number;
    fitness: number;
    awareness: number;
    intelligence: number;
  }

  export interface IStats {
    att: number;
    def: number;
    DMG: string;
  }
