import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { StartComponent } from './views/start/start.component';
import { SpaceComponent } from './views/space/space.component';
import { MediumComponent } from './views/medium/medium.component';
import { AdvancedComponent } from './views/advanced/advanced.component';
import { ExtremeComponent } from './views/extreme/extreme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    SpaceComponent,
    MediumComponent,
    AdvancedComponent,
    ExtremeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
