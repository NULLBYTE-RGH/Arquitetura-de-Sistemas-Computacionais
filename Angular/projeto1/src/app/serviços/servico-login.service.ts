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

  private DB = 'http://localhost:5000' //url do servidor de conexão com o banco (no caso o que esta rodando na pasta Server)

  respostaDbLogin!:Login;
  respostaDbCadastro!:Boolean;
  cont = 0

  constructor(private http:HttpClient) { }

  logar(login:Login):Boolean {
    this.http.post<Login>(this.DB.concat('/login'),{credenciais:login}).subscribe((Login1 => this.respostaDbLogin = Login1))
    console.log(this.respostaDbLogin)
    if (this.respostaDbLogin){
      return true
    }
    else{
      return false
    }
    //console.log(login)
  }


  cadastrar(cadastro:Cadastro):Boolean{
    this.http.post<Boolean>(this.DB.concat('/create'),{credenciais:cadastro}).subscribe((Login => this.respostaDbCadastro = Login))
    console.log(this.respostaDbCadastro)
    if (this.respostaDbCadastro){
      return true
    }
    else{
      return false
    }
  }
}
