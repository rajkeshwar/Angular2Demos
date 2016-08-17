// Imports
import { provideRouter, RouterConfig } from '@angular/router';

import { DogListComponent }    from './dog-list.component';
import { DogDetailsComponent }    from './dog-details.component';

// Route Configuration
export const DogRoutes: RouterConfig = [
  { path: 'dogs', component: DogListComponent },
  { path: 'dogs/:id', component: DogDetailsComponent }
];