import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RookService } from './rook.service';
import { Subscription } from 'rxjs';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [RookService],
  imports: [NgbNavModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  active = 1;

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
