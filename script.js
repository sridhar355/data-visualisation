
const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Monthly Sales',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'skyblue',
        borderWidth: '1px',
        data: [65, 59, 80, 81, 56],
    }],
};

const config = {
    type: 'bar',
    data: data,
    options: { responsive: true,
        plugins: {title: {display: true,
                text: 'Monthly Sales Data',
            },
        },
    },
};
const chartEle = document.getElementById('chartA').getContext('2d');
const chartA = new Chart(chartEle, config);

chartA.options.plugins.tooltip = {
    callbacks: {label: function (context) {
            return `sales: ${context.parsed.y}`;
        },
    },
};

const chartAnimation = anime({
    targets: chartA.data.datasets[0].data,
    easing: 'linear',
    direction: 'alternate',
    update: function (anim) {
        chartA.update();
    },
});