import { Component, OnDestroy, OnInit } from '@angular/core';
import { RookService } from './rook.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { increment } from './rook.actions';
import { RookData } from './rook.model';
import { selectRook } from './rook.selector';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-root',
  providers: [RookService,],
  imports: [CommonModule, MatSlideToggleModule, MatToolbarModule, MatButtonModule, MatGridListModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'magenta' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  active = 1;

  title = 'jackdaw';
  private status$: Subscription;
  myValue: any;

  constructor(private rookService: RookService,
    private store: Store<{ rook: RookData }>) {

    this.status$ = Subscription.EMPTY;
  }

  ngOnInit() {
    var statusSubject = this.rookService.getStatus();
    this.status$ = statusSubject.subscribe({
      next: msg => {
        this.store.dispatch(increment());
      },
      error: err => console.log('error' + err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });

    this.rookService.checkEnabled().subscribe(config => {
      this.myValue = config.enabled;
    });
  }

  enable() {
    this.rookService.enable({ enabled: true }).subscribe(config => {
      console.log('Updated config uuid:', config.uuid);
      this.myValue = config.enabled;
    });
  }

  disable() {
    this.rookService.enable({ enabled: false }).subscribe(config => {
      console.log('Updated config uuid:', config.uuid);
      this.myValue = config.enabled;
    });
  }

  ngOnDestroy() {
    this.status$.unsubscribe();
  }
}
