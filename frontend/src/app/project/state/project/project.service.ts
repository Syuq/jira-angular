import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { arrayRemove, arrayUpsert } from '@datorama/akita';
import { JComment } from '@syuq/interface/comment';
import { JIssue } from '@syuq/interface/issue';
import { JProject } from '@syuq/interface/project';
import { of, Subscription } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProjectStore } from './project.store';
import { DateUtil } from '@syuq/project/utils/date';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl: string;

  constructor(private _http: HttpClient, private _store: ProjectStore) {
    this.baseUrl = environment.apiUrl;
  }

  setLoading(isLoading: boolean) {
    this._store.setLoading(isLoading);
  }

  getProject(): Subscription {
    this.setLoading(true);
    return this._http
      .get<JProject>(`${this.baseUrl}/project`)
      .pipe(
        map((project) => {
          this._store.update((state) => {
            return {
              ...state,
              ...project
            };
          });
        }),
        finalize(() => {
          this.setLoading(false);
        }),
        catchError((error) => {
          this._store.setError(error);
          return of(error);
        })
      )
      .subscribe();
  }

  updateProject(project: Partial<JProject>) {
    this._store.update((state) => ({
      ...state,
      ...project
    }));
  }

  updateIssue(issue: JIssue) {
    issue.updatedAt = DateUtil.getNow();
    this._store.update((state) => {
      let issues = arrayUpsert(state.issues, issue.id, issue);
      return {
        ...state,
        issues
      };
    });
  }

  deleteIssue(issueId: string) {
    this._store.update((state) => {
      let issues = arrayRemove(state.issues, issueId);
      return {
        ...state,
        issues
      };
    });
  }

  updateIssueComment(issueId: string, comment: JComment) {
    let allIssues = this._store.getValue().issues;
    let issue = allIssues.find((x) => x.id === issueId);
    if (!issue) {
      return;
    }

    let comments = arrayUpsert(issue.comments ?? [], comment.id, comment);
    this.updateIssue({
      ...issue,
      comments
    });
  }
}
