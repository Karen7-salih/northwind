import { Component } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public user = new UserModel();
  public constructor(private userService: UserService, private router: Router) {}
  public async send() {
      try {
          await this.userService.register(this.user);
          alert("Welcome!");
          this.router.navigate(["/home"]);
      }
      catch(err: any) {
          alert(err.message);
      }
  }
}
