import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardData } from '../../interface/interface';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent{
  cardData: CardData[] = [
    {
      imageSource: 'assets/mealPlanner/mealplanner_logo.PNG',
      tags: [
        { text: 'C#', color: 'purple' },
        { text: 'ASP.NET', color: 'purple' },
        { text: 'Angular', color: '#c3002f' },
        { text: 'HTML', color: 'orange' },
        { text: 'CSS', color: 'blue' },
        { text: 'TypeScript', color: 'blue' },
        { text: 'SQL', color: 'green' },
      ],
      title: 'Meal Planner',
      description: 'Mealplanner is a web application that allows users to plan their meals for the week. Users can add, edit, and delete meals from their meal plan. The application also has a feature that generate a shopping list based on the meals they have planned',
      link: 'https://github.com/ChimpChonk/P3AngularMealPlanner'
    },
    {
      imageSource: 'assets/fake_tinder_logo.PNG',
      tags: [
        { text: 'C#', color: 'blue' },
        { text: '.NET Blazor', color: 'purple' },
        { text: 'SQL', color: 'green' },
      ],
      title: 'Fake Tinder',
      description: 'Fake Tinder is a web application that was created using Blazor. The application allows users to create a profile, view other profiles, and like or dislike other profiles. The application also has a feature that allows users to view their matches.',
      link: 'https://github.com/ChimpChonk/FakeTinder'
    },
    {
      imageSource: 'assets/rock_paper_scissors_logo.PNG',
      tags: [
        { text: 'C#', color: 'purple' },
        { text: 'ASP.NET', color: 'purple' },
        { text: 'HTML', color: 'orange' },
        { text: 'CSS', color: 'blue' },
        { text: 'TypeScript', color: 'blue' },
      ],
      title: 'Rock Paper Scissors',
      description: 'Rock Paper Scissors is a web application that allows users to play the classic game of Rock Paper Scissors. The application also has a feature that keeps track of the users win/loss record.',
      link: ''
    },
  ];
}
