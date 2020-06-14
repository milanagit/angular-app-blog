import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Output()  deletePost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  public editMenuOpened = false;

  // Edit post
  onEdit(post) {
    this.editMenuOpened = true;
    // Edit in UI

    // Edit on server
    this.postService.editCompleted(post).subscribe(post =>
      console.log(post));
  }

  // Close edit post container
  onCloseEditPostContainer() {
    this.editMenuOpened = false;
  }

  // Dlete post
  onDelete(post) {
    this.deletePost.emit(post);
  }

}
