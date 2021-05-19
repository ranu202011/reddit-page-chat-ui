import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpClient,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, retry } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class RedditCommentService {
  private _redditsComments$: Observable<Array<any>>;
  private _redditDataUrl: string = "http://www.reddit.com/r/9gag.json";

  private _http;
  constructor(private http: HttpClient) {
    this._http = http;
  }

  getRedditCommnts(): Observable<any> {
    return this.http
      .get(this._redditDataUrl)
      .pipe(map((response: any) => response));
  }
}
