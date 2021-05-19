import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-reddit-reply",
  templateUrl: "./reddit-reply.component.html",
  styleUrls: ["./reddit-reply.component.scss"],
})
export class RedditReplyComponent implements OnInit {
  textArea: FormGroup;
  submitCommentText: boolean = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.textArea = this.fb.group({
      textAreaInput: new FormControl("", Validators.required),
    });
  }

  get controlsText() {
    return this.textArea.controls;
  }

  submitComment() {
    if (this.textArea.invalid) {
      return;
    } else {
      this.submitCommentText = false;
      alert("Hey");
    }
  }
}
