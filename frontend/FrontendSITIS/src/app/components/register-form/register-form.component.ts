import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IProfile } from 'src/app/models/profile.model';
import { IUser } from 'src/app/models/users.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {


  protected createdUser: boolean = false;
  protected profiles: IProfile[] = [{ name: '' }];
  protected regForm: FormGroup = new FormGroup({});
  protected profile = new FormControl<IProfile | null>(null,
    [Validators.required]
  );

  error: boolean = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // * Inicialiazacion de nuestro formulario reactivo
    this.regForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9]{6,15}'),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      profile: this.profile,
    });

    //* Obtenermos los perfiles de la bd
    this.userService.getProfiles().subscribe((response) => {
      this.profiles = response;
    });
  }

  createUser() {

    if (this.regForm.value.password === this.regForm.value.confirmPassword) {
      let user: IUser = {
        userName: this.regForm.value.userName,
        email: this.regForm.value.email,
        password: this.regForm.value.password,
        profile: this.profile?.value?.name
      };

      this.userService.createUser(user).subscribe({
        next: (data: IUser) => {
          this.createdUser = data.userName == user.userName;

        },
        error:(error)=>{

          this.createdUser = false;
        },
        complete: () => {
          this.error = false;
          this.createdUser = true;
          this.regForm.reset()

        },
      });
    } else {
      this.regForm.reset();
      this.error = true;

    }
  }
}
