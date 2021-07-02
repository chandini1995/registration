import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  exportAs: 'ngForm'
})
export class PageComponent implements OnInit {
  firstName:string='baby';
  lastName:string='reddy';
  email:string='baby@gmail.com';
  password:string='1234';
  conformPassword:string='1234';
  constructor() {} 

  onSubmit(signupform:any){
    console.log(signupform.value)
  }
  
  ngOnInit(): void{}
  }
 
