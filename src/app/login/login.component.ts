import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  makForm: FormGroup = new FormGroup({
    employeeID1: new FormControl(''),
    employeeID2: new FormControl(''),
    employeeID3: new FormControl(''),
    employeeID4: new FormControl(''),
    employeePIN1: new FormControl(''),
    employeePIN2: new FormControl(''),
    employeePIN3: new FormControl(''),
    employeePIN4: new FormControl(''),
    employeePIN5: new FormControl(''),
    employeePIN6: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}
  submitted = false;
  ngOnInit() {
    this.makForm = this.fb.group({
      employeeID1: ['', [Validators.required, Validators.maxLength(1)]],
      employeeID2: ['', [Validators.required, Validators.maxLength(1)]],
      employeeID3: ['', [Validators.required, Validators.maxLength(1)]],
      employeeID4: ['', [Validators.required, Validators.maxLength(1)]],
      employeePIN1: ['', [Validators.required, Validators.maxLength(1)]],
      employeePIN2: ['', [Validators.required, Validators.maxLength(1)]],
      employeePIN3: ['', [Validators.required, Validators.maxLength(1)]],
      employeePIN4: ['', [Validators.required, Validators.maxLength(1)]],
      employeePIN5: ['', [Validators.required, Validators.maxLength(1)]],
      employeePIN6: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log('Valid?', this.makForm.valid); // true or false
    console.log('Emp1', this.makForm.value.employeeID1);
    console.log('Emp2', this.makForm.value.employeeID2);
    console.log('Emp3', this.makForm.value.employeeID3);
    console.log('Emp4', this.makForm.value.employeeID4);
    console.log('EmpPIN1', this.makForm.value.employeePIN1);
    console.log('EmpPIN2', this.makForm.value.employeePIN2);
    console.log('EmpPIN3', this.makForm.value.employeePIN3);
    console.log('EmpPIN4', this.makForm.value.employeePIN4);
    console.log('EmpPIN5', this.makForm.value.employeePIN5);
    console.log('EmpPIN6', this.makForm.value.employeePIN6);
  }
}
