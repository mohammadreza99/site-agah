import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'ag-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  @Input() isHomePage: boolean;
  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let scrollTop = event.target.scrollingElement.scrollTop;
    if (scrollTop > 2) this.isScrolled = true;
    else this.isScrolled = false;
  }

  ngOnInit(): void {}
}
