import { Component, OnInit } from "@angular/core";
import { RedditCommentService } from "../reddit-comment.service";

@Component({
  selector: "app-reddit-cooment-dashboard",
  templateUrl: "./reddit-cooment-dashboard.component.html",
  styleUrls: ["./reddit-cooment-dashboard.component.scss"],
})
export class RedditCoomentDashboardComponent implements OnInit {
  children: Array<any>;
  getdata: boolean = false;
  constructor(protected redditCmntSvc: RedditCommentService) {}

  ngOnInit() {
    this.redditCmntSvc.getRedditCommnts().subscribe((response) => {
      if (response && response.data && response.data.children) {
        this.getdata = true;
        this.getChildren(response);
      }
    });
  }

  getChildren(response: any) {
    this.children = response.data.children;
    console.log(this.children);
  }
}
