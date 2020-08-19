import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';

import { TranslationService } from '@core/services/translation.service';
import { LanguageChecker } from '@shared/components/language-checker/language-checker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends LanguageChecker implements OnInit {
  constructor(
    private router: Router,
    private title: Title,
    private route: ActivatedRoute,
    private translation: TranslationService
  ) {
    super(translation);
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map((e) => {
          this.currentUrl = (e as NavigationEnd).url;
          return route;
        }),
        map((r) => {
          while (r.firstChild) {
            r = r.firstChild;
          }
          return r;
        }),
        filter((r) => r.outlet === 'primary'),
        mergeMap((r) => r.data),
        // to prevent nested subscription, we use switchMap. if we dont use switchMap, next subscription return object of Date. so need to another subscription of translation.get().
        switchMap((event) => {
          return this.translation.stream(event['breadcrumb']);
        })
      )
      .subscribe((titleString) => {
        title.setTitle(
          (this.fa ? 'تجارت الکترونیک آگاه | ' : 'Agah | ') +
            titleString.toString()
        );
      });
  }

  currentUrl: string;

  get isHomePage() {
    return this.currentUrl === '/';
  }

  ngOnInit(): void {}
}
