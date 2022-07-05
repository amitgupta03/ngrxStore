import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule, StoreRootModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './store/store.reducer';
import { ActionCounterComponent } from './action-counter/action-counter.component';
import { ViewCounterComponent } from './view-counter/view-counter.component';
import { CustomCounterComponent } from './custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ActionCounterComponent,
    ViewCounterComponent,
    CustomCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({count: counterReducer}), // this is to initialize the store
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
