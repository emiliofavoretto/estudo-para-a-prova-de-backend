import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default prisma;

//Model de pegar todas comidas


//Model de pegar pelo id
export const listarUm = async (id) => {
  return await prisma.comidas.findUnique({
    where: { id },
  });
};

//Model do criar
export const criar = async (dados) => {
  const { id, ...dadosSemId } = dados;
  return await prisma.comidas.create({
    data: dadosSemId,
  });
};

//Model do delete
export const deletar = async (id) => {
  return await prisma.comidas.delete({
    where: { id },
  });
};

//Model do atualizar
export const atualizar = async (id, dados) => {
  return await prisma.comidas.update({
    where: { id },
    data: dados,
  });
};