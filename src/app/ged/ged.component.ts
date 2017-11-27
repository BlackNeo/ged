import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css']
})
export class GedComponent implements OnInit {

  users: Array<User>;
  selectedUser: User;
  isLogin: boolean;
  data: any;
  type: string;
  options: any;

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.isLogin = true;
    this._userService.getUsers()
      .subscribe(resUserData => this.users = resUserData);
      console.log(this.users);
  }
}
