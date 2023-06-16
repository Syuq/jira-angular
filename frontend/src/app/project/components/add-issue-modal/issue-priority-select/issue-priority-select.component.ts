import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IssuePriorityIcon } from '@syuq/interface/issue-priority-icon';
import { IssueUtil } from '@syuq/project/utils/issue';
import { IssuePriority } from '@syuq/interface/issue';
import { ProjectConst } from '@syuq/project/config/const';

@Component({
  selector: 'issue-priority-select',
  templateUrl: './issue-priority-select.component.html',
  styleUrls: ['./issue-priority-select.component.scss']
})
export class IssuePrioritySelectComponent implements OnInit {
  @Input() control: FormControl;
  priorities: IssuePriorityIcon[];

  constructor() {
    this.priorities = ProjectConst.PrioritiesWithIcon;
  }

  getPriorityIcon(priority: IssuePriority) {
    return IssueUtil.getIssuePriorityIcon(priority);
  }

  ngOnInit(): void {}
}
