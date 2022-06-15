import { Component, OnInit } from '@angular/core';

interface Client{
  code: string,
  name: string,
  agency: string,
  actions: number
}

@Component({
  selector: 'app-list-of-elements',
  templateUrl: './list-of-elements.component.html',
  styleUrls: ['./list-of-elements.component.css']
})
export class ListOfElementsComponent implements OnInit {

  clients: Client[];
  headers: string[];

  constructor() { 

    this.headers = ["Code", "Nom du client", "Agence", "Action"];
    
    this.clients = [
      {
        code: "00001",
        name: "Client 1",
        agency: "Agence 2",
        actions: 4
      },
      {
        code: "00002",
        name: "Client 2",
        agency: "Agence 1",
        actions: 4
      },
      {
        code: "00003",
        name: "Client 3",
        agency: "Agence 3",
        actions: 4
      },
      {
        code: "00004",
        name: "Client 4",
        agency: "Agence 2",
        actions: 4
      },
      {
        code: "00005",
        name: "Client 5",
        agency: "Agence 3",
        actions: 4
      },
      {
        code: "00006",
        name: "Client 6",
        agency: "Agence 1",
        actions: 4
      }
    ]
  }

  ngOnInit(): void {
  }

  delete(index: number){
    this.clients.splice(index, 1);
  }
}
