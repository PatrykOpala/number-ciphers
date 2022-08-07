import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start.component';
import { ExtremeComponent } from '../extreme/extreme.component';
import { AdvancedComponent } from '../advanced/advanced.component';
import { MediumComponent } from '../medium/medium.component';
import { SpaceComponent } from '../space/space.component';

const startRouter: Routes = [
  {path: 'start', component: StartComponent},
  {path: 'start/space', component: SpaceComponent},
  {path: 'start/medium', component: MediumComponent},
  {path: 'start/advanced', component: AdvancedComponent},
  {path: 'start/extreme', component: ExtremeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(startRouter)
  ]
})
export class StartModule { }
