import { Component } from "@angular/core";
import { Curso } from "./curso";
import { CursoService } from "./Curso.service";

@Component({
  // templateUrl: '',
  // template: '<h2>Teste</h2>'
  templateUrl: './curso-lista.component.html'
})
export class CursoListaComponent{

  constructor(private CursoService: CursoService){

  }

  // this.
  filteredCourses: Curso[] = [];
  curso: Curso[] = [];
  _filterBy: string;
  _courses: Curso[] = [];


  ngOnInit(): void {
    this.curso = this.CursoService.retrieveAll();
    // this.filteredCourses = this.curso;
    this._courses = this.curso;
    this.filteredCourses = this._courses;
  }


  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Curso) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}
