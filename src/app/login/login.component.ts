import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  authService:  AuthService, private fb: FormBuilder) { }

  form = this.fb.group({
    'username': 'chris',
    'email': 'chris@test.com',
    'password': 'password'
  })

  faFacebookF = faFacebookF;
  faGoogle = faGoogle;
  faTwitter = faTwitter;

  username = "chris";
  password = "password";
  email = "chris@test.com";

  signIn = false;

  ngOnInit() {
  }

}
