import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RookService } from './app/rook.service';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
