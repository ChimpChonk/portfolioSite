import { Component, HostListener, ElementRef } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {

  ngOnInit() {
    AOS.init();
  }
}
