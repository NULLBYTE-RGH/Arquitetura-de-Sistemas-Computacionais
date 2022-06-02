import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { ServicoLoginService } from '../serviços/servico-login.service';

@Component({
  selector: 'app-componente-login-cli',
  templateUrl: './componente-login-cli.component.html',
  styleUrls: ['./componente-login-cli.component.css']
})
export class ComponenteLoginCliComponent implements OnInit {
  Email='';
  Senha='';
  Vazio:boolean=false;;

  Login!:Login;

  Enviar(Email:string,Senha:string){
    if ((Email && Senha) == ''){
    this.Vazio=true
    }
    else{
      this.Vazio=false
      this.Login ={Email:Email,Senha:Senha}
      this.Logar(this.Login)
    }
  }

  Logar(dados:Login){
    this.servicoLogin.logar(dados)
  }

  constructor(private servicoLogin:ServicoLoginService) { }

  ngOnInit(): void {
  }

}
