import { Injectable } from '@angular/core';
import { Login } from '../Login';
import { Cadastro } from '../Cadastro';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoLoginService {

  private DB = 'http://localhost:5000' //url do banco de dados

  respostaDbLogin!:Login;
  respostaDbCadastro!:Boolean;


  constructor(private http:HttpClient) { }

  logar(login:Login):Boolean {
    this.http.post<Login>(this.DB.concat('/login'),{credenciais:login}).subscribe((Login1 => this.respostaDbLogin = Login1))

    if (this.respostaDbLogin.Senha === login.Senha){
      return true
    }
    else{
      return false
    }
    //console.log(login)
  }


  cadastrar(cadastro:Cadastro):Boolean{
    this.http.post<Boolean>(this.DB.concat('/create'),{credenciais:cadastro}).subscribe((Login => this.respostaDbCadastro = Login))
    if (this.respostaDbCadastro == true){
      return true
    }
    else{
      return false
    }
  }
}
