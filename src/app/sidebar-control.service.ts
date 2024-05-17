import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarControlService {
  private _sidebarVisible = new BehaviorSubject<boolean>(false);
  sidebarVisible$ = this._sidebarVisible.asObservable();

  constructor() {}

  toggleSidebar(): void {
    this._sidebarVisible.next(!this._sidebarVisible.value);
  }
}
