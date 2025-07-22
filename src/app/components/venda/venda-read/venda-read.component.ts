
import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { VendaDTO } from '../venda.model';

@Component({
  selector: 'app-venda-read',
  templateUrl: './venda-read.component.html',
  styleUrls: ['./venda-read.component.css']
})
export class VendaReadComponent implements OnInit {
  vendas: VendaDTO[] = [];
  
  // Defina as colunas a serem exibidas na tabela
  displayedColumns: string[] = ['clienteId', 'itens'];

  constructor(private vendaService: VendaService) {}

  ngOnInit(): void {
    this.listarVendas();
  }

  listarVendas(): void {
    this.vendaService.listarVendas().subscribe({
      next: (vendas) => this.vendas = vendas,
      error: (err) => console.error('Erro ao carregar vendas: ', err),
    });
  }
}
