const ctx = document.querySelector('canvas');

const data = {
    labels: ['GOOGL','TSLA','AMZN','AAPL','AMD','META','NDAQ'],
    datasets: [{
      label: 'Current price of top tickers',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      borderWidth: 0.8 
    }]
}

const config = {
    type: 'line',
    data: data,
}


let myLineChart;
let dataArr;

function drawChart () {
    if (myLineChart) myLineChart.destroy();

    dataArr = data.datasets[0].data;

    console.log(dataArr);

    for (let i = 0; i < dataArr.length; i++) {
        const randomVal = Math.floor(Math.random() * 1000);
        dataArr[i] = randomVal;
    }

    myLineChart = new Chart(ctx,config);

    myLineChart.update();
}


window.onload = () => {
    myLineChart = new Chart(ctx,config);
    setInterval(drawChart,5000);
}


