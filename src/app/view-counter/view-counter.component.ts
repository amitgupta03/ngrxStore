import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../store/store.selector';
import { counterState } from '../store/store.state';

@Component({
  selector: 'app-view-counter',
  templateUrl: './view-counter.component.html',
  styleUrls: ['./view-counter.component.css']
})
export class ViewCounterComponent implements OnInit {
  counter: number;
  counter$: Observable<counterState>;

  constructor(private store : Store<{count: counterState}>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe(data =>{
     this.counter=data;
     console.log("this is counter")
    })

    //this.counter$ = this.store.select('count')
  }

}
