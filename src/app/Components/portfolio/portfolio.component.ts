import { Component, Input, OnInit, input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardData } from '../../interface/interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CardComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: [TranslateService]
})
export class PortfolioComponent implements OnInit{

  ngOnInit() {
    this.currentLang = "en";
  }

  @Input() currentLang?: string;
  constructor(public translate: TranslateService) {
  }


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
      description: 'I am in the middle of completing the Harvard CS50 course. This course is an introduction to computer science and the art of programming. The course is taught in C, but I have been completing the problem sets in  C, JavaScript and Python. I have been learning a lot about algorithms, data structures, and web development.',
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

  cardDataDa: CardData[] = [
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
      description: 'Mealplanner er en webapplikation, der giver brugerne mulighed for at planlægge deres måltider for ugen. Brugere kan tilføje, redigere og slette måltider fra deres madplan. Applikationen har også en funktion, der genererer en indkøbsliste baseret på de måltider, de har planlagt.',
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
      description: 'Jeg er midt i at gennemføre Harvard CS50-kurset. Dette kursus er en introduktion til datalogi og kunsten at programmere. Kurset undervises i C, men jeg har færdiggjort opgavesættene i C, JavaScript og Python. Jeg har lært meget om algoritmer, datastrukturer og webudvikling.',
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
      description: 'Dette er min personlige hjemmeside. Jeg byggede denne hjemmeside ved hjælp af Angular. Jeg har brugt denne hjemmeside som en måde at fremvise mit arbejde og til at øve mine webudviklingsevner.',
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
      title: 'Andre projekter',
      description: 'Jeg har mange andre projekter, som jeg har arbejdet på, mens jeg har lært programmering. Jeg har erfaring med C#, ASP.NET, Angular, HTML, CSS, TypeScript og SQL. Jeg har erfaring med webudvikling, desktop-applikationer og databasestyring. Jeg leder altid efter nye projekter at arbejde på og nye teknologier at lære.',
      link: 'https://github.com/ChimpChonk?tab=repositories'
    }
  ];
}
