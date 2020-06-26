import { Injectable } from '@angular/core';
import Character from './character';

@Injectable({
  providedIn: 'root'
})
export class CharCalcService {

  constructor() { }

  public calcEnc(char: Character) {
    char.enc = (char.headWeight + char.breastWeight +
    char.lArmWeight + char.rArmWeight + char.lLegWeight + char.rLegWeight +
    char.pHeadWeight + char.pBreastWeight + char.pLArmWeight + char.pLArmWeight +
    char.pLLegWeight + char.pRArmWeight) / 6 + char.shieldWeight - char.bonusEnc;
    return Math.round(char.enc);
  }
  public calcMove(char: Character) {
    char.move = char.sta + char.athletics + char.moveBonus - char.enc;
    return Math.round(char.move);
  }
  public calcMaxVigor(char: Character) {
    char.maxVigor = char.sta - char.enc + char.vigorBonus;
    return Math.round(char.maxVigor);
  }

  public calcCharHP(char: Character) {
    char.HP = char.sta * 2;
    return char.HP;
  }

  public calcHPLeft(char: Character) {
    char.HPLeft = char.HP - ((char.dmgBH + char.dmgBB + char.dmgBLA + char.dmgBLL + char.dmgBRA + char.dmgBRL) * 2 +
    (char.dmgTH + char.dmgTB + char.dmgTLA + char.dmgTLL + char.dmgTRA + char.dmgTRL) * 2 +
    (char.dmgCH + char.dmgCB + char.dmgCLA + char.dmgCLL + char.dmgCRA + char.dmgCRL) * 3 +
    (char.dmgFH + char.dmgFB + char.dmgFLA + char.dmgFLL + char.dmgFRA + char.dmgFRL) * 3);
    return char.HPLeft;
  }

  public calcMinusAtt(char: Character) {
    char.minusAtt = Math.floor(char.dmgTH / 2) + Math.floor(char.dmgFH / 2) +
    Math.floor(char.dmgCB / 2) + Math.floor(char.dmgTLA / 2) + Math.floor(char.dmgTRA / 2) +
    Math.floor(char.dmgTLA / 2) + Math.floor(char.dmgBLA / 2) + Math.floor(char.dmgBRA / 2) +
    Math.floor(char.dmgCLA / 2) + Math.floor(char.dmgCRA / 2) + Math.floor(char.dmgFLA / 2) + Math.floor(char.dmgFRA / 2) +
    Math.floor(char.penalty);
    return char.minusAtt;
  }

  public calcMinusDef(char: Character) {
    char.minusDef = Math.floor(char.dmgTH / 2) + Math.floor(char.dmgCH / 2) +
    Math.floor(char.dmgFH / 2) + Math.floor(char.dmgTB / 2) + Math.floor(char.dmgCB / 2) +
    Math.floor(char.dmgFB / 2) + Math.floor(char.dmgBLA / 2) + Math.floor(char.dmgBRA / 2) + Math.floor(char.penalty);
    return char.minusDef;
  }

  public calcMinusMove(char: Character) {
    char.minusMove = Math.floor(char.dmgTLL / 2) + Math.floor(char.dmgTRL / 2) +
    Math.floor(char.dmgBLL / 2) + Math.floor(char.dmgBRL / 2) +
    Math.floor(char.dmgCLL / 2) + Math.floor(char.dmgCRL / 2) +
    Math.floor(char.dmgFLL / 2) + Math.floor(char.dmgFRL / 2);
    return char.minusMove;
  }

  public calcPlusVigorCost(char: Character) {
    char.plusVigorCost = Math.floor(char.dmgBH / 2) + Math.floor(char.dmgBB / 2);
    return char.plusVigorCost;
  }

  public calcPenalty (char: Character) {
    char.penalty = char.vigorSpent / char.maxVigor;
    return Math.floor(char.penalty);
  }
}
