import { NgModule } from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { UsuriosComponent } from './components/usurios/usurios.component';

const routes:Route[]=[
  {path:'informacion', component:InformacionComponent},
  {path:'registro', component:FormularioComponent},
  {path:'usuarios', component:UsuriosComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
