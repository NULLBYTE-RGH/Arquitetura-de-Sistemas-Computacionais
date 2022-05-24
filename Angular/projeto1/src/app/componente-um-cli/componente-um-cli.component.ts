import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-um-cli',
  templateUrl: './componente-um-cli.component.html',
  styleUrls: ['./componente-um-cli.component.css']
})
export class ComponenteUmCliComponent implements OnInit {
  
  teste:number = 0

  clicaAI():void{
    this.teste+=1 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
