import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private showAlert(
    title: string,
    message?: string,
    icon?: SweetAlertIcon
  ): void {
    Swal.fire(title, message, icon);
  }

  public success(message: string, title?: string): void {
    this.showAlert(title, message, 'success');
  }

  public info(message: string, title?: string): void {
    this.showAlert(title, message, 'info');
  }

  public error(message: string, title?: string): void {
    this.showAlert(title, message, 'error');
  }

  public funcionalidadeNaoImplementada(): void {
    this.showAlert('', 'Funcionalidade ainda não implementada!', 'info');
  }

  public confirm(
    message: string,
    title?: string,
    accepFunction?: () => void,
    rejectFunction?: () => void
  ): void {
    Swal.fire({
      title,
      icon: 'question',
      text: message,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: '#34A835',
      cancelButtonColor: '#E91224',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.value) {
        if (accepFunction !== undefined) {
          accepFunction();
        }
      } else {
        if (rejectFunction !== undefined) {
          rejectFunction();
        }
      }
    });
  }
}
