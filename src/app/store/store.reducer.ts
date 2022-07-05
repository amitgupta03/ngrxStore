import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { addCustomValue, decrement, increment, reset, sendString, showMsg } from './store.action';
import { initState } from './store.state';

const _counterReducer = createReducer(
    initState,
    on(increment, (state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    }),
    on(decrement, (state) => {
      return {
        ...state,
        count: state.count - 1,
      };
    }),
    on(reset, (state) => {
      return {
        ...state,
        count: 0,
      };
    }),
    on(addCustomValue,(state,action) =>{
      return{
        ...state,
        count:state.count + action.count
      }
    }),
    on(sendString, (state) => {
      return {
        ...state,
        msg: "Welcome now you are PRO!!!",
      };
    }),
    on(showMsg,(state) => {
      return {
        ...state,
        msg: "Hey this is A Dispaly Message"
      }
    })
  );

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action)
}
