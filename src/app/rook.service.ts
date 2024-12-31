// import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { environment } from '../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
export class RookService {
  constructor() { 
  }

  getStatus() {
    // var statusSubject = webSocket<any>('ws://127.0.0.1:8080/ws');
    var statusSubject = webSocket<any>(environment.rookUrl);
    return statusSubject;
  }
}
