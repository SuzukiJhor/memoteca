import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
