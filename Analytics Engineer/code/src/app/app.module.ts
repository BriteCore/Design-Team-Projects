import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ToFixed2Pipe } from './shared/pipes/to-fixed-2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    ToFixed2Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
