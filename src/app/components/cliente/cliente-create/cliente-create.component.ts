import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model'; // Ajuste o caminho se precisar
import { Router } from '@angular/router';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    cliNome: '',
    cliCpf: '',
    cliEmail: '',
    cliTelefone: ''
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado com sucesso!');
      this.router.navigate(['/clientes']);
    }, err => {
      this.clienteService.showMessage('Erro ao criar cliente.');
      console.error(err);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
