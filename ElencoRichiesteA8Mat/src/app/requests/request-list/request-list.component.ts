import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog} from '@angular/material'; 
import { from } from 'rxjs';
import { AddRequestComponent } from '../add-request/add-request.component';
import { Key } from 'protractor';
import { ApiService } from 'src/app/api.service';

export class Store {
  Id:string
  Name: string;
  Category: string;
  Rating: number;
  Phone: string;
  Address: Address;
}

export class Address {
  Street:string
  City: string;
  PostalCode: string;
  Region: string;
  Country: string;  
}

// const ELEMENT_DATA: Store[] = [
//   {Id:'1',Rating: 1, Name: 'Roberto', Category: 'Rossi', Phone: 'robero.rossi@mail.com', Address: {Street: 'via plutone', City:'paperopoli', PostalCode:'123454', Region:'clondake', Country:'disney'}},
//   {Id:'2', Rating: 2, Name: 'Roberta', Category: 'Rossi', Phone: 'roberta.rossi@mail.com', Address: {Street: 'via plutone', City:'paperopoli', PostalCode:'123454', Region:'clondake', Country:'disney'}},
//   {Id:'3', Rating: 3, Name: 'Carlo', Category: 'Meucci', Phone: 'carlo.meucci@mail.com', Address: {Street: 'via plutone', City:'paperopoli', PostalCode:'123454', Region:'clondake', Country:'disney'}},
//   {Id:'4',Rating: 4, Name: 'Federico', Category: 'Munich', Phone: 'federico.munich@mail.com', Address: {Street: 'via plutone', City:'paperopoli', PostalCode:'123454', Region:'clondake', Country:'disney'}}  
// ];

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  requestData:MatTableDataSource<Store>;
  displayedColumns: string[]; 
  stores: any = [];
  constructor(   private api: ApiService, private matDialog: MatDialog,) { }

  ngOnInit() {
    this.displayedColumns = ['Id', 'Name', 'Category', 'Rating', 'Phone'];
    //this.updatetable();
    this.getStores();
    var data = this.stores.sort((a,b) => a.Rating - b.Rating);
    this.requestData = new MatTableDataSource<Store>(data);
  }

  // newRequest(){
  //   this.matDialog
  //     .open(AddRequestComponent, {
  //       disableClose: true,
  //       minWidth:'500px',        
  //       data: {  },
  //     })
  //     .afterClosed()
  //     .subscribe((request: Store) => {       
  //       if(request){          
  //         var key = 1
  //         if(sessionStorage.length > 0){
  //             key=sessionStorage.length +1;
  //       }
  //       sessionStorage.setItem(key.toString(), JSON.stringify(request));        
  //       ELEMENT_DATA.push(request);
  //       var data = ELEMENT_DATA.sort((a,b) => a.Rating - b.Rating);
  //       this.requestData = new MatTableDataSource<Store>(data);}
  //     });

  // }

  // updatetable(){       
  //   for(var i=0; i < sessionStorage.length; i++){
  //     let key = sessionStorage.key(i);
  //     var item = JSON.parse(sessionStorage.getItem(key));
  //     ELEMENT_DATA.push(item);
  //   }
  // }

  getStores() {
    this.api.getStore()
      .subscribe(data => {
        debugger;       

        // for (const d of (data as any)) {
        //   this.stores.push(d);
        // }
        
       });  
      }
  
}
