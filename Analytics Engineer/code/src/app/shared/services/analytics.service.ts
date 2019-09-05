import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  totalSessions: number;
  averageSessionDuration: number;
  bounceRate: number;
  pagesPerSession: number;
  pageViews: any;

  constructor(private sessionService: SessionService) {
    this.totalSessions = this.sessionService.getSessions().length;
    this.averageSessionDuration = this.calculateAverageSessionDuration();
    this.bounceRate = this.calculateBounceRate();
    this.pagesPerSession = this.calculatePagesPerSession();
    this.pageViews = this.buildPageViewsObject();
  }

  private calculateAverageSessionDuration(): number {
    let duration = 0;
    this.sessionService.getSessions().forEach(session => {
      duration += session.duration;
    });
    return duration / this.totalSessions;
  }

  private calculateBounceRate() {
    let bouncedPages = 0;
    this.sessionService.getSessions().forEach(session => {
      if (session.paths.length === 1) {
        bouncedPages++;
      }
    });
    return bouncedPages / this.totalSessions;
  }

  private calculatePagesPerSession() {
    let pages = 0;
    this.sessionService.getSessions().forEach(session => {
      pages += session.paths.length;
    });
    return pages / this.totalSessions;
  }

  private buildPageViewsObject(): any {
    const obj = {};
    this.sessionService.getSessions().forEach(session => {
      session.paths.forEach(path => {
        console.log(path);
        if (obj[path.path]) {
          obj[path.path].pageViews += 1;
          obj[path.path].duration += path.duration;
        } else {
          obj[path.path] = {
            pageViews: 1,
            duration: path.duration
          };
        }
      });
    });
    return obj;
  }

  public getPageViews(): any {
    return this.pageViews;
  }

  public getAverageSessionDuration(): number {
    return this.averageSessionDuration;
  }

  public getBounceRate(): number {
    return this.bounceRate;
  }

  public getPagesPerSession(): number {
    return this.pagesPerSession;
}
}
