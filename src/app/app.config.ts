import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { StoreModule, provideStore } from '@ngrx/store';
import { rookReducer } from './rook.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
      importProvidersFrom(StoreModule.forRoot({ rook: rookReducer })),
      // provideStore({ rook: rookReducer }),
      provideStoreDevtools({
        maxAge: 25, // Retains last 25 states
        logOnly: !environment.production, // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      }),
      provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes)]
};
