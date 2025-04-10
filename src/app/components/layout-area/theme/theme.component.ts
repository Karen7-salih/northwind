import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-theme',
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {

  public themeService = inject(ThemeService);

  public toggleTheme(){
    this.themeService.toggleTheme();
  }

}
