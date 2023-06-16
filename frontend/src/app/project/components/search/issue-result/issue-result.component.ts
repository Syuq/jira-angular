import { Component, OnInit, Input } from '@angular/core';
import { JIssue } from '@syuq/interface/issue';
import { IssueUtil } from '@syuq/project/utils/issue';

@Component({
  selector: 'issue-result',
  templateUrl: './issue-result.component.html',
  styleUrls: ['./issue-result.component.scss']
})
export class IssueResultComponent implements OnInit {
  @Input() issue: JIssue;

  get issueTypeIcon() {
    return IssueUtil.getIssueTypeIcon(this.issue?.type);
  }

  constructor() {}

  ngOnInit(): void {}
}
