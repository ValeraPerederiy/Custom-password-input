import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(control : AbstractControl):ValidationErrors | null{
   

    let strength = 0;
    if (control.value.match(/[a-z]+/i)){
        strength += 1;
    }
    if (control.value.match(/[0-9]+/)){
        strength += 1;
    }
    if (control.value.match(/[$@#&!]+/)){
        strength += 1;
    }

    if(strength === 3)return null
    else return {'strengthOfPass': strength}

}