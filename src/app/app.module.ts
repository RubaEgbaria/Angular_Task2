import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ifdirective } from './if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientCardComponent,
    AccountInfoComponent,
    ifdirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
