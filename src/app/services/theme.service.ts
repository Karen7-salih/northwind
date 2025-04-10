import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: 'light-theme' | 'dark-theme' = 'light-theme';

  constructor() {
    const savedTheme = localStorage.getItem('theme') as 'light-theme' | 'dark-theme';
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme(this.activeTheme);
    }
  }

  setTheme(theme: 'light-theme' | 'dark-theme') {
    document.body.classList.remove(this.activeTheme);
    document.body.classList.add(theme);
    this.activeTheme = theme;
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    this.setTheme(this.activeTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
  }

  public get currentTheme() {
    return this.activeTheme;
  }
}