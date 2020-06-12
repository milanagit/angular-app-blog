import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BlogpostpageComponent } from './pages/blogpostpage/blogpostpage.component';
import { HeaderComponent } from './pages/blogpostpage/header/header.component';
import { BlogintroComponent } from './pages/blogpostpage/blogintro/blogintro.component';
import { BlogmainComponent } from './pages/blogpostpage/blogmain/blogmain.component';
import { AddeditpopupComponent } from './pages/blogpostpage/addeditpopup/addeditpopup.component';
import { PostsComponent } from './pages/blogpostpage/blogmain/posts/posts.component';
import { PostComponent } from './pages/blogpostpage/blogmain/posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostpageComponent,
    HeaderComponent,
    BlogintroComponent,
    BlogmainComponent,
    AddeditpopupComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
