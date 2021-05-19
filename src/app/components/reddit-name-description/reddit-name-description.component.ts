import { Component, Input, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-reddit-name-description",
  templateUrl: "./reddit-name-description.component.html",
  styleUrls: ["./reddit-name-description.component.scss"],
})
export class RedditNameDescriptionComponent implements OnInit {
  @Input("children") children: Array<any>;
  dataAuthor: Array<any>;
  time: string;
  constructor(private datePipe: DatePipe) {}
  myDate: number = Date.now();

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.dataAuthor = this.children.slice(0, 3);
    console.log("DATAAAAAAA", this.dataAuthor);
  }

  getDate(timeInput: any) {
    let timeStamp = timeInput * 1000;
    this.time = this.datePipe.transform(new Date(timeStamp), "h:mm a");
    return this.time;
  }
}
