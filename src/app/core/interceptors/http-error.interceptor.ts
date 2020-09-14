import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedReq = request.clone({
      headers: new HttpHeaders({
        'Accept-Language': localStorage.getItem('lang'),
      }),
    });
    return next.handle(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          const errorMessage = `Code: ${error.status}\nERROR Message: ${error.message}`;
          return throwError(errorMessage);
        }
      })
    );
  }
}
