import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-le-header',
  standalone: true,
  imports: [
    MatSlideToggleModule,
  ],
  templateUrl: './le-header.component.html',
  styleUrl: './le-header.component.css'
})
export class LeHeaderComponent {

}
