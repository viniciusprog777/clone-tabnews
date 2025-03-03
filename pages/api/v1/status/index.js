import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;");

  response
    .status(200)
    .json({ chave: "Alunos do curso.dev sâo acima da média" });
}

export default status;
