import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {}

  /**
   * Sets the default language to use as a fallback
   */
  setDefaultLang(lang: string) {
    return this.translate.setDefaultLang(lang);
  }

  /**
   * Gets the default language
   */
  getDefaultLang(): string {
    return this.translate.getDefaultLang();
  }

  /**
   * Changes the lang currently used
   */
  use(lang: string): Observable<any> {
    return this.translate.use(lang);
  }

  /**
   * Gets an object of translations for a given language with the current loader
   */
  getTranslation(lang: string): Observable<any> {
    return this.translate.getTranslation(lang);
  }

  /**
   * Manually sets an object of translations for a given language, set shouldMerge to true if you want to append the translations instead of replacing them
   */
  setTranslation(
    lang: string,
    translations: object,
    shouldMerge: boolean = false
  ) {
    return this.translate.setTranslation(lang, translations, shouldMerge);
  }

  /**
   * Add new langs to the list
   */
  addLangs(langs: Array<string>) {
    return this.translate.addLangs(langs);
  }

  /**
   * Returns an array of currently available langs
   */
  getLangs() {
    return this.translate.getLangs();
  }

  /**
   * Gets the translated value of a key (or an array of keys) or the key if the value was not found
   */
  get(
    key: string | Array<string>,
    interpolateParams?: object
  ): Observable<string | object> {
    return this.translate.get(key, interpolateParams);
  }

  /**
   * Returns a stream of translated values of a key (or an array of keys) or the key if the value was not found. Without any onTranslationChange events this returns the same value as get but it will also emit new values whenever the translation changes.
   */
  getStreamOnTranslationChange(
    key: string | Array<string>,
    interpolateParams?: object
  ): Observable<string | object> {
    return this.translate.getStreamOnTranslationChange(key, interpolateParams);
  }

  /**
   * Returns a stream of translated values of a key (or an array of keys) or the key if the value was not found. Without any onLangChange events this returns the same value as get but it will also emit new values whenever the used language changes.
   */
  stream(
    key: string | Array<string>,
    interpolateParams?: object
  ): Observable<string | object> {
    return this.translate.stream(key, interpolateParams);
  }

  /**
   * Gets the instant translated value of a key (or an array of keys). /!\ This method is synchronous and the default file loader is asynchronous. You are responsible for knowing when your translations have been loaded and it is safe to use this method. If you are not sure then you should use the get method instead.
   */
  instant(
    key: string | Array<string>,
    interpolateParams?: object
  ): string | object {
    return this.translate.instant(key, interpolateParams);
  }

  /**
   * Sets the translated value of a key
   */
  set(key: string, value: string, lang?: string) {
    return this.translate.set(key, value, lang);
  }

  /**
   * Calls resetLang and retrieves the translations object for the current loader
   */
  reloadLang(lang: string): Observable<string | object> {
    return this.translate.reloadLang(lang);
  }

  /**
   * Removes the current translations for this lang.You have to call use, reloadLang or getTranslation again to be able to get translations
   */
  resetLang(lang: string) {
    return this.translate.resetLang(lang);
  }

  /**
   * Returns the current browser lang if available, or undefined otherwise
   */
  getBrowserLang(): string | undefined {
    return this.translate.getBrowserLang();
  }

  /**
   * Returns the current browser culture language name (e.g. "de-DE" if available, or undefined otherwise
   */
  getBrowserCultureLang(): string | undefined {
    return this.translate.getBrowserCultureLang();
  }
}