import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatGridListModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatRadioModule,
} from '@angular/material';
import { RandomNpcComponent } from './_components/random-npc/random-npc.component';
import { AppHttpInterceptor } from './http.interceptor';
import { AdminComponent } from './_components/admin/admin.component';
import { SkillsComponent } from './_components/skills/skills.component';
import { TableComponent } from './_components/_shared/table/table.component';
import { MeleeWeaponsComponent } from './_components/melee-weapons/melee-weapons.component';
import { ShieldsComponent } from './_components/shields/shields.component';
import { SpellsComponent } from './_components/spells/spells.component';
import { RangedWeaponsComponent } from './_components/ranged-weapons/ranged-weapons.component';
import { AddMeleeFormComponent } from './_components/melee-weapons/add-melee-form/add-melee-form.component';
import { AddSpellsFormComponent } from './_components/spells/add-spells-form/add-spells-form.component';
import { AddRangedWeaponsFormComponent } from './_components/ranged-weapons/add-ranged-form/add-ranged-form.component';
import { AddSkillFormComponent } from './_components/skills/add-skills-form/add-skills-form.component';
import { AddShieldsFormComponent } from './_components/shields/add-shields-form/add-shields-form.component';
import { BeastsComponent } from './_components/beasts/beasts.component';
import { AddBeastsComponent } from './_components/beasts/add-beasts-form/add-beasts-form.component';
import { AdvantagesComponent } from './_components/advantages/advantages.component';
import { AddAdvantagesComponent } from './_components/advantages/add-advantages/add-advantages.component';
import { DisadvantagesComponent } from './_components/disadvantages/disadvantages.component';
import { AddDisadvantagesComponent } from './_components/disadvantages/add-disadvantages/add-disadvantages.component';
import { RegisterComponent } from './_components/register/register.component';
import { CombatTableElementComponent } from './_components/combat-table/combat-table-element/combat-table-element.component';
import { CombatTableUserSelectComponent } from './_components/combat-table/combat-table-user-select/combat-table-user-select.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { CTableComponent } from './_components/combat-table/combat-table/combat-table.component';
import { StatsComponent } from './_components/combat-table/stat-components/stats/stats.component';
import { Stats2Component } from './_components/combat-table/stat-components/stats2/stats2.component';
import { StatsPenaltyComponent } from './_components/combat-table/stat-components/stats-penalty/stats-penalty.component';
import { StatsSkillsComponent } from './_components/combat-table/stat-components/stats-skills/stats-skills.component';
import { StatsBonusComponent } from './_components/combat-table/stat-components/stats-bonus/stats-bonus.component';
import { StatsSpentComponent } from './_components/combat-table/stat-components/stats-spent/stats-spent.component';
import { StatsRollsComponent } from './_components/combat-table/stat-components/stats-rolls/stats-rolls.component';
import { ArmorComponent } from './_components/combat-table/stat-components/armor/armor.component';
import { ArmorCurrentComponent } from './_components/combat-table/stat-components/armor-current/armor-current.component';
import { ArmorSunderComponent } from './_components/combat-table/stat-components/armor-sunder/armor-sunder.component';
import { ArmorPaddingComponent } from './_components/combat-table/stat-components/armor-padding/armor-padding.component';
import { ArmorPaddingWeightComponent } from './_components/combat-table/stat-components/armor-padding-weight/armor-padding-weight.component';
import { ArmorPaddingSunderComponent } from './_components/combat-table/stat-components/armor-padding-sunder/armor-padding-sunder.component';
import { ArmorWeightComponent } from './_components/combat-table/stat-components/armor-weigh/armor-weight.component';
import { DamageHeadComponent } from './_components/combat-table/stat-components/damage-head/damage-head.component';
import { DamageTorsoComponent } from './_components/combat-table/stat-components/damage-torso/damage-torso.component';
import { DamageRightArmComponent } from './_components/combat-table/stat-components/damage-right-arm/damage-right-arm.component';
import { DamageLeftArmComponent } from './_components/combat-table/stat-components/damage-left-arm/damage-left-arm.component';
import { DamageRightLegComponent } from './_components/combat-table/stat-components/damage-right-leg/damage-right-leg.component';
import { DamageLeftLegComponent } from './_components/combat-table/stat-components/damage-left-leg/damage-left-leg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RandomNpcComponent,
    AdminComponent,
    SkillsComponent,
    TableComponent,
    MeleeWeaponsComponent,
    ShieldsComponent,
    SpellsComponent,
    RangedWeaponsComponent,
    AddMeleeFormComponent,
    AddSpellsFormComponent,
    AddRangedWeaponsFormComponent,
    AddSkillFormComponent,
    AddShieldsFormComponent,
    RegisterComponent,
    BeastsComponent,
    AddBeastsComponent,
    AdvantagesComponent,
    AddAdvantagesComponent,
    DisadvantagesComponent,
    AddDisadvantagesComponent,
    CTableComponent,
    CombatTableElementComponent,
    CombatTableUserSelectComponent,
    StatsComponent,
    Stats2Component,
    StatsPenaltyComponent,
    StatsSkillsComponent,
    StatsBonusComponent,
    StatsSpentComponent,
    StatsRollsComponent,
    ArmorWeightComponent,
    ArmorComponent,
    ArmorCurrentComponent,
    ArmorSunderComponent,
    ArmorPaddingComponent,
    ArmorPaddingWeightComponent,
    ArmorPaddingSunderComponent,
    DamageHeadComponent,
    DamageTorsoComponent,
    DamageRightArmComponent,
    DamageLeftArmComponent,
    DamageRightLegComponent,
    DamageLeftLegComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatRadioModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
