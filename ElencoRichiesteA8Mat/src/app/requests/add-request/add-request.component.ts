import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Request } from '../request-list/request-list.component';
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
            surname: new FormControl(null), 
            name: new FormControl(null),
            email: new FormControl(null),
            note: new FormControl(null),    
            position: new FormControl(null),       
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
    if (this.form.valid) {
      const obj = this.form.value as Request;
      this.dialogRef.close(obj);
    }
  }
}
