import { Component, HostListener, OnInit } from '@angular/core';
import { SessionService } from './shared/services/session.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'britecore-analytics-new-hire';
  currentPage: string;
  previousPage: string;
  start: number; // we use start to calculate the time spent on each page

  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {
    this.start = Date.now();
    this.currentPage = this.router.url; // get the current url

    // this basically fires an event every time a route finishes navigating
    this.router.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        const duration = Date.now() - this.start;
        this.currentPage = data.url;

        if (this.previousPage) {
          this.sessionService.addPath(this.previousPage, duration);
        } else {
          this.sessionService.addPath(this.currentPage, duration);
        }
        this.start = Date.now();
        this.previousPage = this.currentPage;
      }
    });
  }

  // Closing the browser / exiting can skew analytics data, so we need to save the session whenever this happens
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    const duration = Date.now() - this.start;

    if (this.previousPage) {
      this.sessionService.addPath(this.previousPage, duration);
    } else {
      this.sessionService.addPath(this.currentPage, duration);
    }
    this.sessionService.setBouncePage(this.router.url);
    this.sessionService.saveSession();
  }
}
