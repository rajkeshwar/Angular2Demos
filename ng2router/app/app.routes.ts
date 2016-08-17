// Imports
import { provideRouter, RouterConfig } from '@angular/router';

import { DogRoutes }    from './dogs/dog.routes';
import { CatRoutes }    from './cats/cat.routes';

// Route Configuration
export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dogs',
    pathMatch: 'full'
  },
  ...CatRoutes,
  ...DogRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
