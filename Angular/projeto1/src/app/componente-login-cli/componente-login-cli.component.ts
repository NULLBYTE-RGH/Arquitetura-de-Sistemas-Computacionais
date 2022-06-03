import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { ServicoLoginService } from '../serviços/servico-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-login-cli',
  templateUrl: './componente-login-cli.component.html',
  styleUrls: ['./componente-login-cli.component.css']
})
export class ComponenteLoginCliComponent implements OnInit {
  Email='';
  Senha='';
  Vazio:boolean=false;
  Credenciais_Incorretas:Boolean = false;

  Login!:Login;

  Enviar(Email:string,Senha:string){
    if ((Email && Senha) == ''){
    this.Vazio=true
    }
    else{
      this.Vazio=false
      this.Login ={Email:Email,Senha:Senha}
      let retorno:Boolean
      retorno = this.Logar(this.Login)

      if (retorno){
        this.router.navigate(['/main'])  
      }
      else{
        this.Credenciais_Incorretas=true
    }
  }
}

  Logar(dados:Login):Boolean{
     return this.servicoLogin.logar(dados)
  }

  constructor(private servicoLogin:ServicoLoginService, private router:Router) { }

  ngOnInit(): void {
  }

}
