export interface ICharCTable extends Document {
  name: string;
  _id: string;
  str: number;
  sta: number;
  dex: number;
  per: number;
  ref: number;
  will: number;
  athletics: number;
  vigorBonus: number;
  moveBonus: number;
  weaponWeight: number;
  vigorSpent: number;
  toughness: number;
  toughnessSpent: number;

  headWeight: number;
  breastWeight: number;
  lArmWeight: number;
  rArmWeight: number;
  lLegWeight: number;
  rLegWeight: number;
  shieldWeight: number;

  pHeadWeight: number;
  pBreastWeight: number;
  pLArmWeight: number;
  pRArmWeight: number;
  pLLegWeight: number;
  pRLegWeight: number;

  headArmor: number;
  breastArmor: number;
  lArmArmor: number;
  rArmArmor: number;
  lLegArmor: number;
  rLegArmor: number;

  encumbrance: number;
  move: number;
  bonusEnc: number;
  maxVigor: number;
  hp: number;
  hpLeft: number;

  dmgTH: number;
  dmgTB: number;
  dmgTLA: number;
  dmgTRA: number;
  dmgTLL: number;
  dmgTRL: number;

  dmgBH: number;
  dmgBB: number;
  dmgBLA: number;
  dmgBRA: number;
  dmgBLL: number;
  dmgBRL: number;

  dmgCH: number;
  dmgCB: number;
  dmgCLA: number;
  dmgCRA: number;
  dmgCLL: number;
  dmgCRL: number;

  dmgFH: number;
  dmgFB: number;
  dmgFLA: number;
  dmgFRA: number;
  dmgFLL: number;
  dmgFRL: number;

  minusAtt: number;
  minusDef: number;
  minusMove: number;
  plusVigorCost: number;
  penalty: number;
}