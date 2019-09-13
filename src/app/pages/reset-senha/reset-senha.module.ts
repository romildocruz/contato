import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResetSenhaPage } from './reset-senha.page';

const routes: Routes = [
  {
    path: '',
    component: ResetSenhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResetSenhaPage]
})
export class ResetSenhaPageModule {}
