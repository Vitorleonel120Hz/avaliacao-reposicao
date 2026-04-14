import { FastifyInstance } from 'fastify';
import  cliente  from './cliente.routes';
import  produto  from './produtos.routes';


const routes = async (app: FastifyInstance) => {
  app.register(cliente, {
  });
  app.register(produto, {
  });

}

export default routes