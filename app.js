// Array para armazenar os nomes
const amigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim(); // Remove espaços em branco no início e no fim

  if (nome) { // Verifica se o nome não está vazio
    amigos.push(nome); // Adiciona o nome ao array
    atualizarListaDeAmigos(); // Atualiza a lista na tela
    input.value = ""; // Limpa o campo de entrada
  } else {
    alert("Por favor, digite um nome válido.");
  }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaDeAmigos() {
  const lista = document.getElementById('lista-de-amigos');
  lista.innerHTML = ""; // Limpa a lista existente

  amigos.forEach((amigo) => {
    const itemLista = document.createElement('li');
    itemLista.textContent = amigo;
    lista.appendChild(itemLista);
  });
}

// Função para sortear um nome aleatório
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
  const nomeSorteado = amigos[indiceSorteado]; // Obtém o nome sorteado

  // Exibe o nome sorteado na tela
  const elementoNomeSorteado = document.getElementById('resultado');
  elementoNomeSorteado.textContent = `Nome sorteado: ${nomeSorteado}`;
}

// Adiciona eventos aos botões
document.getElementById('adicionar-btn').addEventListener('click', adicionarAmigo);
document.getElementById('sortear-btn').addEventListener('click', sortearAmigo);