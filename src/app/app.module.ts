import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NovaTransferenciaModule } from './nova-transferencia/nova-transferencia.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NovaTransferenciaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
