import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from '../contato.model';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato-create',
  templateUrl: './contato-create.component.html',
  styleUrls: ['./contato-create.component.css']
})
export class ContatoCreateComponent implements OnInit {

  contato: Contato = {
    conId: 0,
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: ''
  };

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createContato(): void {
    this.contatoService.create(this.contato).subscribe(() => {
      this.router.navigate(['/contatos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/contatos']);
  }
}
