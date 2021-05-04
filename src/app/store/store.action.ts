import { createAction, props } from '@ngrx/store';

export const increment = createAction('incrementByOne');
export const decrement = createAction('decrementByOne');
export const reset = createAction('reset');
export const addCustomValue =createAction('customCounter',props<{count:number}>())
export const sendString = createAction('sendString');