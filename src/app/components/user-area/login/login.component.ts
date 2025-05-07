import { Component } from '@angular/core';
import { CredentialsModel } from '../../../models/credentials.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public credentials = new CredentialsModel();


public constructor(private userService: UserService, private router: Router) {}
    public async send() {
        try {
            await this.userService.login(this.credentials);
            alert("Welcome Back!");
            this.router.navigate(["/home"]);
        }
        catch(err: any) {
            alert(err.message);
        }
    }
  }

