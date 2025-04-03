import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Profile } from '../../profile-model';
import { ProfileService } from '../../profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './profile-details.component.html',
})
export class ProfileDetailComponent implements OnInit {
  profile: Profile | null = null; // Changed to null explicitly

  constructor(private route: ActivatedRoute, private profileService: ProfileService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundProfile = this.profileService.getProfileById(id);

    if (foundProfile && foundProfile.id !== 0) { 
      this.profile = foundProfile;
    } else {
      this.profile = null; // Now valid because we allowed null in type
      console.error("Profile not found");
    }
  }
}
