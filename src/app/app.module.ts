import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { HomeComponent } from './home/home.component';
import { ListOfElementsComponent } from './list-of-elements/list-of-elements.component';
import { AddInterfaceComponent } from './add-interface/add-interface.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ClientService } from './service/client/client.service';
import { AddButtonComponent } from './add-button/add-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BankDetailComponent,
    HomeComponent,
    ListOfElementsComponent,
    AddInterfaceComponent,
    AddButtonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule 
  ],
  providers: [HttpClient,ClientService, AddButtonComponent, AddInterfaceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
