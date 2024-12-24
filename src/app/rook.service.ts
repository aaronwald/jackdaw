// import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

// @Injectable({
//   providedIn: 'root'
// })
export class RookService {

  constructor() { 
    console.log('rook service');
  }

  getStatus() {
    var statusSubject = webSocket('ws://127.0.0.1:8080/ws');
    return statusSubject;
   
  }
}
