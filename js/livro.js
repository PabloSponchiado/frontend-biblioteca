const serverURL = `http://localhost:3333/api/livros`;

/**
@returns
 */

async function listarLivros() {
  const respostaAPI = await fetch(`${serverURL}`);

  if (!respostaAPI.ok) {
    console.error(
      "Erro na requisição: ",
      respostaAPI.status,
      await respostaAPI.text()
    );

    return;
  }

  const jsonLivros = await respostaAPI.json();

  return jsonLivros;
}

async function montarTabelaLivros() {
  const listaDeLivros = await listarLivros();

  const tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  listaDeLivros.forEach((livro) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
            <td>${livro.idLivro}</td>
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.editora}</td>
            <td>${livro.anoPublicacao}</td>
            <td>${livro.isbn}</td>
            <td>${livro.quantTotal}</td>
            <td>${livro.quantDisponivel}</td>
            <td>R$ ${livro.valorAquisicao}</td>
            <td>${livro.statusLivroEmprestado}</td>
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
