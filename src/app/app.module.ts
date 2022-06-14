import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { HomeComponent } from './home/home.component';
import { ListOfElementsComponent } from './list-of-elements/list-of-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BankDetailComponent,
    HomeComponent,
    ListOfElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
