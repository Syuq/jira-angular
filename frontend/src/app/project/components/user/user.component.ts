import { Component, OnInit, Input } from '@angular/core';
import { JUser } from '@syuq/interface/user';

@Component({
  selector: 'j-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: JUser;

  constructor() {}

  ngOnInit(): void {}
}
