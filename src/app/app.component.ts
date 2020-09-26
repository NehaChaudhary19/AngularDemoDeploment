import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';
import countries from './countries.json';
import { CryptoService } from './crypto.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from './user.service';
import { IUser } from './IUser';
import { Observable } from 'rxjs';
import { AppChildComponent } from './app-child/app-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  protected title = 'app';
  public users$: Observable<IUser[]>;

  message : string = "I am the Parent Componemt";
  childmessage : string = "I am passed from the Parent Component to the child component"

  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }
}
  
//   angForm: FormGroup;
//   constructor(private fb: FormBuilder) {
//    this.createForm();
//  }
//   createForm() {
//    this.angForm = this.fb.group({
//       name: ['', Validators.required ],
//       address: ['', Validators.required ]
//    });
//   }


  //   user: User; 
  //   ngOnInit() {      
  //   this.user = {
  //   name: '',
  //   address: {
  //   street: '',
  //   postcode: '8000'
  //   }
  //   };
  //   }
  //   save(model: User, isValid: boolean) 
  //   {
  //   console.log(model, isValid);
  //   } 

  // title = 'testproject';
  // name:string;
  // math:number;
  // eng:number;
  // sci:number;
  // t:number;
  // p:number;
  // g:number;
  // f:any;

  // Cal(){
  //  this.t=this.math+this.eng+this.sci;
  //  this.p=(this.t)/3;
  //  this.g= Math.max(this.math,this.eng,this.sci);
  //  this.f=678;
  // }
  
  // products : any[]= [{
  //   ID:"101",
  //   Name: "Silicone Kitchenware Set",
  //   url:'assets/img1.jpg'
  // },
  //   {
  //     ID:"102",
  //     Name: "Ceramic Storage Jar",
  //     url:'assets/img2.jpg'
  //   } ,
    
  //     {
  //       ID:"103",
  //       Name: "Handmade ceramic pot",
  //       url:'assets/img3.jpg'
  //     },
  //     ];
  




