import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

@Inject([])

export class AddInterfaceComponent implements OnInit {
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

  constructor(private clientService: ClientService,private addButton:AddButtonComponent, private agencyService: AgencyService){}

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
        console.log("hbiba", response);
        this.client.clientId = response.clientId;
        this.client.name = response.name;
        this.client.agency = response.agency;
        this.clients = [this.client, ...this.clients];
      }
    );
    console.log("kbida", this.client);
  }
}
