import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../../models/user';


@Injectable()
export class AuthService {

  private isUserAuthenticated: boolean = false;

  displayMenu = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) { }

  async makeLogin(user: User) {
    const notfication = (<HTMLSelectElement>document.getElementById('div-not'));
    const notficationText = (<HTMLSelectElement>document.getElementById('notification'));
    notfication.classList.add("hide-div-not");

    if(user.name == undefined || user.password == undefined || user.name == "" || user.password == "") {
      notficationText.innerText="PREENCHA TODOS OS CAMPOS";
      notfication.classList.remove("hide-div-not");
      return;
    }

    if(user.name.length <= 10) {
      notficationText.innerText="E-MAIL MUITO PEQUENO";
      notfication.classList.remove("hide-div-not");
      return;
    }

    var re = /^[A-Za-z0-9-_.]+@[A-Za-z0-9]+\.[a-z]+?$/i;
    let emailRegex = re.test(user.name);
    if(!emailRegex) {
      notficationText.innerText="E-MAIL INVÁLIDO";
      notfication.classList.remove("hide-div-not");
      return;
    }

    if(user.name.length >= 60) {
      notficationText.innerText="E-MAIL MUITO GRANDE";
      notfication.classList.remove("hide-div-not");
      return;
    }

    if(user.password.length < 8) {
      notficationText.innerText="SENHA MUITO PEQUENA";
      notfication.classList.remove("hide-div-not");
      return;
    }

    if(user.password.length >= 25) {
      notficationText.innerText="SENHA MUITO GRANDE";
      notfication.classList.remove("hide-div-not");
      return;
    }

    var re = /^[A-Za-z0-9-_.!@#]+?$/i;
    let passRegex = re.test(user.password);
    if(!passRegex) {
      notficationText.innerText="SENHA INVÁLIDA";
      notfication.classList.remove("hide-div-not");
      return;
    }
    
    const contaiver = (<HTMLSelectElement>document.getElementById('container'));
    const loading = (<HTMLSelectElement>document.getElementById('loading'));

    contaiver.classList.remove("class-flex");
    contaiver.classList.add("class-hide");

    loading.classList.add("class-flex");
    loading.classList.remove("class-hide");

    const usuario = (<HTMLSelectElement>document.getElementById('usuario'));
    const senha = (<HTMLSelectElement>document.getElementById('senha'));
    const btnLogin = (<HTMLSelectElement>document.getElementById('btn-login'));
    usuario.disabled = true;
    senha.disabled = true;
    btnLogin.disabled = true;

    var newLogin = window.localStorage.getItem("newLogin");
    if(newLogin == "false") {
      newLogin = "false";
    }
    else {
      newLogin = "true"
    }

    const loginEndPoint = 'https://projeto-integrador-user.herokuapp.com/user/login';
    const body = JSON.stringify({
      email: user.name,
      pass: user.password,
      newLogin: newLogin
    });
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", loginEndPoint, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(body);

    xhttp.addEventListener('loadend', () => {
      if(xhttp.status == 200) {
        let session = JSON.parse(xhttp.response);

        window.localStorage.setItem("session", session['session']);
        window.localStorage.setItem("newLogin", "false");

        const urlParams = new URLSearchParams(window.location.search);
        const checkout = urlParams.get('checkout');
        const orderId = urlParams.get('orderId');
        const pedidos = urlParams.get('pedidos');
        if(checkout == "true") {
          this.router.navigate(['checkout']);
        }
        else if(orderId != "null" && orderId != null) {
          this.router.navigate(['pedido'], { queryParams: { orderId: orderId } });
        }
        else if(pedidos == "true") {
          this.router.navigate(['pedidos']);
        }
        else {
          this.router.navigate(['']);
        }
      }
      else {
        usuario.disabled = false;
        senha.disabled = false;
        btnLogin.disabled = false;

        contaiver.classList.remove("class-hide");
        contaiver.classList.add("class-flex");

        loading.classList.remove("class-flex");
        loading.classList.add("class-hide");

        usuario.focus();

        notficationText.innerText="DADOS INVÁLIDOS";
        notfication.classList.remove("hide-div-not");
      }
    });
  }

  get userAuthenticated(): boolean {
    return this.isUserAuthenticated;
  }

}
