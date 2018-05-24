using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using WebApplication2.Models;

namespace WebApplication2.Service
{
    public class ClientService : IClienteService
    {
        private readonly List<Client> clientes;

        public ClientService()
        {
            this.clientes = new List<Client>
            {
                new Client(1, "Jose C Macoratti", "macoratti@yahoo.com", "(21) 9987-6666"),
                new Client(2,"Paulo Lima", "paulolima@yahoo.com",  "(31) 9787-3333" ),
                new Client(3, "Suzana Ribeiro", "suzana@net.com",   "(41) 8887-4444")
            };
        }

        public void AddCliente(Client item)
        {
            item.AdicionarId(clientes);
            this.clientes.Add(item);
        }

        public void DeleteCliente(int id)
        {
            var model = this.clientes.Where(m => m.Id == id).FirstOrDefault();
            this.clientes.Remove(model);

        }

        public bool ClienteExists(int id)
        {
            return this.clientes.Any(m => m.Id == id);
        }

        public Client GetCliente(int id)
        {
            return this.clientes.Where(m => m.Id == id).FirstOrDefault();

        }

        public List<Client> GetClientes()
        {
            return this.clientes.ToList();
        }

        public void UpdateCliente(Client item)
        {
            var model = this.clientes.Where(m => m.Id == item.Id).FirstOrDefault();

            model.AtualizarInformacoes(item.Nome, item.Email, item.Telefone);
        }
    }
}
