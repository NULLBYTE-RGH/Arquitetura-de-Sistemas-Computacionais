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

  private DB = 'https://cda9fa5e-a07c-4ca6-9ec3-4f4f73aea83f.mock.pstmn.io' //url do banco de dados

  respostaDbLogin!:Login;
  respostaDbCadastro!:Boolean;

  constructor(private http:HttpClient) { }

  logar(login:Login){
    
    // this.http.get<Login>(this.DB, {observe:'body',responseType:'json'}).subscribe((Login => this.respostaDb = Login))
    this.http.post<Login>(this.DB,{credenciais:login}).subscribe((Login => this.respostaDbLogin = Login))
    console.log("feito")

    if (this.respostaDbLogin.Senha == login.Senha){
      return 1
    }
    else{
      return 0
    }
    //console.log(login)
  }


  cadastrar(cadastro:Cadastro){
    this.http.post<Boolean>(this.DB,{credenciais:cadastro}).subscribe((Login => this.respostaDbCadastro = Login))
    if (this.respostaDbCadastro == true){
      return 1
    }
    else{
      return 0
    }
    //console.log(cadastro)
  }
}
