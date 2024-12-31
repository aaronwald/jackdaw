import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
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
export class SalertComponent implements OnInit, OnDestroy{
  messageCount: number;
  private subscription: Subscription;

  constructor(private store: Store<{ rook: RookData }>) {
    this.subscription = Subscription.EMPTY;
    this.messageCount = 0;
  }

  ngOnInit() {
    this.subscription = this.store.select(selectRook).subscribe(data => {
      this.messageCount = data.message_count;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
