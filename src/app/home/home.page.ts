import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:any = {
    email: null,
    password: null
  }

  constructor(public authService: AuthenticateService ){ }

  create(){
    this.authService.register(this.user.email, this.user.password);
  }

  login(){
    this.authService.login(this.user.email, this.user.password);
  }
}
