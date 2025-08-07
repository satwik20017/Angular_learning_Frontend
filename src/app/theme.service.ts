import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = false;

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this.applyTheme();
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }

  private applyTheme(): void {
    const body = document.body;
    if (this.darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  private loadTheme(): void {
    const stored = localStorage.getItem('darkMode');
    this.darkMode = stored === 'true';
    this.applyTheme();
  }
}
