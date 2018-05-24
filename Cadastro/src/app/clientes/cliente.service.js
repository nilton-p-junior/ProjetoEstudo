"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var clientes_mock_1 = require("./clientes-mock");
var ClienteService = /** @class */ (function () {
    function ClienteService() {
    }
    ClienteService.prototype.getClientes = function () {
        return Promise.resolve(clientes_mock_1.CLIENTES);
    };
    ClienteService.prototype.getCliente = function (id) {
        return this.getClientes()
            .then(function (clientes) { return clientes.find(function (cliente) { return cliente.id === id; }); });
    };
    ClienteService = __decorate([
        core_1.Injectable()
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map