import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { AppComponent } from './app.component';
import { CursoListaComponent } from './Cursos/curso-lista.component';

const routes: Routes = [
  { path: 'curso', component: CursoListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
