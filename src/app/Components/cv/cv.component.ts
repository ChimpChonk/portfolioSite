import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [TranslateService]
})
export class CvComponent {

}
