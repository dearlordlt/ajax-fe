import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { RandomNpcComponent } from './_components/random-npc/random-npc.component';
import { Role } from './_models/';
import { AdminComponent } from './_components/admin/admin.component';
import { SkillsComponent } from './_components/skills/skills.component';
import { MeleeWeaponsComponent } from './_components/melee-weapons/melee-weapons.component';
import { ShieldsComponent } from './_components/shields/shields.component';
import { RangedWeaponsComponent } from './_components/ranged-weapons/ranged-weapons.component';
import { SpellsComponent } from './_components/spells/spells.component';
import { RegisterComponent } from './_components/register/register.component';
import { BeastsComponent } from './_components/beasts/beasts.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'random-npc',
    component: RandomNpcComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'skills',
    component: SkillsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'equipment/melee-weapons',
    component: MeleeWeaponsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'equipment/ranged-weapons',
    component: RangedWeaponsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'beasts',
    component: BeastsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'equipment/shields',
    component: ShieldsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'spells',
    component: SpellsComponent,
    canActivate: [AuthGuard],
  },

  // otherwise redirect to login
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
