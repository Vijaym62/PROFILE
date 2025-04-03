import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileCardComponent } from "./components/profile-card/profile-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfileListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Profile Management App';
}
