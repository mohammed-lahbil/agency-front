import { Component, Inject, OnInit } from '@angular/core';
import { AddButtonComponent } from '../add-button/add-button.component';
import { Agency } from '../models/agency';
import { Client } from '../models/client';
import { AgencyService } from '../service/agency/agency.service';
import { ClientService } from '../service/client/client.service';

@Component({
  selector: 'app-add-interface',
  templateUrl: './add-interface.component.html',
  styleUrls: ['./add-interface.component.css']
})

export class AddInterfaceComponent implements OnInit {
  alert : boolean = false;
  client : Client = {
    clientId: 0,
    name:'',
    agency: {
      code: 0,
      name: '',
      address: '',
      status: false
    }
  }

  clients: Client[] = [];
  agencies: Agency[] = [];

  constructor(private clientService: ClientService, private addButton:AddButtonComponent, private agencyService: AgencyService){}

  ngOnInit(): void {
    this.findAllAgencies();
    this.findAllClients();
  }

  findAllClients(){
    this.clientService.findAll().subscribe(
      (response) => {
        this.clients = response;
      }
    )
  }

  findAllAgencies(){
    this.agencyService.findAll().subscribe(
      (resp)=>{
        this.agencies = resp;
      }
    );
  }

  addClient(){
    this.clientService.add(this.client).subscribe(
      (response : Client) => {
        this.clients = [response, ...this.clients];
        this.findAllClients();
        this.addButton.closeDialog();
        window.alert(response.name+" a été ajouté avec succès !");
      }
    );
  }

  editClient(client: Client){
    this.clientService.update(this.client).subscribe(
      (response: Client|any) => {
        this.client.agency = response.agency;
        this.client.name = response.name;
      }
    )
  }
}
