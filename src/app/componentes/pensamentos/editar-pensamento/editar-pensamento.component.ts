import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { minusculoValidator } from '../criar-pensamento/minusculoValidators';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
    ){
  }

  formulario!: FormGroup;

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      console.log(pensamento)

      this.formulario = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3),
          minusculoValidator
        ])],
        modelo: [pensamento.modelo]
      })
    })
  }



  editarPensamento(){
    console.log(this.formulario.valid)
    if(this.formulario.valid){
    this.service.editar(this.formulario.value).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }
}
