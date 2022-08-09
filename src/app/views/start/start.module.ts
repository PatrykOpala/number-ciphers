import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start.component';
import { SpaceComponent } from '../space/space.component';
import { MediumComponent } from '../medium/medium.component';
import { AdvancedComponent } from '../advanced/advanced.component';
import { ExtremeComponent } from '../extreme/extreme.component';

const startRouter: Routes = [
  {path: '', component: StartComponent},
  {path: 'space', component: SpaceComponent},
  {path: 'medium', component: MediumComponent},
  {path: 'advanced', component: AdvancedComponent},
  {path: 'extreme', component: ExtremeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(startRouter)
  ]
})
export class StartModule { }
