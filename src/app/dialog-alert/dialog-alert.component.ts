import { Component, OnInit } from '@angular/core';
import { ListOfElementsComponent } from '../list-of-elements/list-of-elements.component';
import { Client } from '../models/client';
import { ClientService } from '../service/client/client.service';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './dialog-alert.component.html',
  styleUrls: ['./dialog-alert.component.css']
})
export class DialogAlertComponent implements OnInit {
  content: string = "Êtes vous sur de vouloir supprimer ce client";

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  setContent(){

  }

}
