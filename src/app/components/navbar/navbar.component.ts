import { Component } from '@angular/core';
import { SidebarControlService } from '../../sidebar-control.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private sidebarControlService: SidebarControlService) {}

  toggleSidebar(): void {
    this.sidebarControlService.toggleSidebar();
  }
}
