// This is a mock database service that uses local storage to save/get values

import { Injectable } from '@angular/core';
import { ISession } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() {
    // initialize mock DB service with defaults if new
    if (!this.getSessions()) {
      localStorage.setItem('sessions', JSON.stringify([]));
    }
  }

  public getSessions(): ISession[] {
    return JSON.parse(localStorage.getItem('sessions'));
  }

  public saveSession(session: ISession): void {
    const sessions = this.getSessions();
    sessions.push(session);
    localStorage.setItem('sessions', JSON.stringify(sessions));
  }
}
