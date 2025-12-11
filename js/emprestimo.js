const serverURL = `http://localhost:3333/api/emprestimos`;

/**
@returns
 */

async function listarEmprestimo() {
  const respostaAPI = await fetch(`${serverURL}`);

  if (!respostaAPI.ok) {
    console.error(
      "Erro na requisição: ",
      respostaAPI.status,
      await respostaAPI.text()
    );

    return;
  }

  const jsonEmprestimo = await respostaAPI.json();

  return jsonEmprestimo;
}

async function montarTabelaEmprestimos() {
  const listaDeEmprestimo = await listarEmprestimo();

  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  listaDeEmprestimo.forEach((emprestimo) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${emprestimo.idEmprestimo}</td>
            <td>${emprestimo.tituloLivro}</td>
            <td>${emprestimo.nomeAluno} ${emprestimo.sobrenomeAluno}</td>
            <td>${emprestimo.dataEmprestimo}</td>
            <td>${emprestimo.dataDevolucao}</td>
            <td>${emprestimo.statusEmprestimo}</td>
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
