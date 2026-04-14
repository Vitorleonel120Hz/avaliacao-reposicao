import {FastifyInstance} from "fastify";
import { prisma } from "../lib/prisma";
import { Decimal } from "@prisma/client/runtime/index-browser";

const produtoRoutes = async (app:FastifyInstance) => {
    


app.get("/produtos", async () => {
  return prisma.produto.findMany();
});

app.post('/produtos', async (request)=>{
    const {name,preco} = request.body as {
        name:string,
        preco:Decimal
    }

    const produto = await prisma.produto.create({
        data:{name,preco}
    })
    return produto
})

app.get('/produtos/:id', async (request,reply)=>{
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


export default produtoRoutes