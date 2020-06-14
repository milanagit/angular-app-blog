import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
@Output() addPost: EventEmitter<any> = new EventEmitter();

  title: string;
  body: string;

  public addMenu = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const post = {
      title: this.title,
      body: this.body
    }

    this.addPost.emit(post);
  }

  // Close Add Post container
  closeAddPostMenu() {
    this.addMenu = false;
  }

}
