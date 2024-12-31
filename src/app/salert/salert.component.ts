import { Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../rook.actions';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RookData } from '../rook.model';
import { selectRook } from '../rook.selector';

@Component({
  selector: 'app-salert',
  imports: [NgbAlertModule, CommonModule],
  standalone: true,
  templateUrl: './salert.component.html',
  styleUrl: './salert.component.css'
})
export class SalertComponent implements OnInit {
  count$: Observable<RookData>

  constructor(private store: Store<{ rook: RookData }>) {
    this.count$ = store.select(selectRook);
  }

  ngOnInit() {
    this.count$.subscribe(data => {
      console.log("testb + " + data.message_count);
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
