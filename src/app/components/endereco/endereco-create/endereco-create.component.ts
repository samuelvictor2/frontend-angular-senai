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
    this.enderecoService.create(this.endereco).subscribe(() => {
      this.router.navigate(['/enderecos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/enderecos']);
  }
}
