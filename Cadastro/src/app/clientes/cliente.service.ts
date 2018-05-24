import { Injectable } from '@angular/core';

import { Cliente } from './cliente.model';
import { CLIENTES } from './clientes-mock';
import { Http, Headers, Response } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';
import { ClientesListaComponent } from './clientes-lista.component';
import { ClientesModule } from './clientes.module';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

 //import { ReturnStatement } from '@angular/compiler';


@Injectable()
export class ClienteService {

  url: string = 'http://localhost:51680/clientes';
  headers: Headers;
  configUrl = 'assents/config.json';
  // http: Http;

  constructor(private http: Http, private httpClient: HttpClient) {

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');


  }


    getClientes(): Promise<Cliente[]> {
      return Promise.resolve(CLIENTES);
    }

    getCliente(id: number): Promise<Cliente> {
    return this.getClientes()
      .then((clientes: Cliente[]) => clientes.find(cliente => cliente.id === id));
  }




  Cadastra(cliente: Cliente): Observable<any> 
  {
  
    
   
      return this.http.post(this.url,  cliente).map(res => <any>res);

    

  }


  Atualizar(cliente : Cliente): Observable<any>
  {

      return this.http.put(this.url, cliente).map(res => res.json());

  }



    Lista(): Observable<any> {

     return this.http.get(this.url)
       .map((res: any) => {
        
        
         return <any>res.json()
       })
       .catch((err: any) => {
         return Observable.throw(err);
         // simple logging, but you can do a lot more, see below
     });
   }



  remove(cliente : Cliente): Observable<Response>
  {

    return this.http.delete(this.url +'/'+ cliente.id).map(res => res.json());

  }

   buscaPorId(id: number) : Observable<any>
   {
     

     return this.http.get(this.url + "/" + id).map(res => <any>res.json());

   }




}



export class MensagemCadastro {
  mensagem: string;
  inclusao: boolean;

  constructor(mensagem: string, inclusao: boolean) {
    this.mensagem = mensagem;
    this.inclusao = inclusao;

  }
}