import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';

import {DialogConfirmService} from './../dialogconfirm.service';

@Component({
    moduleId: module.id,
    selector: 'clientes-lista',
    templateUrl: 'clientes-lista.component.html'
})
export class ClientesListaComponent  {

    clientes: Cliente[] = [];

    dialogconfirmDialog : DialogConfirmService = new DialogConfirmService();
    podeDeletar : boolean;

    constructor(public service: ClienteService) { 


        
            this.service.Lista()
    
    
                .subscribe(clientes => {
                    this.clientes = clientes;
    
                }, erro => {
    
    
                    console.log(erro)
                });
        }

    

    // ngOnInit() {}
        // this.service.Lista()


        //     .subscribe(clientes => {
        //         this.clientes = clientes;

        //     }, erro => {


        //         console.log(erro)
        //     });
    

    // constructor(private service : ClienteService){}

    // ngOnInit() : void {
    //     this.service.getClientes()
    //     .then((clientes : Cliente[]) => {
    //         this.clientes = clientes;
    //     }).catch(err => console.log(err));
    //  }

        remove(cliente : Cliente)
       {
          
            this.dialogconfirmDialog.confirm('Deseja Excluir o cliente: ' + cliente.nome + '?');
            
            
            this.service.remove(cliente)
            .subscribe( 
                () =>   {

                    
                    
                    let novosClientes = this.clientes.slice(0);
                   let indice = novosClientes.indexOf(cliente);
                   novosClientes.splice(indice,1);
                   this.clientes = novosClientes;
                   console.log(cliente);
                   console.log('Cliente Removido com sucesso');
                    
                
                  
                },
            
                erro => {
                    console.log(erro);
                    console.log('Não foi possivel remover o Cliente');
                }
           );
        
        
       }

   
 

    }

