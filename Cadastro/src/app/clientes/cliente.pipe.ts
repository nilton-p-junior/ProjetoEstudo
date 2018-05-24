import { Pipe, PipeTransform } from '@angular/core';
import {Cliente} from './cliente.model';
 
@Pipe({
    name: 'filtroPorNome'
})
export class FiltroPorNome implements PipeTransform { 

    transform(clientes: Cliente[], digitado: string): Cliente[] {

        digitado = digitado.toLowerCase();
        return clientes.filter( cliente => cliente.nome.toLowerCase().includes(digitado));
    }
}