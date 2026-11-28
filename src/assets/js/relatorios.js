const canvasResumo = document.getElementById("graficoResumo")
const canvasComparativo = document.getElementById("graficoComparativo")
const canvasCategoria = document.getElementById("graficoCategoria")

function formatarReais(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

function criarOpcoes(){
    return {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: { display: false },
            ticks:{maxTicksLimit: 5, font: {
                size:11
            }}
        },
        y: {
            beginAtZero: true,
            grid: { color: "#edf0ee" },
            ticks: {
                stepSize: 1000,
                font: {size:11 },
                callback: function (valor) {
                    return "R$" + (valor / 1000) + "mil"
                }
            }
        }
    },
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: function (context) {
                     return context.dataset.label + ": " + formatarReais(context.parsed.y)
                }
            }
        }
    }
    }
}


// Grafico Reusmo financeiro -----------------

const dadosResumoFinanceiro = {
    labels: ["01/11", "08/11", "15/11", "22/11", "30/11"],
    datasets: [
        {
            label: "Entradas",
            data: [2000, 3800, 3000, 4100, 4000, 4000, 4900],
            borderColor: "#166534",
            backgroundColor: "rgba(22, 101, 52, 0.25)",
            tension: 0.4,
            pointRadius: 3,
            fill: true
        },

        {
            label: "Saídas",
            data: [1200, 1100, 1900, 2100, 1400, 2100, ],
            borderColor: "#86d19a",
            backgroundColor: "rgba(134, 209, 154, 0.5)",
            tensio: 0.4,
            pointRadius:3 ,
            fill: true
        }

    ]
}

const graficoResumo = new Chart(canvasResumo, {
    type:"line",
    data: dadosResumoFinanceiro,
    options: criarOpcoes()
})

// Comparativo Mensal ---------------

const dadosComparativo = {
    labels:["Set", "Out", "Nov"],
    datasets: [
        {
            label: "Entradas",
            data: [4500, 4900, 4800,],
            borderColor: "#166534",
            backgroundColor: "#166534",
            borderRadius: 5,
            barPercentage: 0.8,
            categoryPercentage: 0.8
        },

        {
            label: "Saídas",
            data: [3000, 2900, 3100,],
            borderColor: "#86d19a",
            backgroundColor: "#86d19a",
            borderRadius: 5,
            barPercentage: 0.8,
            categoryPercentage: 0.8
        }
    ]
}

const graficoComparativoMensal = new Chart(canvasComparativo, {
    type:"bar",
    data:dadosComparativo,
    options: criarOpcoes(), 
})

// por categoria ----------------------

const coresCategorias = ["#166534", "#22a35a", "#7ccf95", "#a8dfb8", "#d3efdb"]

const dadosCategoria = {
    labels: ["Alimentação", "Transporte","Lazer", "Moradia", "Outros"],
    datasets: [
        {
         data: [950, 640, 610, 580, 430],
         backgroundColor: coresCategorias,
         borderWidth: 0
         }
       
    ]
}

const graficoCategoria = new Chart(canvasCategoria, {
    type:"doughnut",
    data: dadosCategoria,
    options: {
        responsive: true,
    maintainAspectRatio: false,
    cutout: "68%",
    plugins: {
        legend:{
            display: false
        },
        tooltip: {
            callbacks: {
                label: function(context){
                    return context.label + ": " + formatarReais(context.parsed)
                }
            }
        }
    }
    }
    
})