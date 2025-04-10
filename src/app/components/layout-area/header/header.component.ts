import { Component } from '@angular/core';
import { ThemeComponent } from "../theme/theme.component";

@Component({
  selector: 'app-header',
  imports: [ThemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
