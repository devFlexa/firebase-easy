# Firebase Easy

Projeto com o objetivo de simplificar a comunicação com o Firebase, permitindo que desenvolvedores consigam ler e escrever dados de forma rápida e clara usando JavaScript.

---

## Objetivo

Facilitar o uso do Firebase abstraindo partes mais complexas da configuração e fornecendo exemplos práticos de:

- Conexão com o Firebase  
- Envio de dados  
- Leitura de dados  
- Organização básica do código  

---

## Tecnologias utilizadas

- JavaScript (ES Modules)  
- Firebase (Realtime Database ou Firestore)  
- HTML/CSS (opcional)

---

## Configuração

1. Crie um projeto no Firebase  
2. Acesse as configurações do projeto  
3. Copie as credenciais (config)

Exemplo:

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  databaseURL: "https://SEU_PROJETO.firebaseio.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};
```

---

## Como usar

### Enviar dados

```js
import { salvar } from "./firebase.js";

salvar("usuarios", {
  nome: "Thiago",
  idade: 30
});
```

---

### Buscar dados

```js
import { buscar } from "./firebase.js";

const dados = await buscar("usuarios");
console.log(dados);
```

---

## Ideia principal

O projeto foi pensado para:

- Evitar código repetitivo  
- Simplificar o uso do Firebase  
- Servir como base para projetos maiores  
- Apoiar o ensino de programação e APIs  

---

## Estrutura sugerida

```
/firebase-easy
│── firebase.js
│── app.js
│── index.html
│── style.css
```

---

## Possíveis melhorias

- Autenticação de usuários  
- Validação de dados  
- Integração com APIs externas  
- Transformar em biblioteca reutilizável  

---

## Uso educacional

Esse projeto pode ser utilizado para:

- Introdução ao Firebase  
- Ensino de consumo de APIs  
- Prática com JavaScript modular  
- Projetos simples com banco em nuvem  

---

## Licença

Uso livre para fins de estudo e projetos pessoais.
