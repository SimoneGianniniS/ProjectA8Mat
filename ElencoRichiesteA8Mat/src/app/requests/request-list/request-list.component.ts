import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
export interface Request {
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
  dataSource;
  displayedColumns: string[]; 
  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['position', 'name', 'surname', 'email', 'note'];
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

}
