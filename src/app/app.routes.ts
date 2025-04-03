// import { Routes } from '@angular/router';
// import { ProfileListComponent } from './components/profile-list/profile-list.component';
// import { ProfileDetailComponent } from './components/profile-details/profile-details.component';

// export const routes: Routes = [
//   { path: '', component: ProfileListComponent },
//   { path: 'profile/:id', component: ProfileDetailComponent },
// ];

import { Routes } from '@angular/router';
import { ProfileListComponent } from './components/profile-list/profile-list.component';
import { ProfileDetailComponent } from './components/profile-details/profile-details.component';

export const routes: Routes = [
  { path: '', component: ProfileListComponent },
  { path: 'profile/:id', component: ProfileDetailComponent }
];
