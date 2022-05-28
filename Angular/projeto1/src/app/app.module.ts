import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteUmCliComponent } from './componente-um-cli/componente-um-cli.component';
import { ComponenteCriarContaCliComponent } from './componente-criar-conta-cli/componente-criar-conta-cli.component';
import { ComponenteLoginCliComponent } from './componente-login-cli/componente-login-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteUmCliComponent,
    ComponenteCriarContaCliComponent,
    ComponenteLoginCliComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
