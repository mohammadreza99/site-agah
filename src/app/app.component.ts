import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.currentUrl = event.url;
    });
  }

  currentUrl: string;

  get isHomePage() {
    return this.currentUrl === '/';
  }
  
  ngOnInit(): void {}
}
