import { Component } from '@angular/core';
import { ThemeComponent } from "../theme/theme.component";
import { UserMenuComponent } from "../../user-area/user-menu/user-menu.component";

@Component({
  selector: 'app-header',
  imports: [ThemeComponent, UserMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
