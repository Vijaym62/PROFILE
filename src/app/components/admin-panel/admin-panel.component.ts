import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './admin-panel.component.html',
})
export class AdminPanelComponent {
  profiles = [
    { name: 'Ranchana', image: 'assets/img1.jpg', description: 'Graphic Designer', address: 'Pune, India' },
    { name: 'Rajesh', image: 'assets/img2.png', description: 'UX Designer', address: 'Pune, India' },
    { name: 'Rahul', image: 'assets/img3.jpeg', description: 'Software Developer', address: 'Mumbai, India' }
  ];

  profileForm: FormGroup;
  editingIndex: number | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  
  addProfile() {
    if (this.profileForm.valid) {
      this.profiles.push(this.profileForm.value);
      this.profileForm.reset();
    }
  }

  editProfile(index: number) {
    this.editingIndex = index;
    this.profileForm.patchValue(this.profiles[index]);
  }

  updateProfile() {
    if (this.editingIndex !== null && this.profileForm.valid) {
      this.profiles[this.editingIndex] = this.profileForm.value;
      this.editingIndex = null;
      this.profileForm.reset();
    }
  }

  deleteProfile(index: number) {
    this.profiles.splice(index, 1);
  }
}
