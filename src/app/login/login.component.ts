import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports:[FormsModule, CommonModule]
})
export class LoginComponent implements OnInit{
  message:string = "vous êtes déconnecté. (pikatchu/pikatchu)";
  name: string | undefined;
  password: string | undefined;
  auth: AuthService | undefined;

  constructor(
      private AuthService: AuthService,
      private router: Router
  ){}

  ngOnInit(): void {
    this.auth = this.AuthService;
  }

  setMessage(){
    if(this.auth && this.auth.isLoggedIn){
      this.message = 'Vous êtes connecté.'
    }else{
      this.message = 'Identitfiant ou mot de passe incorrect.'
    }
  }
  login(){
    this.message = 'Tentative de connexion en cours...';
    if(this.auth && this.name && this.password) {
      this.auth.login(this.name, this.password)
          .subscribe((isLoggedIn: boolean) => {
            this.setMessage();
            if (isLoggedIn) {
              this.router.navigate(['/pokemons']);
            } else {
              this.password = '';
              this.router.navigate(['/login']);
            }
          })
    }
  }

  logout(){
    if(this.auth) {
      this.auth.logout();
      this.message = "Vous êtes déconnecté!";
    }
  }

}
