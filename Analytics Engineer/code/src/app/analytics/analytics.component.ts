import { Component, OnInit } from '@angular/core';
import { ISession, SessionService } from '../shared/services/session.service';
import { AnalyticsService } from '../shared/services/analytics.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  sessions: ISession[];
  session: ISession;
  averageSessionDuration: number;
  bounceRate: number;
  totalSessions: number;
  pagesPerSession: number;
  pageViews: any;

  constructor(private sessionService: SessionService,
              private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.session = this.sessionService.getSession();
    this.sessions = this.sessionService.getSessions();
    this.averageSessionDuration = this.analyticsService.getAverageSessionDuration();
    this.bounceRate = this.analyticsService.getBounceRate();
    this.totalSessions = this.sessions.length;
    this.pagesPerSession = this.analyticsService.getPagesPerSession();
    this.pageViews = this.analyticsService.getPageViews();
  }
}
