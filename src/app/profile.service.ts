import { Injectable } from '@angular/core';
import { Profile } from './profile-model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [
    { id: 1, name: 'Ranchana', image: 'assets/img1.jpg', description: 'Graphic Designer', address: 'Pune, India' },
    { id: 2, name: 'Rajesh', image: 'assets/img2.png', description: 'UX Designer', address: 'Pune, India' },
    { id: 3, name: 'Rahul', image: 'assets/img3.jpeg', description: 'Software Developer', address: 'Mumbai, India' }
  ];

  constructor() {}

  /** ✅ Get all profiles */
  getAllProfiles(): Profile[] {
    return [...this.profiles]; // Return a copy to avoid unintended mutations
  }

  
  /** Get profile by ID */
getProfileById(id: number): Profile {
  return this.profiles.find(profile => profile.id === id) || { 
    id: 0, 
    name: 'Unknown', 
    image: '', 
    description: 'No description available', 
    address: 'Not provided',
    latitude: 0,  // ✅ Default latitude
    longitude: 0  // ✅ Default longitude
  };
}


  /** ✅ Add a new profile */
  addProfile(profile: Omit<Profile, 'id'>): void {
    const newId = this.profiles.length > 0 ? Math.max(...this.profiles.map(p => p.id)) + 1 : 1;
    const newProfile: Profile = { id: newId, ...profile };
    this.profiles.push(newProfile);
  }

  /** ✅ Update an existing profile */
  updateProfile(updatedProfile: Profile): void {
    const index = this.profiles.findIndex(p => p.id === updatedProfile.id);
    if (index !== -1) {
      this.profiles[index] = { ...updatedProfile }; // Prevent direct mutation
    }
  }

  /** ✅ Delete a profile by ID */
  deleteProfile(id: number): void {
    this.profiles = this.profiles.filter(profile => profile.id !== id);
  }
}
