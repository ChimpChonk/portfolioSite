import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { CardData } from '../../interface/interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardData!: CardData;
}
