export default class Character {
  name: string;
  _id: string;
  str = 10;
  sta = 10;
  dex = 10;
  per = 10;
  ref = 10;
  will = 10;
  athletics = 0;
  vigorBonus = 0;
  moveBonus = 0;
  weaponWeight = 0;
  vigorSpent = 0;
  toughness = 0;
  toughnessSpent = 0;

  headWeight = 0;
  breastWeight = 0;
  lArmWeight = 0;
  rArmWeight = 0;
  lLegWeight = 0;
  rLegWeight = 0;
  shieldWeight = 0;

  pHeadWeight = 0;
  pBreastWeight = 0;
  pLArmWeight = 0;
  pRArmWeight = 0;
  pLLegWeight = 0;
  pRLegWeight = 0;

  headArmor = 0;
  breastArmor = 0;
  lArmArmor = 0;
  rArmArmor = 0;
  lLegArmor = 0;
  rLegArmor = 0;

  encumbrance = 0;
  move = 0;
  bonusEnc = 0;
  maxVigor = 0;
  hp = 0;
  hpLeft = 0;

  dmgTH = 0;
  dmgTB = 0;
  dmgTLA = 0;
  dmgTRA = 0;
  dmgTLL = 0;
  dmgTRL = 0;

  dmgBH = 0;
  dmgBB = 0;
  dmgBLA = 0;
  dmgBRA = 0;
  dmgBLL = 0;
  dmgBRL = 0;

  dmgCH = 0;
  dmgCB = 0;
  dmgCLA = 0;
  dmgCRA = 0;
  dmgCLL = 0;
  dmgCRL = 0;

  dmgFH = 0;
  dmgFB = 0;
  dmgFLA = 0;
  dmgFRA = 0;
  dmgFLL = 0;
  dmgFRL = 0;

  minusAtt = 0;
  minusDef = 0;
  minusMove = 0;
  plusVigorCost = 0;
  penalty = 0;

  constructor( name: string, _id: string) {
    this.name = name;
    this._id = _id;
  }
}
