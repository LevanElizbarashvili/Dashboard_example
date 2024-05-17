import { Component } from '@angular/core';
import { SidebarControlService } from '../../sidebar-control.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isVisible = false;

  constructor(private sidebarControlService: SidebarControlService) {}

  ngOnInit(): void {
    this.sidebarControlService.sidebarVisible$.subscribe(
      (isVisible: boolean) => {
        this.isVisible = isVisible;
      }
    );
  }
}
