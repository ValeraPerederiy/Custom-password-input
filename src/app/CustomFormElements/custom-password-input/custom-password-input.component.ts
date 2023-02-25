import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../Validators/password-validator';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-custom-password-input',
  templateUrl: './custom-password-input.component.html',
  styleUrls: ['./custom-password-input.component.scss']
})
export class CustomPasswordInputComponent {
  public customForm: FormGroup;

  public colorItem1:string = 'gray';
  public colorItem2:string = 'gray';
  public colorItem3:string = 'gray';

  public passVisibility:boolean = false;

  constructor() {
    this.customForm = new FormGroup({
      'password': new FormControl('', 
      [
        Validators.required,
        Validators.minLength(8),
        passwordValidator
      ]),
    })
  }
  
  changePassVisibility():void{
    this.passVisibility = !this.passVisibility;
  }

  getColorsToProgressBar():void {
    const formControl:AbstractControl = this.customForm.controls['password'];
    console.log(formControl)
    let strengthOfPass:number = 0;
    
    if(formControl.errors){
      
      if(formControl.errors['minlength']){
          this.colorItem1 = 'red'
          this.colorItem2 = 'red'
          this.colorItem3 = 'red'
      }else{
        
        if(formControl.value === ''){
          this.colorItem1 = 'gray'
          this.colorItem2 = 'gray'
          this.colorItem3 = 'gray'
        }else{
          strengthOfPass = formControl.errors['strengthOfPass'];
        }
      }
    }else{
      this.colorItem1 = 'green'
      this.colorItem2 = 'green'
      this.colorItem3 = 'green'
    }
    
    if(strengthOfPass === 1){
      this.colorItem1 = 'red'
      this.colorItem2 = 'gray'
      this.colorItem3 = 'gray'
    }
    if(strengthOfPass === 2){
      this.colorItem1 = 'yellow'
      this.colorItem2 = 'yellow'
      this.colorItem3 = 'gray'
    }
  }

}
