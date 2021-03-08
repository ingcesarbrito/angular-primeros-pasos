import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ControlComponent } from './control/control.component';
import { SaludoComponent } from './saludo/saludo.component';
import { DommodifyComponent } from './dommodify/dommodify.component';
import { HeroeslistComponent } from './heroeslist/heroeslist.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ControlComponent, SaludoComponent, DommodifyComponent, HeroeslistComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
