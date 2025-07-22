import { Component } from '@angular/core';
import { VendaDTO } from '../venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html',
})
export class VendaCreateComponent {
  venda: VendaDTO = {
    clienteId: 0,
    itens: []
  };

  constructor(private vendaService: VendaService) {}

  adicionarItem() {
    this.venda.itens.push({ produtoId: 0, quantidade: 1 });
  }

  criarVenda() {
    this.vendaService.criarVenda(this.venda).subscribe({
      next: () => alert('Venda registrada com sucesso!'),
      error: (err) => alert('Erro ao registrar venda: ' + err.message)
    });
  }
}