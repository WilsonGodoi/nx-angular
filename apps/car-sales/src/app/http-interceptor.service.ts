import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({ url: environment.API_URL + request.url });

    // if (this.authService.isAuthenticated()) {
    //   request = request.clone({
    //     headers: request.headers.set(
    //       'Authorization',
    //       'Bearer ' + this.authService.loginResponse.jwt
    //     ),
    //   });
    // }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });

    return next.handle(request).pipe(
      catchError((httpError: HttpErrorResponse) => {
        if (httpError.status === 0) {
          httpError.error.message = 'Servidor indisponível. Tente novamente!';
        }
        // this.alertService.error(
        //   httpError?.error?.message || httpError?.message,
        //   httpError.status !== 0 ? `Erro: ${httpError.status}` : ''
        // );

        return throwError(httpError);
      })
    );
  }
}
