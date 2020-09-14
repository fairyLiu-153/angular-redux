import { Component, OnInit } from '@angular/core';
import { ReduxService } from 'src/app/redux/redux.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private reduxService: ReduxService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.reduxService.setIsLogin(true);
  }
  logout() {
    this.reduxService.setIsLogin(false);
  }

}
