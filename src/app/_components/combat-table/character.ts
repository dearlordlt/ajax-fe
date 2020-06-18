export default class Character {
  name: string;
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

  headWeight = 0;
  breastWeight = 0;
  lArmWeight = 0;
  rArmWeight = 0;
  lLegWeight = 0;
  rLegWeight = 0;
  shieldWeight = 0;

  headArmor = 0;
  breastArmor = 0;
  lArmArmor = 0;
  rArmArmor = 0;
  lLegArmor = 0;
  rLegArmor = 0;

  enc = 0;
  move = 0;
  bonusEnc = 0;
  maxVigor = 0;
  vigorLeft = 0;

  constructor( name: string) {
    this.name = name;
  }
}