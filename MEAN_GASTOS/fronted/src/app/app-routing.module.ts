import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuariosComponent } from './components/registro-usuarios/registro-usuarios.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
const routes: Routes = 
  [{path:"Home", component: RegistroUsuariosComponent},
   {path:"Usuarios", component: ListaUsuariosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
