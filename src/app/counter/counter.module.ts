import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { ActionCounterComponent } from './action-counter/action-counter.component';
import { ViewCounterComponent } from './view-counter/view-counter.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const route:Routes = [
  {path: '', component : CounterComponent}
]


@NgModule({
  declarations: [
    CounterComponent,
    ActionCounterComponent,
    ViewCounterComponent,
    CustomCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route)
  ]
})
export class CounterModule { }
