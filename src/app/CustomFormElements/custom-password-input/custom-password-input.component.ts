import { Component, forwardRef, NgModule, OnInit } from '@angular/core';
import { FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { passwordValidator } from '../Validators/password-validator';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-custom-password-input',
  templateUrl: './custom-password-input.component.html',
  styleUrls: ['./custom-password-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomPasswordInputComponent),
    multi:true
  }]
})
export class CustomPasswordInputComponent implements OnInit, ControlValueAccessor {
  customPassInput = new FormControl('', [Validators.required, Validators.minLength(8), passwordValidator]);
  onChange:any;
  onTouch:any;

  public colorItem1:string = 'gray';
  public colorItem2:string = 'gray';
  public colorItem3:string = 'gray';

  public passVisibility:boolean = false;

  constructor() {
    
  }
  ngOnInit(){
    this.customPassInput.valueChanges.subscribe(val => {
      if(this.onChange) this.onChange(val)
    })
  }

  writeValue(value:string){
    this.customPassInput.setValue(value);
  }

  registerOnChange(fn:any){
    this.onChange = fn;
  }

  registerOnTouched(fn:any){
    this.onTouch = fn;
  }
  
  changePassVisibility():void{
    this.passVisibility = !this.passVisibility;
  }

  getColorsToProgressBar():void {
    const formControl:AbstractControl = this.customPassInput;

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
