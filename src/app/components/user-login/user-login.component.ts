import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  isActive = true;
  signupUsers: Users[] = [];
  registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
  })

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
})

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');

    if(localData != null) {
      this.signupUsers = JSON.parse(localData)
    }
  }

  onSignUp() {
    if(this.registerForm.invalid){
      alert('введите корректные данные')
    } else {
      this.signupUsers.push(this.registerForm.value);
      localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
      localStorage.setItem('isActive', JSON.stringify(this.isActive));
      this.router.navigate(['/posts'])
    }
  }

  onLogin() {
    const isUserExist = this.signupUsers.find(u => u.username == this.loginForm.value.username && u.password == this.loginForm.value.password);
    
    if(isUserExist != undefined){
      localStorage.setItem('isActive', JSON.stringify(this.isActive));
      this.router.navigate(['/posts'])
    } else {
      alert('пользователь не найден')
    }
  }
}
