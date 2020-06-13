import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Popup } from '../../../addeditpopup/popup/popup';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() id: Popup;
  @Input() title: Popup;
  @Input() text: Popup;

  public editPostPopup = false;
  public deletePostAction = false;

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
  }

  public editPost() {
    console.log('Hello from EDIT POST!');
    this.editPostPopup = true;
  }

  public deletePost() {
    this.deletePostAction = true;
    console.log(this.editPostPopup);
  }

  // get editPostPopupValue() {
  //   return this.editPostPopupValue;
  // }

}
