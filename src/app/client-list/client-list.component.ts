import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { clientsMock  } from '../mockups/clients.mock';
import { accountMock } from '../mockups/account.mock';
import { Account, Address } from '../models/account.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  
clients : Client[] = clientsMock ;
account1 : Account = accountMock;
address1 : Account = accountMock ;

//Status: clients.status = [];



  constructor() { }
  ngOnInit(): void {
  }
}
