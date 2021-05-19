import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RedditCoomentDashboardComponent } from "./components/reddit-cooment-dashboard/reddit-cooment-dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { RedditHeaderComponent } from "./components/reddit-header/reddit-header.component";
import { RedditImageComponent } from "./components/reddit-image/reddit-image.component";
import { RedditNameDescriptionComponent } from "./components/reddit-name-description/reddit-name-description.component";
import { RedditReplyComponent } from "./components/reddit-reply/reddit-reply.component";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RedditCommentReplyComponent } from './components/reddit-comment-reply/reddit-comment-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditCoomentDashboardComponent,
    RedditHeaderComponent,
    RedditImageComponent,
    RedditNameDescriptionComponent,
    RedditReplyComponent,
    RedditCommentReplyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
