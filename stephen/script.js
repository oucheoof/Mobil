const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Overall Average', 'Millennials', 'Baby Boomers', 'Gen Z'],
        datasets: [{
            label: 'Average Phone Usage Time (hours)',
            data: [4.42, 3.42, 2.27, 9],
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: true,
                    color: function(context) {
                        if (context.tick && context.tick.value === 0) {
                            return 'rgba(0,0,0,1)'; // Color of the axis
                        }
                        return 'rgba(0, 0, 0, 0.1)'; // Color of the grid lines
                    }
                }
            },
            x: {
                grid: {
                    display: false // Hide x-axis grid lines
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black' // Color of the legend labels
                }
            }
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        },
        elements: {
            bar: {
                backgroundColor: 'white' // Set the bar background color
            }
        },
        animation: {
            duration: 1000 // Animation duration in milliseconds
        },
        backgroundColor: 'white' // Set the chart background color
    },
    plugins: [{
        id: 'background-colour',
        beforeDraw: (chart) => {
            const ctx = chart.canvas.getContext('2d');
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, chart.width, chart.height);
        }
    }]
});

