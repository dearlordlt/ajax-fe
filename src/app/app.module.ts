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
import { BeastsComponent } from './beasts/beasts.component';
import { AddBeastsComponent } from './beasts/add-beasts-form/add-beasts-form.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { AddAdvantagesComponent } from './advantages/add-advantages/add-advantages.component';
import { DisadvantagesComponent } from './disadvantages/disadvantages.component';
import { AddDisadvantagesComponent } from './disadvantages/add-disadvantages/add-disadvantages.component';


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
    BeastsComponent,
    AddBeastsComponent,
    AdvantagesComponent,
    AddAdvantagesComponent,
    DisadvantagesComponent,
    AddDisadvantagesComponent,
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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
