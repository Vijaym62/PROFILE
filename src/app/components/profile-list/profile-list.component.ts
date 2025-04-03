import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { Profile } from '../../profile-model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ProfileMapComponent } from '../profile-map/profile-map.component';
import { ProfileService } from '../../profile.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatFormFieldModule, MatSelectModule,
    MatCardModule, MatButtonModule, ProfileCardComponent, ProfileMapComponent,
    RouterModule // Added for navigation
  ],
  templateUrl: './profile-list.component.html',
})
export class ProfileListComponent implements OnInit {
  searchTerm: string = '';
  sortOrder: string = '';
  selectedProfile: Profile | null = null;
  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profiles = this.profileService.getAllProfiles();
  }

  sortedProfiles(): Profile[] {
    let profiles = this.profiles.filter(profile =>
      profile.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.sortOrder === 'asc') {
      return profiles.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortOrder === 'desc') {
      return profiles.sort((a, b) => b.name.localeCompare(a.name));
    }
    return profiles;
  }

  showMap(profile: Profile) {
    this.selectedProfile = profile;
  }
}
