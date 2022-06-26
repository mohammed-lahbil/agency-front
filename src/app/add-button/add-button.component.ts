import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddInterfaceComponent } from '../add-interface/add-interface.component';
import { ClientService } from '../service/client/client.service';
// import { MatDialog } from '@angular/material/dialog'
// import { AddInterfaceComponent } from '../add-interface/add-interface.component';
// import { Client } from '../models/client';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  // client : Client = {
  //   clientId: 0,
  //   name:'',
  //   agency: {
  //     code: 0,
  //     name: '',
  //     address:'',
  //     status: false
  //   }
  // }

  constructor(private clientService: ClientService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(AddInterfaceComponent, {
      width: '70%'
    })
  }
}
