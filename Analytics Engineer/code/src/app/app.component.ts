import { Component, HostListener, OnInit } from '@angular/core';
import { SessionService } from './shared/services/session.service';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../environments/environment';


declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    if (environment.production) {

      // this basically fires an event every time a route finishes navigating
      this.router.events.subscribe( event => {

        if (event instanceof NavigationEnd) {
          this.fireGoogleAnalyticsPageTracking( event.urlAfterRedirects );
        }
      });
    }
  }

  private fireGoogleAnalyticsPageTracking(path: string): void {
    gtag('config', 'UA-43652404-4',
      {
        page_path: path
      }
    );
  }
}
