import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent implements OnInit {

  users : IUser[] = [{
    userName : "",
    email : "",
    password : "",
    profile : ""}]
  ;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next:(response)=>{
        //console.log(response)
        this.users = response;

      }
      }
    )
  }

}
