import { Component, OnInit, VERSION } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ){

  }

 ngOnInit() {
  this.myForm = this.fb.group({
    UserName: ['', Validators.required],
    Password: ['', Validators.required],
  });

 }

 onSubmit(form: FormGroup){
  console.log('Valid?', form.valid); // true or false
  console.log('Name', form.value.name);
  console.log('Email', form.value.email);
  console.log('Message', form.value.message);
 }

}
