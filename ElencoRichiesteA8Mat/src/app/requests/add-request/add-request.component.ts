import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Store, Address } from '../request-list/request-list.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent implements OnInit {
  form: FormGroup;  
  constructor(public dialogRef: MatDialogRef<AddRequestComponent>,
        @Inject(MAT_DIALOG_DATA)
       private formBuilder: FormBuilder) {
         this.form= new FormGroup({
            category: new FormControl(null), 
            name: new FormControl(null),
            rating: new FormControl(null),
            phone: new FormControl(null),    
            id: new FormControl(null),  
            street: new FormControl(null), 
            city: new FormControl(null),
            postalCode: new FormControl(null),
            region: new FormControl(null),
            country: new FormControl(null),                
          });          
        // this.form = this.formBuilder.group({
        //   surname: new FormControl(null), 
        //   name: new FormControl(null), 
        //   email: new FormControl(null),
        //   note: new FormControl(null),    
        //   position: new FormControl(null),       
        // });
       }

  ngOnInit() {
  }
  onCancel() {
    this.dialogRef.close();
  }

  onConfirm() {
    if (this.form.valid ) {      
      const obj = this.form.value as Store;
      var add = new Address();
      add.Street=this.form.value.street;
      add.City=this.form.value.city;
      add.PostalCode=this.form.value.postalCode;
      add.Region=this.form.value.region;
      add.Country=this.form.value.country;
      obj.Address=add;
      this.dialogRef.close(obj);
    }
  }
}
