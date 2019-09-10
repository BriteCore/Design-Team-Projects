import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { interval } from 'rxjs';

export interface ISession {
  id: number; // the session ID
  duration: number; // the duration of the session (ends when user closes site)
  bouncePage: string; // the page the user left the application on
  paths: any[]; // the path the user took through the site (ex. / -> /hello -> /hello/world)
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  firstPageInitialized = false;
  session = {
    id: null,
    duration: null,
    bouncePage: null,
    paths: []
  };
  sessions: ISession[];

  constructor(private databaseService: DatabaseService) {
    this.session.id = Math.floor(Math.random() * 100000);
    this.startTimer();
  }

  public getSessions(): ISession[] {
    return this.databaseService.getSessions();
  }

  public getSession(): ISession {
    return this.session;
  }

  public saveSession(): void {
    this.databaseService.saveSession(this.session);
  }

  public setBouncePage(path): void {
    this.session.bouncePage = path;
  }

  public addPath(path, duration): void {
    if (this.firstPageInitialized) {
      this.session.paths.push({path, duration});
      return;
    }
    this.firstPageInitialized = true;
  }

  private startTimer(): void {
    interval(100).subscribe(val => {
      this.session.duration = val;
    });
  }
}
