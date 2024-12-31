import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './rook.actions';
import { RookData } from './rook.model';  

export const initialState: RookData = {
  message_count: 0
};

export const rookReducer = createReducer(
  initialState,
  on(increment, state => (
    console.log("incrementing" + state.message_count),
    { message_count: state.message_count + 1 })),
  on(decrement, state => ({ message_count: state.message_count - 1 })),
  on(reset, state => ({ message_count: 0 }))
);
