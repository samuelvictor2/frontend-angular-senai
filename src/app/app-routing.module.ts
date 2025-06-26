import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component'; // ✅ Adicionado
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoDeleteComponent } from './components/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { FornecedorReadComponent } from './components/fornecedor/fornecedor-read/fornecedor-read.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './components/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ContatoReadComponent } from './components/contato/contato-read/contato-read.component';
import { ContatoCreateComponent } from './components/contato/contato-create/contato-create.component';
import { ContatoUpdateComponent } from './components/contato/contato-update/contato-update.component';
import { ContatoDeleteComponent } from './components/contato/contato-delete/contato-delete.component';
import { EnderecoReadComponent } from './components/endereco/endereco-read/endereco-read.component';
import { EnderecoCreateComponent } from './components/endereco/endereco-create/endereco-create.component';
import { EnderecoUpdateComponent } from './components/endereco/endereco-update/endereco-update.component';
import { EnderecoDeleteComponent } from './components/endereco/endereco-delete/endereco-delete.component';

const routes: Routes = [
  // ✅ Rota de login e redirecionamento padrão
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: "home", component: HomeComponent },
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/update/:proId", component: ProductUpdateComponent },
  { path: "products/delete/:proId", component: ProductDeleteComponent },

  { path: "fpagamentos", component: FormaPagamentoCrudComponent },
  { path: "fpagamentos/create", component: FormaPagamentoCreateComponent },
  { path: "fpagamentos/delete/:fpgId", component: FormaPagamentoDeleteComponent },
  { path: "fpagamentos/update/:fpgId", component: FormaPagamentoUpdateComponent },

  { path: "fornecedores", component: FornecedorReadComponent },
  { path: "fornecedores/create", component: FornecedorCreateComponent },
  { path: "fornecedores/update/:forId", component: FornecedorUpdateComponent },
  { path: "fornecedores/delete/:forId", component: FornecedorDeleteComponent },

  { path: 'clientes', component: ClienteCrudComponent },
  { path: 'clientes/read', component: ClienteReadComponent },
  { path: 'clientes/create', component: ClienteCreateComponent },
  { path: 'clientes/update/:cliId', component: ClienteUpdateComponent },
  { path: 'clientes/delete/:cliId', component: ClienteDeleteComponent },

  { path: 'contatos', component: ContatoReadComponent },
  { path: 'contatos/create', component: ContatoCreateComponent },
  { path: 'contatos/delete', component: ContatoDeleteComponent },
  { path: 'contatos/update', component: ContatoUpdateComponent },

  { path: 'enderecos', component: EnderecoReadComponent },
  { path: 'enderecos/create', component: EnderecoCreateComponent },
  { path: 'enderecos/update/:endId', component: EnderecoUpdateComponent },
  { path: 'enderecos/delete/:endId', component: EnderecoDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
