const canvasFluxo = document.getElementById("graficoFluxo")

const dadosFluxo = {
    labels: ["Jan", "Fev", "Mar", "Abr"],
    datasets: [
        {
            label: "Receitas",
            data: [5000, 6000, 8000, 7000],
            borderColor: "#185543",
            backgroundColor: "#185543",
            tension: 0.4,
            pointRadius: 3
        },

        {
            label: "Despesas",
            data: [3000, 4000, 5000, 3500],
            borderColor: "#dc5555",
            backgroundColor: "#dc5555",
             tension: 0.4,
            pointRadius: 3
        }

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
                bootom: 0
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
                        return "R$" + (valor / 1000) + "mil"
                    }
                }
            }
        },

        plugins: {
            legend: {
                posotion: "top",
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
                        valor.toLocaleString("pt-Br", {
                            style: "currency",
                            currency: "BRL"
                        })
                    }
                 }
            }
        }
        
    }
})