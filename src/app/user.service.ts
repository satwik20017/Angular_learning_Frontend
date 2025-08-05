import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private username = 'Satwik';

  getUsername(): string {
    return this.username
  }

  setUsername(name: string): void {
    this.username = name;
  }
}
