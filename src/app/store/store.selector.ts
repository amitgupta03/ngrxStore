import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./store.state";

const selectorState = createFeatureSelector<counterState>('count');

export const getCounter = createSelector(selectorState,state => {
    return state.count;
})

export const getMessage = createSelector(selectorState,state => {
    return state.msg;
})