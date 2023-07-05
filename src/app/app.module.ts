import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Distancia2pModule } from './distancia2p/distancia2p.module';
import { ResistenciaModule } from './resistencia/resistencia.module';
import { CinepolisModule } from './cinepolis/cinepolis.module';
import { PizzeriaModule} from './pizzeria/pizzeria.module';

import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [
    AppComponent,

    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Distancia2pModule,
    ResistenciaModule,
    CinepolisModule,
    AppRoutingModule,
    PizzeriaModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
