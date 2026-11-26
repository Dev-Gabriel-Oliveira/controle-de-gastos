const canvasFluxo = document.getElementById("graficoFluxo")

const dadosFluxo = {
    labels: ["Jan", "Fev", "Mar", "Abr"],
    datasets: [
        {
            label: "Saldo acumulado",
            data: [2000, 4000, 7000, 10500],
            borderColor: "#185543",
            backgroundColor: "rgba(24, 85, 67, 0.15)",
            tension: 0.4,
            pointRadius: 3,
            fill: "origin"
        },

    ]
}

const graficoFluxo = new Chart(canvasFluxo, {
    type: "line",
    data: dadosFluxo,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding:{
                top: 5,
                bottom: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display:false
                }
            },
            y: {
                grid:{
                    color: "#edf0ee"
                },

                ticks: {
                    stepSize: 1000,
                    callback: function(valor) {
                        return "R$ " + (valor / 1000) + " mil"
                    }
                }
            }
        },

        plugins: {
            legend: {
                position: "top",
                align: "end",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  boxWidth: 8,
                  boxHeight: 8,
                  padding: 15,
                }
            },

            tooltip: {
                callbacks: {
                    label: function(context){
                        const valor = context.parsed.y;

                        return context.dataset.label + ": " + 
                        valor.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })
                    }
                 }
            }
        }
        
    }
})


//Grafico Lateral Receita X Despesas

const canvasAnalise = document.getElementById("graficoAnalise")

const dadosAnalise = {
    labels: ["Jan", "Fev", "Mar", "Abr"],
    datasets: [
        {
            label: "Receitas",
            data: [5000, 6000, 8000, 7000],
            borderColor: "#185543",
            backgroundColor: "#185543",
            borderRadius: 5,
            barPercentage: 0.8,
            categoryPercentage: 0.8
        },

        {
            label: "Despesas",
            data: [3000, 4000, 5000, 3500],
            borderColor: "#dc5555",
            backgroundColor: "#dc5555",
            borderRadius: 5,
             
        },
    ]
}

const graficoAnalise = new Chart(canvasAnalise, {
    type: "bar",
    data: dadosAnalise,

    options: {
        responsive: true,
        maintainAspectRatio: false,

        datasets:{
            bar: {
                barPercentage: 0.8,
                caregoryPercentage: 0.8
            }
        },

        layout: {
            padding:{
                top: 5,
                bottom: 0
            }
        },
        
        scales: {
            x: {
                grid: {
                    display:false
                }
            },
            y: {
                grid:{
                    color: "#edf0ee"
                },

                ticks: {
                    stepSize: 1000,
                    callback: function(valor) {
                        return "R$ " + (valor / 1000) + " mil"
                    }
                }
            }
        },

        plugins: {
            legend: {
                position: "top",
                align: "end",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  boxWidth: 8,
                  boxHeight: 8,
                  padding: 15,
                }
            },

            tooltip: {
                callbacks: {
                    label: function(context){
                        const valor = context.parsed.y;

                        return context.dataset.label + ": " + 
                        valor.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })
                    }
                 }
            }
        }
        
    }
})