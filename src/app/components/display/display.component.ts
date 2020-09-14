import { Component, OnInit } from '@angular/core';
import { ReduxService } from 'src/app/redux/redux.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  login: boolean;

  constructor(
    private reduxService: ReduxService
  ) { }

  ngOnInit(): void {
    this.reduxService.subscribeStore(() => this.readState());
    this.readState();
  }

  readState() {
    this.login = this.reduxService.getIsLogin();

  }


}
