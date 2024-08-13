import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./domain/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent],
  template: '<router-outlet/>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolioLeydiMadrid';
}
