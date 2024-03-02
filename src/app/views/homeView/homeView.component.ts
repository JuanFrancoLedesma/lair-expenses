import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './homeView.component.html',
  styleUrl: './homeView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeViewComponent { }
