import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customPassInput';
  public customForm: FormGroup;

  constructor(){
    this.customForm = new FormGroup({
      'password': new FormControl('')
    })

    this.customForm.controls['password'].valueChanges.subscribe(val=> console.log(val))
  }
}
