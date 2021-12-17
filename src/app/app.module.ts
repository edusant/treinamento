import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { StarComponent } from 'exemplo/course-manager-master/src/app/shared/component/star/star.component';

import { AppComponent } from './app.component';
import { CursoListaComponent } from './Cursos/curso-lista.component';
import { NavBarComponent } from './Cursos/nav-bar/nav-bar.component';
import { StarComponent } from './Cursos/star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
