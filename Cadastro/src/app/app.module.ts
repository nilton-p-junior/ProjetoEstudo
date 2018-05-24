import {DialogConfirmService} from '././dialogconfirm.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientesModule } from './clientes/clientes.module';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ClientesModule,
        HttpClientModule,
        HttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        DialogConfirmService
        
    ]
})
export class AppModule {}