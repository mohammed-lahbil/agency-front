import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { HomeComponent } from './home/home.component';
import { ListOfElementsComponent } from './list-of-elements/list-of-elements.component';
import { AddInterfaceComponent } from './add-interface/add-interface.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientService } from './service/client/client.service';
import { AddButtonComponent } from './add-button/add-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgencyService } from './service/agency/agency.service';
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BankDetailComponent,
    HomeComponent,
    ListOfElementsComponent,
    AddInterfaceComponent,
    AddButtonComponent,
    SearchBarComponent,
    NavbarComponent,
    DialogAlertComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [HttpClient,ClientService,AgencyService, AddButtonComponent, AddInterfaceComponent, DialogAlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
