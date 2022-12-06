import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {

  constructor(private service: PensamentoService) {}

  listaPensamentos: Pensamento[] = [];

  ngOnInit(): void{
    this.service.listar().subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos
    })
  }

}
