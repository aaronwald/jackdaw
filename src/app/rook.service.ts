// import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnableSound, EnableSoundResponse } from './rook.model';

@Injectable({
  providedIn: 'root'
})
export class RookService {
  constructor(private http: HttpClient) {
  }

  getStatus() {
    // var statusSubject = webSocket<any>('ws://127.0.0.1:8080/ws');
    var statusSubject = webSocket<any>(environment.rookWsUrl);
    return statusSubject;
  }

  enable(e: EnableSound) {
    return this.http.post<EnableSoundResponse>(environment.rookStaticUrl + '/enable', e);

    // .subscribe(config => {
    //   console.log('Updated config:', config);
    // });
  }


  checkEnabled() {
    return this.http.get<EnableSoundResponse>(environment.rookStaticUrl + '/check_enabled');
  }
}
