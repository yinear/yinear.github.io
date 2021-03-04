import { combineReducers } from 'redux'
import counter, { CounterState } from "../../features/counter/counter.reducer";

export interface IRootState {
  readonly counter: CounterState;
}

export default combineReducers<IRootState>({
  counter,
})