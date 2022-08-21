import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './components/carta/carta.component';
import { CrearComponent } from './components/crear/crear.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JuegoComponent } from './components/juego/juego.component';
import { MazoComponent } from './components/mazo/mazo.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'inicio'},
  {path:'inicio',pathMatch:'full',component:InicioComponent},
  {path:'crear',component:CrearComponent},
  {path:'mazo',component:MazoComponent},
  {path:'juego',component:JuegoComponent},
  {path:'carta',component:CartaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
