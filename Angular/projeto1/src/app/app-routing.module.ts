import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteCnnCliComponent } from './componente-cnn-cli/componente-cnn-cli.component';
import { ComponenteCriarContaCliComponent } from './componente-criar-conta-cli/componente-criar-conta-cli.component';
import { ComponenteIsraelhayomCliComponent } from './componente-israelhayom-cli/componente-israelhayom-cli.component';
import { ComponenteLoginCliComponent } from './componente-login-cli/componente-login-cli.component';
import { ComponenteMainCliComponent } from './componente-main-cli/componente-main-cli.component';
import { ComponenteRTCliComponent } from './componente-rt-cli/componente-rt-cli.component';
import { ComponenteTheguardianCliComponent } from './componente-theguardian-cli/componente-theguardian-cli.component';

const routes: Routes = [
 {path:'' , component: ComponenteLoginCliComponent},
 {path:'create-account',component: ComponenteCriarContaCliComponent},
 {path:'main',component:ComponenteMainCliComponent},
 {path:'rt',component:ComponenteRTCliComponent},
 {path:'cnn',component:ComponenteCnnCliComponent},
 {path:'guardian',component:ComponenteTheguardianCliComponent},
 {path:'israel',component:ComponenteIsraelhayomCliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
