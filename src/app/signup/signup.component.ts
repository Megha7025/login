import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''
  };

  loginObj:any={
    userName:'',
    password:''
  };

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj={
      userName:'',
      email:'',
      password:''
    };
  }

  login(){
    debugger
    const isUserExist=this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('User Login successfully');
    }
    else{
      alert('Wrong credentials')
    }
  }

}
