import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesListaComponent } from './clientes-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe.component';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteService } from './cliente.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import {FiltroPorNome} from './cliente.pipe';


@NgModule({ 
    imports : [ 
        CommonModule,
        ClienteRoutingModule,
        FormsModule,
        ReactiveFormsModule    
    ],
     declarations : [
         ClientesListaComponent,
         ClienteDetalheComponent,
         FiltroPorNome
     ],
     exports : [ ClientesListaComponent,FiltroPorNome],
     providers: [
         ClienteService
     ]
})
export class ClientesModule {}