import {
  Component,
  OnInit,
  HostListener,
  Input,
  ElementRef,
} from '@angular/core';

import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'ag-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  @Input() isHomePage: boolean;

  isScrolled = false;
  selectedLang = 'En';
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
    this.translationService.use(this.selectedLang.toLowerCase());
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
