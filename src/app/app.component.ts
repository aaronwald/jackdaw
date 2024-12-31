import { Component, OnDestroy, OnInit } from '@angular/core';
import { RookService } from './rook.service';
import { Subscription } from 'rxjs';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { increment  } from './rook.actions';
import { RookData } from './rook.model';
import { selectRook } from './rook.selector';
import { SalertComponent } from './salert/salert.component';

@Component({
  selector: 'app-root',
  providers: [RookService, ],
  imports: [NgbNavModule, CommonModule, SalertComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  active = 1;

  title = 'jackdaw';
  private status$: Subscription;
  myValue: any;

  constructor (private rookService: RookService,
    private store: Store<{ rook: RookData }>) {

    this.status$ = Subscription.EMPTY;
  }

  ngOnInit() {
    this.store.select(selectRook).subscribe(data => {
      console.log("testa + " + data.message_count);
    });
    var statusSubject = this.rookService.getStatus();
    this.status$ = statusSubject.subscribe({
      next: msg => {
        this.myValue = msg['message_count'];
        console.log('message_count: ' + msg['message_count']);
        this.store.dispatch(increment());
      }, 
      error: err => console.log('error' + err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
     });
  }

  ngOnDestroy() {
    this.status$.unsubscribe();
  }
}
