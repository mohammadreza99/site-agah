import { Component, HostListener, Input, OnInit } from '@angular/core';

import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'ag-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends LanguageChecker implements OnInit {
  constructor(private router: Router, private translation: TranslationService) {
    super();
  }

  @Input() isHomePage: boolean;

  isScrolled = false;
  selectedLang = 'فارسی';
  showMenu = false;
  isOpen = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const scrollTop = event.target.scrollingElement.scrollTop;
    if (scrollTop > 2) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  ngOnInit(): void {}

  changeLang(lang) {
    this.selectedLang = lang.text;
    switch (lang.text) {
      case 'English':
        this.translation.use('en');
        break;
      case 'English':
      default:
        this.translation.use('fa');
        break;
    }
    this.closeNavbar();
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  closeNavbar() {
    this.isOpen = false;
  }

  navigate(path: string) {
    this.closeNavbar();
    this.router.navigate([path]);
  }
}
