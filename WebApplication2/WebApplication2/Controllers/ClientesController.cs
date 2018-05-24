using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using WebApplication2.Models;
using WebApplication2.Service;



namespace WebApplication2.Controllers
{
    [Route("clientes")]
    public class ClientesController : Controller
    {

        private readonly IClienteService service;

        public ClientesController(IClienteService service)
        {
            this.service = service;
        }

        // GET api/values/5

        [HttpGet]
        public IActionResult Get()
        {
            var model = service.GetClientes();

            var outputModel = ToOutputModel(model);
            return Ok(outputModel);
        }

        ////// GET api/values
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        [HttpGet("{id}", Name = "GetCliente")]
        public IActionResult Get(int id)
        {
            var model = service.GetCliente(id);
            if (model == null)
                return NotFound();
            var outputModel = ToOutputModel(model);
            return Ok(outputModel);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Create([FromBody]ClienteInputModel inputModel)
        {
            if (inputModel == null)


                return BadRequest();
            var model = ToDomainModel(inputModel);
            service.AddCliente(model);

            var outputmodel = ToOutputModel(model);
            return CreatedAtRoute("GetCliente", new { id = outputmodel.id }, outputmodel);


        }


        // PUT api/values/5
        [HttpPut]
        public IActionResult Update([FromBody] ClienteInputModel inputModel)
        {
            if (inputModel == null || inputModel.id == 0)
                return BadRequest();

            if (!service.ClienteExists(inputModel.id))
                return NotFound();

            var model = ToDomainModel(inputModel);
            service.UpdateCliente(model);

            return NoContent();


        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (!service.ClienteExists(id))
                return NotFound();

            service.DeleteCliente(id);

            return NoContent();
        }


        private List<ClienteOutputModel> ToOutputModel(List<Client> model)
        {
            return model.Select(item => ToOutputModel(item)).ToList();

        }

        private Client ToDomainModel(ClienteInputModel inputModel)
        {
            return new Client(inputModel.id,
                inputModel.nome,
                inputModel.email,
                inputModel.telefone);
        }

        private ClienteOutputModel ToOutputModel(Client model)
        {
            return new ClienteOutputModel
            {
                id = model.Id,
                nome = model.Nome,
                email = model.Email,
                telefone = model.Telefone
            };
        }

        private ClienteInputModel ToInputModel(Client model)
        {
            return new ClienteInputModel
            {
                id = model.Id,
                nome = model.Nome,
                email = model.Email,
                telefone = model.Telefone

            };
        }
    }
}
