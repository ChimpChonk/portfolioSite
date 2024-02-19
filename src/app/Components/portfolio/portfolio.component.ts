import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent{
  images: string[] = [
    'assets/mealPlanner/mealplanner_1.PNG',
    'assets/mealPlanner/mealplanner_2.PNG',
    'assets/mealPlanner/mealplanner_3.PNG',
    'assets/mealPlanner/mealplanner_4.PNG',
    'assets/mealPlanner/mealplanner_5.PNG',
    'assets/mealPlanner/mealplanner_6.PNG',
    'assets/mealPlanner/mealplanner_7.PNG',
    'assets/mealPlanner/mealplanner_8.PNG'
  ];
  activeIndex: number = 0;

  constructor() {}

  // Define methods for controlling the carousel
  prevSlide() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.images.length - 1;
    }
  }

  nextSlide() {
    if (this.activeIndex < this.images.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }

  setActiveSlide(index: number) {
    this.activeIndex = index;
  }

}
