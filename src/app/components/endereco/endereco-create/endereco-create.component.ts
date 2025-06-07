import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-create',
  templateUrl: './endereco-create.component.html',
  styleUrls: ['./endereco-create.component.css']
})
export class EnderecoCreateComponent implements OnInit {

  endereco: Endereco = {
    endId: 0,
    endRua: '',
    endNumero: '',
    endCidade: '',
    endCep: '',
    endEstado: ''
  };

  constructor(
    private enderecoService: EnderecoService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  createEndereco(): void {
    console.log('Endereço a ser criado:', this.endereco);
    this.enderecoService.create(this.endereco).subscribe({
      next: () => {
        this.enderecoService.showMessage('Endereço criado com sucesso!');
        this.router.navigate(['/enderecos']);
      },
      error: (err) => {
        console.error('Erro ao criar endereço:', err);
        this.enderecoService.showMessage('Erro ao criar endereço.', true);
      }
    });
  }
  

  cancel(): void {
    this.router.navigate(['/enderecos']);
  }
}
