import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RookService } from './rook.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [RookService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'jackdaw';
  private status$: Subscription;
  myValue: any;

  constructor (private rookService: RookService) {
    this.status$ = Subscription.EMPTY;
  }
  
  ngOnInit() {
    var statusSubject = this.rookService.getStatus();
    this.status$ = statusSubject.subscribe({
      next: msg => {
        // const parsedMsg = JSON.parse(msg);
        // var obj = JSON.parse(JSON.stringify(msg));
        // console.log('message received: ' + obj);
        this.myValue = msg['message_count'];
      }, 
      error: err => console.log('error' + err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
     });
  }

  ngOnDestroy() {
    this.status$.unsubscribe();
  }
}
