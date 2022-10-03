import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {

  @Input() users : IUser[] = [{
    userName : "",
    email : "",
    password : "",
    profile : ""}]
  ;
  listaFiltrada : IUser[] = [{
    userName : "",
    email : "",
    password : "",
    profile : ""}]
  ;

  filtro : string = "";
  activeFilter : boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  filter(){
    if(this.filtro.length==0){
      this.activeFilter = false;

    }else{
      this.activeFilter = true;
      this.users.filter((x)=>{
      if(x.profile == this.filtro ){
        this.listaFiltrada.push(x);
      }
    })
    }

  }
}
