import { Component, OnInit, Input } from '@angular/core';
import { IssueType } from '@syuq/interface/issue';
import { IssueUtil } from '@syuq/project/utils/issue';
import { IssueTypeWithIcon } from '@syuq/interface/issue-type-icon';
import { FormControl } from '@angular/forms';
import { ProjectConst } from '@syuq/project/config/const';

@Component({
  selector: 'issue-type-select',
  templateUrl: './issue-type-select.component.html',
  styleUrls: ['./issue-type-select.component.scss']
})
export class IssueTypeSelectComponent implements OnInit {
  @Input() control: FormControl;

  issueTypes: IssueTypeWithIcon[];

  constructor() {
    this.issueTypes = ProjectConst.IssueTypesWithIcon;
  }

  ngOnInit(): void {}

  getIssueTypeIcon(issueType: IssueType) {
    return IssueUtil.getIssueTypeIcon(issueType);
  }
}
