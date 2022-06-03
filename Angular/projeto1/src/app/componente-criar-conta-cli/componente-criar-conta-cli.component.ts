import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../Cadastro';
import { ServicoLoginService } from '../serviços/servico-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-componente-criar-conta-cli',
  templateUrl: './componente-criar-conta-cli.component.html',
  styleUrls: ['./componente-criar-conta-cli.component.css']
})
export class ComponenteCriarContaCliComponent implements OnInit {
  Vazio:boolean=false;;
  PrimeiroNome = ''
  UltimoNome = ''
  Username = ''
  Email = ''
  Senha = ''
  Pais = ''

  Cadastro!:Cadastro

  constructor(private servicoCadastro:ServicoLoginService, private router:Router) { }

  ngOnInit(): void {
  }

  Validar(PrimeiroNome:String,UltimoNome:String,Username:String,Email:String,Senha:String,Pais:String){

    if ((PrimeiroNome && UltimoNome && Username && Email && Senha && Pais) == ''){
      this.Vazio=true
      }
      else{
        this.Vazio=false
        this.Cadastro = {PrimeiroNome:PrimeiroNome,UltimoNome:UltimoNome,Username:Username,Email:Email,Senha:Senha,Pais:Pais}

        if (this.Cadastrar(this.Cadastro)){
          this.router.navigate(['/main'])  
        }
        else{
          this.router.navigate(['/create-account'])  
        }      
      }
  }

  Cadastrar(dados:Cadastro):Boolean{
    return this.servicoCadastro.cadastrar(dados)
  }
}
