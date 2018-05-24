using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;

namespace WebApplication2.Service
{
    public interface IClienteService
    {
        List<Client> GetClientes();
        Client GetCliente(int id);
        void AddCliente(Client item);
        void UpdateCliente(Client item);
        void DeleteCliente(int id);
        bool ClienteExists(int id);
    }
}
