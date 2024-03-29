import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { CvComponent } from '../cv/cv.component';
import { AppComponent } from '../../app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
  providers: [TranslateService]
})
export class HomeComponent implements OnInit{
    ngOnInit() {
      AOS.init();
    }

    cLang?: string;

    constructor(public translate: TranslateService){
      translate.addLangs(["en", "da"]);
      translate.setDefaultLang('en');
    }
    isDropdownOpen: boolean = false;

    dropdown(): void{
      this.isDropdownOpen = !this.isDropdownOpen;

    }
    switchLang(lang: string) {
        this.translate.use(lang);
        this.cLang = lang;
    }
}