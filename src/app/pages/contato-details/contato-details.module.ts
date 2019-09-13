import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContatoDetailsPage } from './contato-details.page';

const routes: Routes = [
  {
    path: '',
    component: ContatoDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContatoDetailsPage]
})
export class ContatoDetailsPageModule {}
