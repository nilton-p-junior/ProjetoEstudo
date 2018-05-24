import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';
import { Observable } from 'rxjs/Observable';
import { ObjectUnsubscribedError } from 'rxjs';
import { DialogConfirmService } from './../dialogconfirm.service';

@Component({
    moduleId: module.id,
    selector: 'cliente-detalhe',
    templateUrl: 'cliente-detalhe.component.html',
    providers: [Cliente]
})
export class ClienteDetalheComponent {


    clientes: Cliente[] = [];
    dialogconfirmDialog: DialogConfirmService = new DialogConfirmService();
    meuForm : FormGroup;
    userForm : FormGroup;

    //    private isNovo : boolean = true;

    constructor(private service: ClienteService,
        private cliente: Cliente,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
        // ,private fb: FormBuilder
    ) {


        this.router = router;
        this.service = service;
        this.route = route;

        this.route.params.subscribe(params => {

            if (params.id) {
                this.service.buscaPorId(params.id)
                    .subscribe(res => {
                        this.cliente = res;
                    });
            }
        })


        // this.meuForm = fb.group({
        //     nome: ['', Validators.compose([Validators.required])],
        //     telefone : ['',Validators.compose([ Validators.required, Validators.minLength(5)] ) ]

        // });
    }


         ngOnInit() { 

            this.userForm = new FormGroup({
                'email' : new FormControl(this.cliente.email , [
                    Validators.email
                ] )

            });


         }




    //           this.cliente = new Cliente(0,'','','',);
    //         this.route.params.forEach((params: Params) =>{

    //                  let id: number = +params['id'];


    //           if(id){


    //        //    this.isNovo = false;
    //            this.service.buscaPorId(id)
    //              .subscribe((cliente: Cliente[])=> {
    //                    console.log(cliente);

    //                    this.clientes.find(cliente => cliente.id == id);

    //                 //    cliente.find(cliente => cliente.id == id)
    //              });
    //          } 
    //         });



    //  }



    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
            
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    //  onSubmit() : void {
    //      if (this.isNovo) {
    //        console.log('cadastrar', this.cliente);
    //    } else {
    //         console.log('alterar');
    //     }

    //  } 


    Cadastrar() {

        console.log(this.clientes);

        this.service
            .Cadastra(this.cliente).subscribe(cliente => {

                this.clientes = cliente;

                console.log('Cliente incluido com Sucesso');
                this.dialogconfirmDialog.confirm('Cliente Cadastrador com Suecesso: ' + '!');

            }, erro => console.log(erro));

    }

    Atualiza() {
        debugger;
        this.service
            .Atualizar(this.cliente)
            .subscribe(() => {

                
                let clientesNovos = this.clientes.slice(0);
                let indice = clientesNovos.indexOf(this.cliente);
                clientesNovos.splice(indice, 1);
                this.clientes = clientesNovos;

                console.log("Cliente Atulizado");

                this.dialogconfirmDialog.confirm('Cliente Atualizado com Sucesso' + '!');
                
            }, erro => {

                console.log(erro);
                console.log('Não foi possivel Atualizar cliente')

            });


    }


}
