import { Component, OnInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addCustomValue, sendString } from '../../store/store.action';
import { getMessage } from '../../store/store.selector';
import { counterState } from '../../store/store.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  constructor(private store: Store<counterState>) { }
  value=0;
  message
  ngOnInit(): void {
    this.store.select(getMessage).subscribe(data => {
      this.message=data;
      console.log("this is message")
    })
  }

  onCustomValue(){
    this.store.dispatch(addCustomValue({count : +this.value}));
    this.store.dispatch(sendString());
    this.value=0;
  }

}
