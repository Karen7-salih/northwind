import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CopyrightsComponent } from "../copyrights/copyrights.component";
import { MenuComponent } from "../menu/menu.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, CopyrightsComponent, MenuComponent , RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
