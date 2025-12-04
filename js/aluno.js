const serverURL = `http://localhost:3333/api/alunos`;

/**
@returns
 */

async function listarAlunos() {
  const respostaAPI = await fetch(`${serverURL}`);

  if (!respostaAPI.ok) {
    console.error(
      "Erro na requisição: ",
      respostaAPI.status,
      await respostaAPI.text()
    );

    return;
  }

  const jsonAlunos = await respostaAPI.json();

  return jsonAlunos;
}

async function montarTabelaAlunos() {
  const listaDeAlunos = await listarAlunos();

  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  listaDeAlunos.forEach((aluno) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${aluno.idAluno}</td>
            <td>${aluno.ra}</td>
            <td>${aluno.nome} ${aluno.sobrenome}</td>
            <td>${aluno.dataNascimento}</td>
            <td>${aluno.endereco}</td>
            <td>${aluno.email}</td>
            <td>${aluno.celular}</td>
            <td>
                <img src='/assets/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png' alt='remover' class='btn-delete'/>
                <img src='/assets/edit_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png' alt='editar' class='btn-edit'/>
            </td>
        `;

    tbody.appendChild(tr);

    tr.querySelector(".btn-delete").addEventListener("click", () =>
      alert("deletar")
    );
    tr.querySelector(".btn-edit").addEventListener("click", () =>
      alert("editar")
    );
  });
}
