import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog} from '@angular/material'; 
import { from } from 'rxjs';
import { AddRequestComponent } from '../add-request/add-request.component';
import { Key } from 'protractor';
export class Request {
  name: string;
  surname: string;
  position: number;
  email: string;
  note: string;
}

const ELEMENT_DATA: Request[] = [
  {position: 1, name: 'Roberto', surname: 'Rossi', email: 'robero.rossi@mail.com', note: 'richiesta adesione concorso'},
  {position: 2, name: 'Roberta', surname: 'Rossi', email: 'roberta.rossi@mail.com', note: 'richiesta 23'},
  {position: 3, name: 'Carlo', surname: 'Meucci', email: 'carlo.meucci@mail.com', note: 'richiesta carlo'},
  {position: 4, name: 'Federico', surname: 'Munich', email: 'federico.munich@mail.com', note: 'richiesta munich'}  
];

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  requestData:MatTableDataSource<Request>;
  displayedColumns: string[]; 
  constructor(    private matDialog: MatDialog,) { }

  ngOnInit() {
    this.displayedColumns = ['position', 'name', 'surname', 'email', 'note'];
    this.updatetable();
    var data = ELEMENT_DATA.sort((a,b) => a.position - b.position);
    this.requestData = new MatTableDataSource<Request>(data);
  }

  newRequest(){
    this.matDialog
      .open(AddRequestComponent, {
        disableClose: true,
        minWidth:'500px',        
        data: {  },
      })
      .afterClosed()
      .subscribe((request: Request) => {       
        if(request){          
          var key = 1
          if(sessionStorage.length > 0){
              key=sessionStorage.length +1;
        }
        sessionStorage.setItem(key.toString(), JSON.stringify(request));        
        ELEMENT_DATA.push(request);
        var data = ELEMENT_DATA.sort((a,b) => a.position - b.position);
        this.requestData = new MatTableDataSource<Request>(data);}
      });

  }

  updatetable(){       
    for(var i=0; i < sessionStorage.length; i++){
      let key = sessionStorage.key(i);
      var item = JSON.parse(sessionStorage.getItem(key));
      ELEMENT_DATA.push(item);
    }
  }
}
