import { Component, OnInit } from '@angular/core';
import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-read',
  templateUrl: './endereco-read.component.html',
  styleUrls: ['./endereco-read.component.css']
})
export class EnderecoReadComponent implements OnInit {

  enderecos!: Endereco[];
  displayedColumns = ['endId', 'endRua', 'endNumero', 'endCidade', 'endCep', 'endEstado', 'action'];

  constructor(private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.enderecoService.getAll().subscribe(enderecos => {
      this.enderecos = enderecos;
      console.log(enderecos);
    });
  }

}
