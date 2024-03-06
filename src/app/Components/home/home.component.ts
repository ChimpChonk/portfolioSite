import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { CvComponent } from '../cv/cv.component';
import { AppComponent } from '../../app.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    CvComponent,
    TranslateModule, 
    AppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [TranslateModule]
})
export class HomeComponent {
    ngOnInit() {
      AOS.init();
    }
}