import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { CadastroService } from './cadastro.service';
import { Register } from '../../../models/register';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  register: Register = new Register();

  constructor(private cadastroService: CadastroService,
    private router: Router) { }

  ngOnInit() {
    const session = window.localStorage.getItem("session");
    if(session != null && session != "null") {
      this.router.navigate(['']);
    }

    const notfication = (<HTMLSelectElement>document.getElementById('div-not'));
    const notficationText = (<HTMLSelectElement>document.getElementById('notification'));

    this.register.sex = '1';

    document.getElementById('name').focus();

    const fildZipCode = document.getElementById('zipcode');
    fildZipCode.addEventListener("keyup", () => {
      const valueZipCode = (<HTMLSelectElement>document.getElementById('zipcode')).value;

      let ValidateZipCode1 = valueZipCode.match(/[0-9]{8}/gi);
      let ValidateZipCode2 = valueZipCode.match(/[0-9]{5}[-][0-9]{3}/gi);

      if(valueZipCode.length == 8 && ValidateZipCode1 || valueZipCode.length == 9 && ValidateZipCode2) {
        notfication.classList.add("hide-div-not");

        const cep = (<HTMLSelectElement>document.getElementById('zipcode'));
        const rua = (<HTMLSelectElement>document.getElementById('street'));
        const bairro = (<HTMLSelectElement>document.getElementById('district'));
        const estado = (<HTMLSelectElement>document.getElementById('state'));
        const cidade = (<HTMLSelectElement>document.getElementById('city'));

        this.cadastroService.getCep(valueZipCode, cep, rua, bairro, estado, cidade);
      }
      else {
        if(valueZipCode.length == 8 || valueZipCode.length == 9) {
          notficationText.innerText="CEP INVÁLIDO";
          notfication.classList.remove("hide-div-not");
        }
      }
    });
  }

  makeSignup() {
    const cep = (<HTMLSelectElement>document.getElementById('zipcode'));
    const rua = (<HTMLSelectElement>document.getElementById('street'));
    const bairro = (<HTMLSelectElement>document.getElementById('district'));
    const estado = (<HTMLSelectElement>document.getElementById('state'));
    const cidade = (<HTMLSelectElement>document.getElementById('city'));

    this.register.zipCode= cep.value;
    this.register.street= rua.value
    this.register.district= bairro.value
    this.register.state= estado.value
    this.register.city= cidade.value

    let t = this.cadastroService.checkData(this.register);
    if(t['__zone_symbol__value'] == true) {
      this.cadastroService.makeLogin(this.register);
    }
  }
}
