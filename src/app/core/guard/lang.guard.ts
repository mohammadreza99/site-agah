import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { AgahService } from '@core/http';
import { TranslationService } from '@core/services/translation.service';

@Injectable({
  providedIn: 'root',
})
export class LangGuard implements CanActivate {
  constructor(
    private agahService: AgahService,
    private translationService: TranslationService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    return this.getLang();
  }

  async getLang() {
    const localStorageLang = localStorage.getItem('lang');
    if (localStorageLang) {
      this.translationService.use(localStorageLang);
      return true;
    } else {
      const lang = await this.agahService.getLang().toPromise();
      localStorage.setItem('lang', lang['lang']);
      this.translationService.use(lang['lang']);
      return true;
    }
  }
}
