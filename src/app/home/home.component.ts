import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardGroupComponent } from '../card-group/card-group.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent, CardGroupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  zensoWord = 'zenso';
}
