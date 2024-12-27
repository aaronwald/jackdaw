import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { StoreModule } from '@ngrx/store';
import { rookReducer } from './rook.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
      importProvidersFrom(StoreModule.forRoot({ count: rookReducer })),
      provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes)]
};
