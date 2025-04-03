import { Component, Input } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { Profile } from '../../profile-model';

@Component({
  selector: 'app-profile-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './profile-map.component.html',
  styleUrl: './profile-map.component.scss'
})
export class ProfileMapComponent {
  @Input() profile: Profile = {
    id: 0,
    name: '',
    image: '',
    description: '',
    address: '',
    latitude: 0,  // ✅ Default latitude
    longitude: 0  // ✅ Default longitude
  };


  zoom: number = 12;

  get latitude() {
    return this.profile?.latitude || 0;
  }

  get longitude() {
    return this.profile?.longitude || 0;
  }
}