import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-update',
  templateUrl: './fornecedor-update.component.html',
  styleUrls: ['./fornecedor-update.component.css']
})
export class FornecedorUpdateComponent implements OnInit {

  fornecedor: Fornecedor = {
    forId: 0,
    forNomeFantasia: '',
    forCnpj: '',
    forRazaoSocial: ''
  };

  constructor(
  private fornecedorService: FornecedorService,
  private router: Router,              // <- ESSENCIAL
  private route: ActivatedRoute
) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('forId');
    if (id) {
      this.fornecedorService.readById(+id).subscribe(fornecedor => {
        this.fornecedor = fornecedor;
      });
    }
  }

  updateFornecedor(): void {
    this.fornecedorService.update(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor atualizado com sucesso!');
      this.router.navigate(['/fornecedores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']);
  }
}
