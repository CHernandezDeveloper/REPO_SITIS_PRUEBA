import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
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

  @Input()profiles: IProfile[] = [{ name: '' }];
  regForm: FormGroup = new FormGroup({});
  profile = new FormControl<IProfile | null>(null, Validators.required);
  @Output() emitter = new EventEmitter();

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
      profile: this.profile
    });


  }

  createUser() {

    this.emitter.emit(this.regForm);

  }
}
