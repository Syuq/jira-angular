import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  breadcrumbs: string[] = ['Projects', 'Angular Quan ly du an', 'Kanban Board'];

  constructor() {}

  ngOnInit(): void {}
}
