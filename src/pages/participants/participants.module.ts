import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticipantsPage } from './participants';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ParticipantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ParticipantsPage),
    CommonModule
  ],
})
export class ParticipantsPageModule {}
