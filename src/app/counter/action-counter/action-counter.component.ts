import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset, showMsg } from '../../store/store.action';
import { counterState } from '../../store/store.state';

@Component({
  selector: 'app-action-counter',
  templateUrl: './action-counter.component.html',
  styleUrls: ['./action-counter.component.css']
})
export class ActionCounterComponent implements OnInit {

  constructor(private store : Store<{count: counterState}>) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment())
  }

  
  onDecrement(){
    this.store.dispatch(decrement())
  }

  
  onReset(){
    this.store.dispatch(reset())
  }

  onShowMeg() {
    this.store.dispatch(showMsg({msg : "this msg pass as an argumant"}))
  }

}
