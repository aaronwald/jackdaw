import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../rook.actions';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salert',
  imports: [NgbAlertModule, CommonModule],
  standalone: true,
  templateUrl: './salert.component.html',
  styleUrl: './salert.component.css'
})
export class SalertComponent {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
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
