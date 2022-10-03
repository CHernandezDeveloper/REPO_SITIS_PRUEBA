import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IProfile } from 'src/app/models/profile.model';
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

  profiles: IProfile[] = [{ name: '' }];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // * Obtenemos todos los usuarios
    this.getUsers();

    //* Obtenemos los perfiles
    this.userService.getProfiles().subscribe((response) => {
      this.profiles = response;
    });
  }
  getUsers(){
    this.userService.getUsers().subscribe({
      next:(response)=>{
        this.users = response;

      }
      }
    )
  }
  reciveData(regForm : FormGroup){
    console.log(regForm)
    if (regForm.value.password === regForm.value.confirmPassword) {
      let user: IUser = {
        userName: regForm.value.userName,
        email: regForm.value.email,
        password: regForm.value.password,
        profile:regForm.value.profile.name

      };
      console.log(user)
      this.userService.createUser(user).subscribe({
        next: (data: IUser) => {
          console.log(data)
        },
        error:(error)=>{
          alert("El usuario o email ya estan registrados")
          regForm.reset();

        },
        complete: () => {
          this.getUsers();
          alert("Ser registro el usuario")
          regForm.reset()

        },
      });
    } else {
      regForm.reset();
      alert("las contraseñas no coinciden")
    }
  }
}
