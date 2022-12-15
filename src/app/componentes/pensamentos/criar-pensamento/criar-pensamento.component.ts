import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculoValidators';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  // pensamento: Pensamento = {
  //   conteudo: '',
  //   autoria: '',
  //   modelo: 'modelo1'
  // }

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        minusculoValidator
      ])
      ],
      modelo: ['modelo3']
    })
  }

  criarPensamento() {
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(()=>{
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelarPensamento(){
    console.log(this.formulario.get('autoria')?.errors);
    alert('Pensamento cancelado')
    // this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    }
      return 'botao_desabilitado'
  }
}
