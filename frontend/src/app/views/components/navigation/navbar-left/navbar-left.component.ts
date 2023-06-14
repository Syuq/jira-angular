import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  currentUser$: Observable<any> | undefined
  items: NavItem[] | undefined
  constructor() {}

  ngOnInit(): void {
      this.items = [
        new NavItem('search', 'Search issues', () => {}),
        new NavItem('plus', 'Create issues', () => {}),
      ]
  }
}

class NavItem {
handler: any;
  constructor(public icon: string, public tooltip: string, handler: Handler) { }
  }

interface Handler {
  (): void
}
