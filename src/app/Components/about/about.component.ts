import { Component, HostListener, ElementRef } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TranslateModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers: [TranslateService]
})
export class AboutComponent {

  ngOnInit() {
    AOS.init();
  }
}
