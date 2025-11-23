-- CreateTable
CREATE TABLE "comidas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
