import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  feedback: string = "";

  constructor(private authService: AuthService) {}

  public form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  handleSubmit() {
    if (this.form.valid) {
      this.authService.add(this.form.value).subscribe({
        complete:() => { this.feedback = 'Inscription terminée.'; },
        error:() => this.feedback = "L'utilisateur éxiste déja."
      })
    }
  }
}
