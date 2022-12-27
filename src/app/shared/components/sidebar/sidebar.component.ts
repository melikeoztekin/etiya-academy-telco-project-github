import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'etiya-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private element: ElementRef,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sidebarActiveBtn();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  sidebarActiveBtn(): void {
    let sidebarMenuItems =
      this.element.nativeElement.querySelectorAll('.sidebar-dark-btn');
    sidebarMenuItems.forEach((menuItem: any) => {
      menuItem.addEventListener('click', (e: any) => {
        if (e.target.parentElement.className == 'sidebar-dark-btn') {
          sidebarMenuItems.forEach((menuItemRemove: any) => {
            return menuItemRemove.classList.remove('active');
          });
          e.target.parentElement.classList.add('active');
        }
      });
    });
  }
}
