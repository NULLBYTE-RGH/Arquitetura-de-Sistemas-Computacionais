import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ComponenteUmCliComponent } from './componente-um-cli/componente-um-cli.component';
import { ComponenteCriarContaCliComponent } from './componente-criar-conta-cli/componente-criar-conta-cli.component';
import { ComponenteLoginCliComponent } from './componente-login-cli/componente-login-cli.component';
import { ComponenteMainCliComponent } from './componente-main-cli/componente-main-cli.component';
import { ComponenteRTCliComponent } from './componente-rt-cli/componente-rt-cli.component';
import { ComponenteGoogleCliComponent } from './componente-google-cli/componente-google-cli.component';
import { ComponenteSkynewsarabiaCliComponent } from './componente-skynewsarabia-cli/componente-skynewsarabia-cli.component';
import { ComponenteKyivpostCliComponent } from './componente-kyivpost-cli/componente-kyivpost-cli.component';
import { ComponenteTheguardianCliComponent } from './componente-theguardian-cli/componente-theguardian-cli.component';
import { ComponenteIsraelhayomCliComponent } from './componente-israelhayom-cli/componente-israelhayom-cli.component';
import { ComponenteAfricanewsCliComponent } from './componente-africanews-cli/componente-africanews-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteUmCliComponent,
    ComponenteCriarContaCliComponent,
    ComponenteLoginCliComponent,
    ComponenteMainCliComponent,
    ComponenteRTCliComponent,
    ComponenteGoogleCliComponent,
    ComponenteSkynewsarabiaCliComponent,
    ComponenteKyivpostCliComponent,
    ComponenteTheguardianCliComponent,
    ComponenteIsraelhayomCliComponent,
    ComponenteAfricanewsCliComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
