import { Component, OnInit } from '@angular/core';

/**
* Created by S73261 [Edwin Higberto Mamani Canaza] on 20/03/2022.
**/
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarWidth: string;
  toggle: boolean;

  constructor() {
    this.sidebarWidth = 'navbar-nav flex-column nav-gradient sidebar-dark sidebar';
    this.toggle = true;
  }

  ngOnInit(): void {
  }

  onCollapseSidebar(): void {
    if (this.toggle) {
      this.sidebarWidth = 'navbar-nav flex-column nav-gradient sidebar-dark sidebar';
      this.toggle = false;
    } else {
      this.sidebarWidth = 'navbar-nav flex-column nav-gradient sidebar-dark sidebarrr';
      this.toggle = true;
    }
  }

  ngSidebar(): string {
    return this.sidebarWidth;
  }
}
