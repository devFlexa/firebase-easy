// crud.js
import { database } from "./firebaseConfig.js";
import {
  ref,
  push,
  set,
  get,
  child,
  update,
  remove
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const pessoasRef = ref(database, "pessoas");

// Salvar – grava e espera a conclusão
export async function salvar(nome, idade) {
  const novoItemRef = await push(pessoasRef);
  await set(novoItemRef, { nome, idade });
}

// Buscar todos – espera o snapshot e retorna os dados
export async function buscarTodos() {
  const snapshot = await get(pessoasRef);
  return snapshot.exists() ? snapshot.val() : {};
}

// Editar – atualiza campos e espera a conclusão
export async function editar(id, nome, idade) {
  const itemRef = child(pessoasRef, id);
  await update(itemRef, { nome, idade });
}

// Deletar – remove o nó e espera a conclusão
export async function deletar(id) {
  const itemRef = child(pessoasRef, id);
  await remove(itemRef);
}



// Resumo das principais funções do SDK modular do Firebase Realtime Database:

// ref(database, path?)
// Cria um ponteiro (Reference) para um nó do banco de dados, na raiz ou em um caminho específico.

// push(ref)
// Gera um novo filho com chave única de forma automática e retorna um Reference a esse nó.

// set(ref, value)
// Grava ou substitui completamente o valor do nó apontado por ref com o objeto fornecido.

// get(ref)
// Lê os dados de ref uma única vez e retorna uma Promise que resolve num DataSnapshot.

// child(ref, childPath)
// Cria um Reference para um filho de ref, sem precisar concatenar strings manualmente.

// update(ref, values)
// Atualiza somente as propriedades indicadas em values, preservando os demais dados do nó.

// remove(ref)
// Exclui completamente o nó referenciado (e todos os seus filhos).