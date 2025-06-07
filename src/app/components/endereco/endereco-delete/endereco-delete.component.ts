import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { Endereco } from '../endereco.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-endereco-delete',
  templateUrl: './endereco-delete.component.html',
  styleUrls: ['./endereco-delete.component.css']
})
export class EnderecoDeleteComponent implements OnInit {

  endereco!: Endereco;

  constructor(
    private enderecoService: EnderecoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('endId'));
    this.enderecoService.readById(id).subscribe(endereco => {
      this.endereco = endereco;
    });
  }

  deleteEndereco(): void {
    if (this.endereco.endId !== undefined) {
      this.enderecoService.delete(this.endereco.endId).subscribe(() => {
        this.enderecoService.showMessage('Endereço excluído com sucesso!');
        this.router.navigate(['/enderecos']);
      });
    } else {
      this.enderecoService.showMessage('ID do endereço não encontrado.');
    }
  }
  
  
  
  cancel(): void {
    this.router.navigate(['/enderecos']);
  }
}
