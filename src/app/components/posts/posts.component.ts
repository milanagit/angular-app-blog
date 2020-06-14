import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  public addMenuOpened = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  // Open add post container
  openAddPostMenu() {
    this.addMenuOpened = true;
  }

  // Delete post
  deletePost(post:Post) {
    // Delete from UI
    this.posts = this.posts.filter(p => p.id !== post.id);

    // Delete from server
    this.postService.deletePost(post).subscribe();
  }

  // Add post
  addPost(post:Post) {
    this.postService.addPost(post).subscribe(post => {
      this.posts.push(post);
    });
  }

}
