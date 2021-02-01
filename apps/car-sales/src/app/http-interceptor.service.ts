import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageLoginService } from '@nx-angular/data-storage-login';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AlertService } from '@nx-angular/ui-alert';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private storageLoginService: StorageLoginService,
    private alertService: AlertService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({ url: environment.API_URL + request.url });

    if (this.storageLoginService.isAuthenticated()) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + this.storageLoginService.loginResponse.jwt
        ),
      });
    }

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
        this.alertService.error(
          httpError?.error?.message || httpError?.message,
          httpError.status !== 0 ? `Erro: ${httpError.status}` : ''
        );

        return throwError(httpError);
      })
    );
  }
}
