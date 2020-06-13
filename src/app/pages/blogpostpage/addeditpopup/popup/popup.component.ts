import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { PostComponent } from '../../blogmain/posts/post/post.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() editId: number;
  @Input() editTitle: string;
  @Input() editText: string;

  constructor(private appService: AppService, private postComponent: PostComponent) { }

  ngOnInit(): void {
  }

  public test = true;
  // public editPostPopupp = true;
  
  public editPostPopupp = this.postComponent.editPostPopup;

  public saveChanges() {
    this.appService.addeditpopup[this.editId - 1].editTitle = this.editTitle;
    this.appService.addeditpopup[this.editId - 1].editText = this.editText;
  }

  public exitEditPost() {
    this.editPostPopupp = false;
  }

  public testRes() {
    console.log(this.editPostPopupp);
  }

}
