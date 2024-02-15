import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { CvComponent } from '../cv/cv.component';
import AOS from 'aos';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    CvComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    ngOnInit() {
      AOS.init();
    }
}