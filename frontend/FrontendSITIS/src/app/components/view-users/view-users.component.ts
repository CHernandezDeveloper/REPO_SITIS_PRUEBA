import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProfile } from 'src/app/models/profile.model';
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
  @Input()profiles: IProfile[] = [{ name: '' }];
  viewForm: FormGroup = new FormGroup ({})
  profile = new FormControl<IProfile | null>(null, Validators.required);
  filtro : string = "";
  activeFilter : boolean = false;
  constructor(private userService : UserService) { }

  ngOnInit(): void {

  }
  filter(){
    this.listaFiltrada = [];
    let filter = this.profile.value?.name;

    console.log(this.profile.value?.name)
    if(filter == undefined){
      this.activeFilter = false;

    }else{
      this.activeFilter = true;
      this.users.filter((x)=>{
      if(x.profile == filter ){
        this.listaFiltrada.push(x);
      }
    })
    }

  }

}
