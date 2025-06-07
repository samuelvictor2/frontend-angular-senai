import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../endereco.model';
import { EnderecoService } from '../endereco.service';

@Component({
  selector: 'app-endereco-update',
  templateUrl: './endereco-update.component.html',
  styleUrls: ['./endereco-update.component.css']
})
export class EnderecoUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('endId');
    if (id) {
      this.enderecoService.readById(+id).subscribe(endereco => {
        this.endereco = endereco;
      });
    }
  }

  updateEndereco(): void {
    this.enderecoService.update(this.endereco).subscribe(() => {
      this.enderecoService.showMessage('Endereço atualizado com sucesso!');
      this.router.navigate(['/enderecos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/enderecos']);
  }
}
