// Dados mockados (substitua por uma API no futuro)
const empresas = [
    { id: 1, nome: "Pizzaria do Zé", categoria: "Pizzaria", whatsapp: "11999999999" },
    { id: 2, nome: "Lanchonete da Maria", categoria: "Lanchonete", whatsapp: "11988888888" },
];

const produtos = [
    { id: 1, empresaId: 1, nome: "Pizza Calabresa", preco: 35.0 },
    { id: 2, empresaId: 1, nome: "Pizza Marguerita", preco: 40.0 },
    { id: 3, empresaId: 2, nome: "X-Burger", preco: 20.0 },
];

// Função para carregar empresas
function carregarEmpresas() {
    const listaEmpresas = document.getElementById("lista-empresas");
    listaEmpresas.innerHTML = empresas.map(empresa => `
        <div class="empresa" data-id="${empresa.id}">
            <h3>${empresa.nome}</h3>
            <p>Categoria: ${empresa.categoria}</p>
            <p>WhatsApp: ${empresa.whatsapp}</p>
        </div>
    `).join("");
}

// Função para carregar produtos
function carregarProdutos(empresaId) {
    const listaProdutos = document.getElementById("lista-produtos");
    const produtosDaEmpresa = produtos.filter(produto => produto.empresaId === empresaId);
    listaProdutos.innerHTML = produtosDaEmpresa.map(produto => `
        <div class="produto">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        </div>
    `).join("");
}

// Evento para selecionar uma empresa
document.getElementById("lista-empresas").addEventListener("click", (event) => {
    const empresa = event.target.closest(".empresa");
    if (empresa) {
        const empresaId = parseInt(empresa.getAttribute("data-id"));
        carregarProdutos(empresaId);
    }
});

// Evento para mostrar campo de troco se o pagamento for em dinheiro
document.getElementById("pagamento").addEventListener("change", (event) => {
    const trocoDiv = document.getElementById("troco");
    trocoDiv.style.display = event.target.value === "dinheiro" ? "block" : "none";
});

// Evento para enviar o pedido
document.getElementById("formulario-pedido").addEventListener("submit", (event) => {
    event.preventDefault();
    const endereco = document.getElementById("endereco").value;
    const pagamento = document.getElementById("pagamento").value;
    const troco = document.getElementById("valor-troco").value;

    alert(`Pedido enviado!\nEndereço: ${endereco}\nPagamento: ${pagamento}\nTroco para: ${troco || "Não precisa"}`);
});

// Inicialização
carregarEmpresas();