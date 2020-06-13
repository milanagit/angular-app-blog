import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Popup } from './popup/popup';

@Component({
  selector: 'app-addeditpopup',
  templateUrl: './addeditpopup.component.html',
  styleUrls: ['./addeditpopup.component.scss']
})
export class AddeditpopupComponent implements OnInit {

  public addeditpopup: Array<Popup>;

  constructor(private appService: AppService) {
    
  }

  ngOnInit(): void {
    this.addeditpopup = this.appService.addeditpopup;
  }

}
