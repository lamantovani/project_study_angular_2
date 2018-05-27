
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoModule } from '../criar-curso/criar-curso.module';


@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  //providers: [CursosService]
})
export class CursosModule { }
