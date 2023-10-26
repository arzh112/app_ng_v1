import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { IToken } from '../interfaces/IToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  feedback: string = "";

  constructor(private authService: AuthService) {}

  public form:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  handleSubmit(){
    this.authService.login(this.form.value).subscribe( {
      next:(token: IToken) =>{this.authService.saveToken(token.token)},
      error:(error) => this.feedback = 'Mauvais mot de passe / email'
    });
  }
}
