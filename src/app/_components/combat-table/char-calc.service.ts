import { Injectable } from '@angular/core';
import Character from './character';

@Injectable({
  providedIn: 'root'
})
export class CharCalcService {

  constructor() { }

  public calcEnc(char: Character) {
    char.enc = (char.headWeight + char.breastWeight +
    char.lArmWeight + char.rArmWeight + char.lLegWeight + char.rLegWeight) / 6 + char.shieldWeight - char.bonusEnc;
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

  public calcVigorLeft(char: Character) {
    char.vigorLeft = char.maxVigor - char.vigorSpent;
    return Math.round(char.vigorLeft);
  }
}
