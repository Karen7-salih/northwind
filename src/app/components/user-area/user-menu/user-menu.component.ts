import { Component, inject } from '@angular/core';
import { UserStore } from '../../../storage/user-store';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-menu',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent {

  public userStore = inject(UserStore);
  private userService = inject(UserService)


  public logout() {
    this.userService.logout();
    alert("bye girll we hope to see you soon")

  }

}
