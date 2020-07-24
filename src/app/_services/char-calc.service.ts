import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharCombatTable } from '../_types/char-ctable.interface';

@Injectable({
  providedIn: 'root',
})
export class CharCalcService {
  constructor(private http: HttpClient) {}

  @Input() charactersList: CharCombatTable;

  private calcEnc(char: CharCombatTable) {
    char.encumbrance = Math.round(
      (char.headWeight +
        char.breastWeight +
        char.lArmWeight +
        char.rArmWeight +
        char.lLegWeight +
        char.rLegWeight +
        char.pHeadWeight +
        char.pBreastWeight +
        char.pLArmWeight +
        char.pLArmWeight +
        char.pLLegWeight +
        char.pRArmWeight) /
        10 +
        char.shieldWeight -
        char.bonusEnc
    );
  }

  private calcHeroicTurns(char: CharCombatTable) {
    char.heroicTurns =
      char.heroicTurnsMultiplier > 0
        ? char.sta * char.heroicTurnsMultiplier - char.heroicTurnsSpent
        : char.sta - char.heroicTurnsSpent;
  }

  private calMaxMana(char: CharCombatTable) {
    char.maxMana = char.will + char.bonusMana;
  }

  private calcManaLeft(char: CharCombatTable) {
    char.currentMana = char.maxMana - char.manaSpent;
  }

  private calcAttack(char: CharCombatTable) {
    char.attack = char.per + char.weaponSkill - char.minusAtt;
  }

  private calcEvade(char: CharCombatTable) {
    char.evade = char.dex + char.evadeSkill + char.defBonus;
  }

  private calcDefBonus(char: CharCombatTable) {
    char.defBonus =
      char.shieldSkill >= char.shieldDef ? char.shieldDef : char.shieldSkill;
  }

  private calcShieldHP(char: CharCombatTable) {
    char.shieldHPLeft = char.shieldHP - char.shieldDMG;
  }

  private calcBlock(char: CharCombatTable) {
    char.block = char.shieldSkill + char.shieldDef - char.minusDef;
  }

  private calcMove(char: CharCombatTable) {
    char.move = char.sta + char.athletics + char.moveBonus - char.encumbrance;
  }

  private calcMaxVigor(char: CharCombatTable) {
    char.maxVigor = char.sta - char.encumbrance + char.vigorBonus;
  }

  private calcCharHP(char: CharCombatTable) {
    char.hp = char.sta * 2;
  }

  private calcHPLeft(char: CharCombatTable) {
    char.hpLeft =
      char.hp -
      ((char.dmgBH +
        char.dmgBB +
        char.dmgBLA +
        char.dmgBLL +
        char.dmgBRA +
        char.dmgBRL) *
        2 +
        (char.dmgTH +
          char.dmgTB +
          char.dmgTLA +
          char.dmgTLL +
          char.dmgTRA +
          char.dmgTRL) *
          2 +
        (char.dmgCH +
          char.dmgCB +
          char.dmgCLA +
          char.dmgCLL +
          char.dmgCRA +
          char.dmgCRL) *
          3 +
        (char.dmgFH +
          char.dmgFB +
          char.dmgFLA +
          char.dmgFLL +
          char.dmgFRA +
          char.dmgFRL) *
          3);
  }

  private calcMinusAtt(char: CharCombatTable) {
    char.minusAtt =
      char.dmgTH / 2 +
      char.dmgFH / 2 +
      char.dmgCB / 2 +
      char.dmgTLA / 2 +
      char.dmgTRA / 2 +
      char.dmgTLA / 2 +
      char.dmgBLA / 2 +
      char.dmgBRA / 2 +
      char.dmgCLA / 2 +
      char.dmgCRA / 2 +
      char.dmgFLA / 2 +
      char.dmgFRA / 2 +
      char.penalty;
  }

  private calcMinusDef(char: CharCombatTable) {
    char.minusDef =
      char.dmgTH / 2 +
      char.dmgCH / 2 +
      char.dmgFH / 2 +
      char.dmgTB / 2 +
      char.dmgCB / 2 +
      char.dmgFB / 2 +
      char.dmgBLA / 2 +
      char.dmgBRA / 2 +
      char.penalty;
  }

  private calcMinusMove(char: CharCombatTable) {
    char.minusMove =
      char.dmgTLL / 2 +
      char.dmgTRL / 2 +
      char.dmgBLL / 2 +
      char.dmgBRL / 2 +
      char.dmgCLL / 2 +
      char.dmgCRL / 2 +
      char.dmgFLL / 2 +
      char.dmgFRL / 2;
  }

  private calcPlusVigorCost(char: CharCombatTable) {
    char.plusVigorCost = char.dmgBH / 2 + char.dmgBB / 2;
  }

  private calcPenalty(char: CharCombatTable) {
    char.penalty =
      char.maxVigor === 0 || char.vigorSpent === 0
        ? 0
        : Math.floor(char.vigorSpent / char.maxVigor);
  }

  private calcToughness(char: CharCombatTable) {
    char.toughness = char.sta - 10;
  }

  public updateStats(char: CharCombatTable) {
    this.calcEnc(char);
    this.calcPenalty(char);
    this.calcMinusAtt(char);
    this.calcMinusDef(char);
    this.calcMinusMove(char);
    this.calcMove(char);
    this.calcMaxVigor(char);
    this.calcCharHP(char);
    this.calcHPLeft(char);
    this.calcPlusVigorCost(char);
    this.calcToughness(char);
    this.calMaxMana(char);
    this.calcManaLeft(char);
    this.calcAttack(char);
    this.calcDefBonus(char);
    this.calcEvade(char);
    this.calcShieldHP(char);
    this.calcBlock(char);
    this.calcHeroicTurns(char);
  }

  /* public saveCharacter(char: Character) {
  } */
}
