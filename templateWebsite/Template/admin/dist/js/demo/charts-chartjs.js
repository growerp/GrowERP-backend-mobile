/*
** Chartjs JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {

    // ============================================================== 
    // Chart js Charts
    // ==============================================================
    window.chartColors = {
        primary: 'rgb(52, 131, 255)',
        success: 'rgb(11, 195, 110)',
        warning: 'rgb(254, 193, 7)',
        danger: 'rgb(251, 150, 120)',
        secondary: 'rgb(205, 15, 216)',
        dark: 'rgb(85, 85, 85)',
        grey: 'rgb(201, 203, 207)' 
    };

    var color = Chart.helpers.color;

    //Chartjs Line Chart
    var init_chart0 = function () {
        var config = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [ {
                    label: 'Primary',
                    backgroundColor: color(window.chartColors.primary).alpha(0.5).rgbString(),
                    borderWidth: 1,
                    data: [ 0, 5, 65, 7, 150, 40, 10 ],
                }, {
                    label: 'Success',
                    backgroundColor: color(window.chartColors.success).alpha(0.5).rgbString(),
                    borderWidth: 1,
                    data: [ 0, 50 , 20, 100 , 30, 25, 10 ],
                }, {
                    label: 'Secondary',
                    backgroundColor: color(window.chartColors.dark).alpha(0.5).rgbString(),
                    borderWidth: 1,
                    data: [ 0, 15, 50, 12, 30, 25, 10],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        };

        var ctx = document.getElementById("chart0").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Line Chart
    var init_chart1 = function () {
        var config = {
            type: 'line',
            data: {
                labels: ["Oct","Nov","Dec","Jan","Feb","Mar"],
                datasets: [{
                    label: 'Sales',
                    backgroundColor: color(window.chartColors.primary).alpha(0.7).rgbString(),
                    borderColor: window.chartColors.primary,
                    borderWidth: 2,
                    data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15],
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                elements: {
                    line: {
                        tension: 0.00000001,
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            }
        };

        var ctx = document.getElementById("chart1").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Line Chart
    var init_chart2 = function () {
        var config = {
            type: 'line',
            data: {
                labels: ["Oct","Nov","Dec","Jan","Feb","Mar"],
                datasets: [{
                    label: 'Sales',
                    backgroundColor: color(window.chartColors.success).alpha(0.7).rgbString(),
                    borderColor: window.chartColors.success,
                    borderWidth: 2,
                    data: [10, 14, 12, 16, 9, 11, 13, 9, 13, 15]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                elements: {
                    line: {
                        tension: 0
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            }
        };

        var ctx = document.getElementById("chart2").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Line Chart
    var init_chart3 = function () {
        var config = {
            type: 'line',
            data: {
                labels: ["Oct","Nov","Dec","Jan","Feb","Mar"],
                datasets: [{
                    label: 'Sales',
                    backgroundColor: color(window.chartColors.danger).alpha(0.7).rgbString(),
                    borderColor: window.chartColors.danger,
                    borderWidth: 2,
                    data: [10, -14, 12, -16, 9, -11, 13, -9, 13, 15]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                elements: {
                    line: {

                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
            }
        };

        var ctx = document.getElementById("chart3").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Line Chart
    var init_chart4 = function () {

        var config = {
            type: 'line',
            data: {
                labels: ["Oct","Nov","Dec","Jan","Feb","Mar"],
                datasets: [{
                    label: 'Sales',
                    backgroundColor: color(window.chartColors.warning).alpha(0.7).rgbString(),
                    borderColor: window.chartColors.warning,
                    borderWidth: 2,
                    data: [301,182,235,140,296,123],
                    fill: 'end'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        };

        var ctx = document.getElementById('chart4').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Line Chart
    var init_chart5 = function () {
        var config = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Unfilled',
                    fill: false,
                    backgroundColor: window.chartColors.primary,
                    borderColor: window.chartColors.primary,
                    data: [ 58, -72 , 75, 13 , 94, -50, 74 ],
                }, {
                    label: 'Dashed',
                    fill: false,
                    backgroundColor: window.chartColors.danger,
                    borderColor: window.chartColors.danger,
                    borderDash: [5, 5],
                    data: [73, -54, 54, 90, 32, -16, 2],
                }, {
                    label: 'Filled',
                    backgroundColor: window.chartColors.warning,
                    borderColor: window.chartColors.warning,
                    data: [ -74, -14, -48, -92, 66, 42, -77 ],
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        var ctx = document.getElementById('chart5').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Bar Chart
    var init_chart6 = function () {
        var config = {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Dataset 1',
                    backgroundColor: color(window.chartColors.primary).alpha(0.8).rgbString(),
                    borderColor: window.chartColors.primary,
                    borderWidth: 1,
                    data: [ -28, 61, -49, 71, -89, 38, 76 ]
                }, {
                    label: 'Dataset 2',
                    backgroundColor: color(window.chartColors.danger).alpha(0.8).rgbString(),
                    borderColor: window.chartColors.danger,
                    borderWidth: 1,
                    data: [ 21, 84, 69, 81, -25, -65, -27 ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {

                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        var ctx = document.getElementById('chart6').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Horizontal Bar Chart
    var init_chart7 = function () {
        var config = {
            type: 'horizontalBar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Dataset 1',
                    backgroundColor: color(window.chartColors.primary).alpha(0.8).rgbString(),
                    borderColor: window.chartColors.primary,
                    borderWidth: 1,
                    data: [ -28, 61, -49, 71, -89, 38, 76 ]
                }, {
                    label: 'Dataset 2',
                    backgroundColor: color(window.chartColors.danger).alpha(0.8).rgbString(),
                    borderColor: window.chartColors.danger,
                    borderWidth: 1,
                    data: [ 21, 84, 69, 81, -25, -65, -27 ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {

                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        var ctx = document.getElementById('chart7').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Bar Chart
    var init_chart8 = function () {
        var config = {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Primary',
                    backgroundColor: window.chartColors.danger,
                    borderColor: window.chartColors.danger,
                    data: [ 58, 72 , 75, 13 , 94, 50, 74 ],
                }, {
                    label: 'Secondary',
                    backgroundColor: window.chartColors.primary,
                    borderColor: window.chartColors.primary,
                    data: [73, 54, 54, 90, 32, 16, 24],
                }, {
                    label: 'success',
                    backgroundColor: window.chartColors.success,
                    borderColor: window.chartColors.success,
                    data: [ 74, 14, 48, 92, 66, 42, 77 ],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false,
                    text: 'Chart.js Bar Chart - Stacked'
                },
                legend: {
                    display: false
                },
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            }
        };

        var ctx = document.getElementById('chart8').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Line Chart
    var init_chart9 = function () {
        var datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
        var config = {
            type: 'line',
            data: {
                labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                datasets: [{
                    label: 'Cubic interpolation (monotone)',
                    data: datapoints,
                    borderColor: window.chartColors.primary,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    fill: false,
                    cubicInterpolationMode: 'monotone'
                }, {
                    label: 'Cubic interpolation (default)',
                    data: datapoints,
                    borderColor: window.chartColors.success,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    fill: false,
                }, {
                    label: 'Linear interpolation',
                    data: datapoints,
                    borderColor: window.chartColors.danger,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    fill: false,
                    lineTension: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false
                },
                tooltips: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            suggestedMin: -10,
                            suggestedMax: 200,
                        }
                    }]
                }
            }
        };
        var ctx = document.getElementById('chart9').getContext('2d');
        window.myLine = new Chart(ctx, config);
    }
    //Chartjs Pie Chart
    var init_chart10 = function () {
        var config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [10, 20, 30, 40, 50],
                    backgroundColor: [
                    window.chartColors.primary,
                    window.chartColors.secondary,
                    window.chartColors.success,
                    window.chartColors.warning,
                    window.chartColors.danger,
                    ],
                    label: 'Dataset 1'
                }],
                labels: [ 'Primary', 'Secondary', 'Success', 'Warning', 'Danger' ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        };

        var ctx = document.getElementById('chart10').getContext('2d');
        window.myPie = new Chart(ctx, config);
    }
    //Chartjs Doughnut Chart
    var init_chart11 = function () {
        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [10, 20, 30, 40, 50],
                    backgroundColor: [
                    window.chartColors.primary,
                    window.chartColors.secondary,
                    window.chartColors.success,
                    window.chartColors.warning,
                    window.chartColors.danger,
                    ],
                    label: 'Dataset 1'
                }],
                labels: [ 'Primary', 'Secondary', 'Success', 'Warning', 'Danger' ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        };

        var ctx = document.getElementById('chart11').getContext('2d');
        window.myPie = new Chart(ctx, config);
    }
    //Chartjs Polar Area Chart
    var init_chart12 = function () {
        var config = {
            data: {
                datasets: [{
                    data: [89, 78, 48, 96, 12],
                    backgroundColor: [
                    color(chartColors.primary).alpha(0.5).rgbString(),
                    color(chartColors.secondary).alpha(0.5).rgbString(),
                    color(chartColors.success).alpha(0.5).rgbString(),
                    color(chartColors.warning).alpha(0.5).rgbString(),
                    color(chartColors.danger).alpha(0.5).rgbString(),
                    ],
                    label: 'My dataset'
                }],
                labels: [
                'Red',
                'Orange',
                'Yellow',
                'Green',
                'Blue'
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                title: {
                    display: false,
                    text: 'Chart.js Polar Area Chart'
                },
                scale: {
                    ticks: {
                        beginAtZero: true
                    },
                    reverse: false
                },
                animation: {
                    animateRotate: false,
                    animateScale: true
                }
            }
        };

        var ctx = document.getElementById('chart12');
        window.myPolarArea = Chart.PolarArea(ctx, config);
    }
    //Chartjs Radar Chart
    var init_chart13 = function () {
        var config = {
            type: 'radar',
            data: {
                labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: color(window.chartColors.primary).alpha(0.2).rgbString(),
                    borderColor: window.chartColors.primary,
                    pointBackgroundColor: window.chartColors.primary,
                    data: [ 20, 40, 60, 80, 100, 120 ]
                }, {
                    label: 'My Second dataset',
                    backgroundColor: color(window.chartColors.danger).alpha(0.2).rgbString(),
                    borderColor: window.chartColors.danger,
                    pointBackgroundColor: window.chartColors.danger,
                    data: [ 10, 20, 30, 40, 50, 60 ]
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                title: {
                    display: false,
                },
                scale: {
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        };
        window.myRadar = new Chart(document.getElementById('chart13'), config);
    }

    //Intilize Chartjs function
    init_chart0();
    init_chart1();
    init_chart2();
    init_chart3();
    init_chart4();
    init_chart5();
    init_chart6();
    init_chart7();
    init_chart8();
    init_chart9();
    init_chart10();
    init_chart11();
    init_chart12();
    init_chart13();


});