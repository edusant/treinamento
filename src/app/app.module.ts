import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { StarComponent } from 'exemplo/course-manager-master/src/app/shared/component/star/star.component';

import { AppComponent } from './app.component';
import { CursoListaComponent } from './Cursos/curso-lista.component';
import { StarComponent } from './Cursos/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    StarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
