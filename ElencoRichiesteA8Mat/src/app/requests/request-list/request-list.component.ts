import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog} from '@angular/material'; 
import { from } from 'rxjs';
import { AddRequestComponent } from '../add-request/add-request.component';
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
    this.requestData = new MatTableDataSource<Request>(ELEMENT_DATA);
  }

  newRequest(){
    this.matDialog
      .open(AddRequestComponent, {
        disableClose: true,
        maxWidth: '900px',
        data: {  },
      })
      .afterClosed()
      .subscribe((request: Request) => {       
        if(request){
        ELEMENT_DATA.push(request);
        this.requestData = new MatTableDataSource<Request>(ELEMENT_DATA);}
      });

  }
}
