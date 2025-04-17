// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHTaBXzJUdwRKtUNL99t1Uc6LXaRYuGZw",
  authDomain: "temp-e-humid.firebaseapp.com",
  databaseURL: "https://temp-e-humid-default-rtdb.firebaseio.com",
  projectId: "temp-e-humid",
  storageBucket: "temp-e-humid.firebasestorage.app",
  messagingSenderId: "839701424439",
  appId: "1:839701424439:web:cea4e8876b66c42060d2b2",
  measurementId: "G-HC0ZCE849X",
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exporta apenas o banco de dados
export { database };
