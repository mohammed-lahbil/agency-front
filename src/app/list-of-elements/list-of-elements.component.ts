import { Component, OnInit } from '@angular/core';
import { Agency } from '../models/agency';
import { Client } from '../models/client';
import { AgencyService } from '../service/agency/agency.service';
import { ClientService } from '../service/client/client.service';


@Component({
  selector: 'app-list-of-elements',
  templateUrl: './list-of-elements.component.html',
  styleUrls: ['./list-of-elements.component.css']
})
export class ListOfElementsComponent implements OnInit {

  agency : Agency = {
    code:0,
    name:'',
    address:'',
    status: false
  }
  clients: Client[] = [];
  agencies: Agency[] = [];
  headers: string[] = ["Code", "Nom du client", "Agence", "Actions"];

  constructor(private clientService: ClientService, public agencyService: AgencyService) { 
    
  }

  ngOnInit(): void {
   
    this.findAllClients();
    this.findAllAgencies();
  }

  findAllAgencies() {
    this.agencyService.findAll().subscribe(
      (resp) => {
        this.agencies = resp;
        console.log("kubida",resp);
      }
    );
  }

  findAllClients() {
    this.clientService.findAll().subscribe(
      (resp) => {
        this.clients = resp;
        console.log("zwiwna",resp);
      }
    );
  }

  deleteClient(client: Client){
    this.clientService.delete(client).subscribe(() => {
      this.clients.filter(cl => cl.clientId != client.clientId)
    })
  }

  getAgency(id: number){
    this.agencyService.getAgency(id).subscribe(
      (resp: Agency) => {
        console.log('hbiba', resp);
        this.agency = resp;
      }
    )
  }

  
}
