import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  obj:any
  submit(form:NgForm){
    this.obj = form.value.name
    console.log(form.value);
    form.reset();
  }
}
