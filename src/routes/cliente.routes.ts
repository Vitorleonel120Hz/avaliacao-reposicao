import {FastifyInstance} from "fastify";
import { prisma } from "../lib/prisma";

const clienteRoutes = async (app:FastifyInstance) =>{

app.get("/cliente", async () => {
  return prisma.cliente.findMany();
});

app.post('/cliente', async (request)=>{
    const {name} = request.body as {
        name:string,
    }

    const cliente = await prisma.cliente.create({
        data:{name}
    })
    return cliente
})

app.get('/cliente/:id', async (request,reply)=>{
    const { id } = request.params as { id: string }
   const cliente = await prisma.cliente.findUnique({
    where:{
        id: String(id)
    }
   });

   if(!cliente){
    return reply.status(404).send({mensagem:"Usuario não encontrado"})
   }
   reply.send(cliente)
})
}

export default clienteRoutes