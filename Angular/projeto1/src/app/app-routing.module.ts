import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteCriarContaCliComponent } from './componente-criar-conta-cli/componente-criar-conta-cli.component';
import { ComponenteLoginCliComponent } from './componente-login-cli/componente-login-cli.component';
import { ComponenteMainCliComponent } from './componente-main-cli/componente-main-cli.component';
import { ComponenteRTCliComponent } from './componente-rt-cli/componente-rt-cli.component';

const routes: Routes = [
 {path:'' , component: ComponenteLoginCliComponent},
 {path:'create-account',component: ComponenteCriarContaCliComponent},
 {path:'main',component:ComponenteMainCliComponent},
 {path:'rt',component:ComponenteRTCliComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
