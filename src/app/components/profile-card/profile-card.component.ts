import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile } from '../../profile-model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'] // ✅ Corrected `styleUrls`
})
export class ProfileCardComponent {
  @Input() profile!: Profile;

  constructor(private router: Router) {}

  viewProfile() {
    if (this.profile?.id) {
      this.router.navigate(['/profile', this.profile.id]); // ✅ Ensures profile.id exists before navigating
    }
  }
}
