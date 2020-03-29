import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = new FormGroup({

    FirstName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
    LastName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
  });
  isboolean=true;
  isboolean1=true;
  isboolean2=true;
  display(){
    this.isboolean = false;
  }
  display1(){
    this.isboolean = false;
    this.isboolean1=false;
  }
  display2(){
    this.isboolean=false;
    this.isboolean2 = false;
  }
}