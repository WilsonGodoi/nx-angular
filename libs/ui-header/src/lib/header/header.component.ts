import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { OverlayPanel } from 'primeng/overlaypanel';
import { filter, takeUntil } from 'rxjs/operators';
import { StorageLoginService } from '@nx-angular/data-storage-login';
import { AlertService } from '@nx-angular/ui-alert';
import { PathTypes } from '@nx-angular/util-enum';
import { NgUnsubscribe } from '@nx-angular/util-class';

@Component({
  selector: 'nx-angular-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends NgUnsubscribe implements OnInit {
  constructor(
    private alertService: AlertService,
    // private logoutService: LogoutService,
    // public userService: UserService,
    public storageLoginService: StorageLoginService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    super();
  }

  public items: Array<MenuItem>;
  public displayMenu: boolean;
  public title: string;
  @ViewChild('overlayPanel') overlayPanel: OverlayPanel;
  @ViewChild('fileUpload') fileUpload: FileUpload;

  ngOnInit() {
    this.router.events
      .pipe(
        takeUntil(this.ngUnsubscribe),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(this.setTitle);
  }

  private setTitle = () => {
    this.activatedRoute.firstChild.data
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data) => (this.title = data.title));
  };

  public openMenu(): void {
    this.setMenu();
    this.displayMenu = true;
  }

  private closeMenu(): void {
    this.displayMenu = false;
  }

  public uploadPicture(): void {
    document
      .getElementById('fileUpload')
      .getElementsByTagName('input')[0]
      .click();
  }

  public doLogout(): void {
    this.alertService.confirm(
      'Deseja encerrar a sessão?',
      null,
      this.logout.bind(this)
    );
  }

  public goToChangePassword(): void {
    this.overlayPanel.hide();
    this.router.navigate(['changePassword']);
  }

  private logout(): void {
    // this.logoutService
    //   .doLogout()
    //   .pipe(
    //     takeUntil(this.unsubscribe)
    //   )
    //   .subscribe(this.successFunc.bind(this));
  }

  private successFunc() {
    // this.userService.clear();
    // this.authService.clear();
    this.router.navigate(['']);
  }

  public onUpload(event: any) {
    // File.toBase64(event.files[0])
    //   .pipe(
    //     switchMap((imageBase64: string) =>
    //       this.userService.saveAvatar(imageBase64)
    //     ),
    //     tap(() => this.userService.getCurrent()),
    //     tap(() => this.fileUpload.clear())
    //   )
    //   .subscribe();
  }

  private setMenu(): void {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'fas fa-chart-line',
        routerLink: 'dashboard',
        command: () => this.closeMenu(),
      },
      {
        label: 'Marcas',
        icon: 'far fa-copyright',
        routerLink: 'brands',
        command: () => this.closeMenu(),
      },
      {
        label: 'Veículos',
        icon: 'fas fa-car',
        routerLink: 'vehicles',
        command: () => this.closeMenu(),
      },
      {
        label: 'Usuários',
        icon: 'fas fa-users-cog',
        routerLink: 'users',
        command: () => this.closeMenu(),
      },
      {
        label: 'Créditos',
        icon: 'far fa-thumbs-up',
        routerLink: 'credits',
        command: this.closeMenu.bind(this),
      },
      {
        label: 'Clientes',
        icon: 'fas fa-users',
        routerLink: 'customers',
        command: this.closeMenu.bind(this),
      },
      {
        label: 'Vendas',
        icon: 'far fa-money-bill-alt',
        routerLink: PathTypes.SALES,
        command: this.closeMenu.bind(this),
      },
    ];
  }
}
