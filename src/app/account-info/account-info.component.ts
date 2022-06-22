import { Component, Input, OnInit } from '@angular/core';
import { accountMock } from '../mockups/account.mock';
import { Account, Address, Contact, Department } from '../models/account.model';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  account: Account = accountMock ;
 // address : Address = accountMock; 
calling = ''; 
  constructor() { }
  ngOnInit(): void {

   }

  addressfunc() : any {
    console.log (' In address ');
   // console.log ( this.address1 );
   this.calling = 'addressCalled';
  }
  dept () : any {
    console.log (' In department ');
    this.calling = 'deptCalled';

  }
  cont () : any {
    console.log (' In contact ');
    this.calling = 'contCalled';


  }

}
