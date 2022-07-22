import { Component, OnInit } from '@angular/core';
import { Agency } from '../models/agency';
import { Client } from '../models/client';
import { AgencyService } from '../service/agency/agency.service';
import { ClientService } from '../service/client/client.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddButtonComponent } from '../add-button/add-button.component';
import { DialogAlertComponent } from '../dialog-alert/dialog-alert.component';


@Component({
  selector: 'app-list-of-elements',
  templateUrl: './list-of-elements.component.html',
  styleUrls: ['./list-of-elements.component.css']
})
export class ListOfElementsComponent implements OnInit {

  searchText: any;
  p: number = 1;


  agency : Agency = {
    code:0,
    name:'',
    address:'',
    status: false
  }

  clients: Client[] = [];
  agencies: Agency[] = [];
  headers: string[] = ["Code", "Nom du client", "Agence", "Actions"];

  constructor(private clientService: ClientService, private agencyService: AgencyService, private dialog: MatDialog, private addButton: AddButtonComponent, private dialogAlert: DialogAlertComponent) { 
    
  }

  ngOnInit(): void {
    this.findAllClients();
    this.findAllAgencies();
  }

  findAllAgencies() {
    this.agencyService.findAll().subscribe(
      (resp) => {
        this.agencies = resp;
      }
    );
  }

  findAllClients() {
    this.clientService.findAll().subscribe(
      (resp) => {
        this.clients = resp;
      }
    );
  }

  deleteModal(client: Client){
    this.dialog.open(DialogAlertComponent,
      {
        width: '70%'
      })
  }

  deleteClient(client: Client){
    this.clientService.delete(client).subscribe(() => {
      this.clients.filter(cl => cl.clientId != client.clientId)
      this.findAllClients();
      window.alert(client.name+" a été supprimé avec succès !")
    })
  }

  getAgency(id: number){
    this.agencyService.getAgency(id).subscribe(
      (resp: Agency) => {
        this.agency = resp;
      }
    )
  }

}
