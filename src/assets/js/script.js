const inputDescricao =document.querySelector("#descricao")
const campoValor = document.querySelector("#valor")
const campoTipo = document.querySelector("#tipo")
const botaoAdicionar = document.querySelector(".botao-adicionar")
const saldoAtual = document.querySelector(".valor-saldo")
const valorReceita = document.querySelector(".total-receitas")
const valorDespesa = document.querySelector(".total-despesas")
const listaMovimentacoes = document.querySelector(".lista-movimentacoes")
const mensagemErro = document.querySelector(".mensagem-erro")
const dataAtual = document.querySelector(".data")


const valorFormatado = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    })

const movimentacao = JSON.parse(localStorage.getItem("movimentacao")) || []

function adicionarMovimentacao() {
    
    const descricao = inputDescricao.value
    const valor = Number(campoValor.value.replace(",", "."))
    const tipo = campoTipo.value
    const data = dataAtual.value

    if(descricao.trim() === "" || isNaN(valor) || data === ""){
        mensagemErro.textContent = "Preencha os campos corretamente"
        return
    } 
   mensagemErro.textContent=""

    const novaMovimentacao = {
    descricao:descricao,
    valor: valor,
    tipo:tipo,
    data:data
    }
    
    movimentacao.push(novaMovimentacao)

    salvarMovimentacoes()

    criarMovimentacao(novaMovimentacao)
    
    atualizarResumo()

    inputDescricao.value = ""
    campoValor.value = ""
    dataAtual.value = ""
    
    console.log(movimentacao)
}

botaoAdicionar.addEventListener("click", adicionarMovimentacao)

function criarMovimentacao(item) {
    const adicionarLista = document.createElement("li")
    adicionarLista.classList.add("movimentacao")
   
    const descricao = document.createElement("span")
    descricao.textContent = item.descricao
    descricao.classList.add("descricao-movimentacao")
    
    const tipo = document.createElement("span")
    tipo.textContent = item.tipo
    tipo.classList.add("tipo-movimentacao")

    const valor = document.createElement("span")
    valor.textContent = item.valor
    valor.classList.add("valor-movimentacao")

    const data = document.createElement("span")
    const partesData = item.data.split("-")
    data.textContent = `${partesData[2]}/${partesData[1]}/${partesData[0]}`
    data.classList.add("data-movimentacao")

    const botaoExcluir = document.createElement("button")
    botaoExcluir.textContent = "Excluir"
    botaoExcluir.classList.add("botao-excluir")
    
    botaoExcluir.addEventListener("click", function(){
      const index = movimentacao.indexOf(item)
    
      movimentacao.splice(index, 1)

      salvarMovimentacoes()
      adicionarLista.remove()
    atualizarResumo()
    })

    if(item.tipo === "receita") {
        tipo.textContent = "Receita"
        tipo.classList.add("receita-historico")
        valor.classList.add("valor-receita")
        valor.textContent = `+ ${valorFormatado.format(item.valor)}`
    } else{
        tipo.textContent = "Despesa"
        tipo.classList.add("despesa-historico")
        valor.classList.add("valor-despesas")
        valor.textContent = `- ${valorFormatado.format(item.valor)}`
    }

    
    adicionarLista.appendChild(descricao)
    adicionarLista.appendChild(tipo)
    adicionarLista.appendChild(valor)
    adicionarLista.appendChild(data)
    adicionarLista.appendChild(botaoExcluir)

    listaMovimentacoes.appendChild(adicionarLista)
}

function atualizarResumo() {
    let totalReceita = 0
    let totalDespesas = 0

    movimentacao.forEach(function(item){
    
        if(item.tipo === "receita"){
            totalReceita = totalReceita + item.valor
        } else{
            totalDespesas = totalDespesas + item.valor
        }

        
    })

    const saldo = totalReceita - totalDespesas

    valorReceita.textContent = valorFormatado.format(totalReceita) 
    valorDespesa.textContent =valorFormatado.format(totalDespesas) 
    saldoAtual.textContent = valorFormatado.format(saldo) 
}

function salvarMovimentacoes(){
    localStorage.setItem("movimentacao", JSON.stringify(movimentacao))
}

movimentacao.forEach(function(item){
   criarMovimentacao(item)
})

atualizarResumo()