import 'core-js';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { App } from './app.ts';

bootstrap(App, [])
  .catch(err => console.error(err));