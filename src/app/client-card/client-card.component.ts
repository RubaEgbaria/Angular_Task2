import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/client.model';


@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {
  @Input() client!: Client;
  button_name = 'View more';
  more = 'false' ; 
  less = 'false'; 
  // departments : Department = accountMock.departments ; 
  // contacts : Contact = accountMock.contacts ; 


  constructor() { }

  ngOnInit(): void {
  }

  viewmore() : any {

  
    if ( this.button_name == 'View more')
    {
    this.button_name = 'View less';
    this.more = 'true' ; 
    this.less = 'false' ; 
    console.log(' more in log ');
  }

  else if ( this.button_name == 'View less')
  {
  this.button_name = 'View more';
  this.more = 'false' ; 
  this.less = 'true' ; 
  console.log(' less in log ');
}

}
}
