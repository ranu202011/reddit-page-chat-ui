import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-reddit-image",
  templateUrl: "./reddit-image.component.html",
  styleUrls: ["./reddit-image.component.scss"],
})
export class RedditImageComponent implements OnInit {
  @Input("children") children: Array<any>;
  images: Array<any>;
  iconImages: any[];
  constructor() {}

  ngOnInit() {
    this.getImages();
    console.log("Children in Image", this.children);
  }

  getImages() {
    this.images = this.children[0].data.all_awardings;
    this.iconImages = this.images.filter((images) => {
      return images.icon_url;
    });
    console.log(this.images);
  }
}
