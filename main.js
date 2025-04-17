// main.js
import { salvar, buscarTodos, editar, deletar } from "./crud.js";

// elementos do DOM
const nomeInput = document.getElementById("nome");
const idadeInput = document.getElementById("idade");
const lista = document.getElementById("lista");
const buscaInput = document.getElementById("busca");
const btnSalvar = document.getElementById("btnSalvar");

let idEditando = null;

// Cadastrar ou atualizar
btnSalvar.addEventListener("click", async (event) => {
  event.preventDefault();
  const nome = nomeInput.value.trim();
  const idade = idadeInput.value.trim();

  if (!nome || !idade) {
    alert("Preencha os dois campos!");
    return;
  }

  try {
    if (idEditando) {
      await editar(idEditando, nome, idade);
      idEditando = null;
      btnSalvar.textContent = "Salvar";
    } else {
      await salvar(nome, idade);
    }

    nomeInput.value = "";
    idadeInput.value = "";
    await atualizarLista(buscaInput.value.toLowerCase());
  } catch (err) {
    console.error("Erro ao salvar/atualizar:", err);
    alert("Ocorreu um erro ao salvar os dados.");
  }
});

// Filtrar enquanto digita
buscaInput.addEventListener("input", () =>
  atualizarLista(buscaInput.value.toLowerCase())
);

// Função para renderizar um único item
function renderItem(id, p, filtro) {
  if (!p.nome.toLowerCase().includes(filtro)) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span><strong>${p.nome}</strong> — ${p.idade} anos</span>
    <div>
      <button class="btn-editar">Editar</button>
      <button class="btn-excluir">Excluir</button>
    </div>
  `;

  // editar
  li.querySelector(".btn-editar").addEventListener("click", () => {
    nomeInput.value = p.nome;
    idadeInput.value = p.idade;
    idEditando = id;
    btnSalvar.textContent = "Atualizar";
  });

  // excluir
  li.querySelector(".btn-excluir").addEventListener("click", async () => {
    if (confirm("Excluir este cadastro?")) {
      try {
        await deletar(id);
        await atualizarLista(filtro);
      } catch (err) {
        console.error("Erro ao excluir:", err);
        alert("Ocorreu um erro ao excluir o cadastro.");
      }
    }
  });

  lista.appendChild(li);
}

// Função para listar dados no DOM, com filtro simples
async function atualizarLista(filtro = "") {
  try {
    const dados = await buscarTodos();
    lista.innerHTML = "";

    // Itera sobre os dados e aplica o filtro no nome
    for (let id in dados) {
      const pessoa = dados[id];

      // Filtro de nome
      if (pessoa.nome.toLowerCase().includes(filtro.toLowerCase())) {
        renderItem(id, pessoa, filtro);
      }
    }
  } catch (err) {
    console.error("Erro ao buscar dados:", err);
    alert("Não foi possível carregar a lista.");
  }
}

// Carregar lista ao abrir a página
window.addEventListener("load", () => atualizarLista());
