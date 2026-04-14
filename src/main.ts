import Fastify from 'fastify';
import  routes  from './routes';

const app = Fastify();

app.register(routes);

app.listen({ port: 3000 }).then(() => {
  console.log('Server rodando ');
});