import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contato } from '../contato.model';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato-delete',
  templateUrl: './contato-delete.component.html',
  styleUrls: ['./contato-delete.component.css']
})
export class ContatoDeleteComponent implements OnInit {

  contato: Contato = {
    conId: 0,
    conCelular: '',
    conTelefoneComercial: '',
    conEmail: ''
  };

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('conId');
    if (id) {
      this.contatoService.getById(+id).subscribe(contato => {
        this.contato = contato;
      });
    }
  }

  deleteContato(): void {
    this.contatoService.delete(this.contato.conId!).subscribe(() => {
      this.router.navigate(['/contatos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/contatos']);
  }
}
