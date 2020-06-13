import { Component, OnInit } from '@angular/core';
import { Post } from './post/post';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts: Array<Post>;

  constructor(private appService: AppService) {
    this.posts = this.appService.posts;
  }

  ngOnInit(): void {
    
  }

}
