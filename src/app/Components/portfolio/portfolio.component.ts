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
      imageSource: 'assets/cs50-harvard.png',
      tags: [
        { text: 'C', color: 'purple' },
        { text: 'Python', color: 'purple' },
        { text: 'HTML', color: 'orange' },
        { text: 'CSS', color: 'blue' },
        { text: 'JavaScript', color: '#f7df1e' },
        { text: 'SQL', color: 'green' },
      ],
      title: 'Harvard CS50',
      description: 'I am in the middle of completing the Harvard CS50 course. This course is an introduction to computer science and the art of programming. The course is taught in C, but I have been completing the problem sets in C# and ASP.NET. I have been learning a lot about algorithms, data structures, and web development.',
      link: 'https://github.com/ChimpChonk/CS50'
    },
    {
      imageSource: 'assets/website.PNG',
      tags: [
        { text: 'Angular', color: '#c3002f' },
        { text: 'HTML', color: 'orange' },
        { text: 'CSS', color: 'blue' },
        { text: 'TypeScript', color: 'blue' },
      ],
      title: 'sanjit-dev.me',
      description: 'This is my personal website. I built this website using Angular. I have been using this website as a way to showcase my work and to practice my web development skills.',
      link: 'https://github.com/ChimpChonk/portfolioSite'
    },
    {
      imageSource: 'assets/github-logo.jpg',
      tags: [
        { text: 'C#', color: 'purple' },
        { text: 'ASP.NET', color: 'purple' },
        { text: 'HTML', color: 'orange' },
        { text: 'CSS', color: 'blue' },
        { text: 'TypeScript', color: 'blue' },
        { text: 'SQL', color: 'green' },
      ],
      title: 'Other Projects',
      description: 'I have many other projects that I have worked on while learning programming. I have experience with C#, ASP.NET, Angular, HTML, CSS, TypeScript, and SQL. I have experience with web development, desktop applications, and database management. I am always looking for new projects to work on and new technologies to learn.',
      link: 'https://github.com/ChimpChonk?tab=repositories'
    }
  ];
}
