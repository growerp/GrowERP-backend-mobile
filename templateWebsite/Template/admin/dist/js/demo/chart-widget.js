/*
** Chart Widget JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {
    //Knob Chart
    //Intilize knob chart and add data-plugin="knob" in element
    $('[data-plugin="knob"]').knob();

    // ============================================================== 
    // Morris Chart
    // ==============================================================

    // Morris Line Chart 1
    Morris.Line({
        element: 'morris-line-chart1',
        resize: true,
        data: [
        {y: '2015 Q1', item1: 2666, item2: 2400, item3: 1800},
        {y: '2015 Q2', item1: 2778, item2: 2500, item3: 1700},
        {y: '2015 Q3', item1: 4912, item2: 4500, item3: 3800},
        {y: '2015 Q4', item1: 3767, item2: 3400, item3: 2600},
        {y: '2016 Q1', item1: 6810, item2: 6200, item3: 5400},
        {y: '2016 Q2', item1: 5670, item2: 5100, item3: 4200},
        {y: '2016 Q3', item1: 4820, item2: 3700, item3: 2800},
        {y: '2016 Q4', item1: 15073, item2: 14000, item3: 11100},
        {y: '2018 Q1', item1: 3687, item2: 3100, item3: 900},
        {y: '2018 Q2', item1: 8432, item2: 8000, item3: 7000}
        ],
        xkey: 'y',
        ykeys: ['item1', `item2`, `item3`],
        labels: ['Users', 'Session', 'Bounce Rate'],
        gridLineColor: '#eef0f2',
        lineColors: ['#009efb', '#0bc36e', '#fb9678'],
        lineWidth: 2,
        hideHover: 'auto'
    });
    // Morris Area Chart 1
    Morris.Area({
        element: 'morris-area-1',
        data: [
        { period: '2012', SiteA: 0, SiteB: 0 },
        { period: '2013', SiteA: 125, SiteB: 94 }, 
        { period: '2014', SiteA: 78, SiteB: 58 }, 
        { period: '2015', SiteA: 68, SiteB: 198 },
        { period: '2016', SiteA: 180, SiteB: 150 },
        { period: '2017', SiteA: 103, SiteB: 87 },
        { period: '2018', SiteA: 250, SiteB: 150 }
        ],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Area A', 'Area B'],
        pointSize: 0,
        fillOpacity: 0.8,
        pointStrokeColors:['#b4becb', '#3483FF'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#b4becb', '#3483FF'],
        resize: true
    });
    // Morris Area Chart 2
    Morris.Area({
        element: 'morris-area2',
        data: [{period: '2014', Phone: 80, Tablet: 69, Laptop: 78}, 
        {period: '2015', Phone: 72, Tablet: 213, Laptop: 149},
        {period: '2016', Phone: 185, Tablet: 159, Laptop: 147}, 
        {period: '2017', Phone: 110, Tablet: 110, Laptop: 90 }, 
        {period: '2018', Phone: 257, Tablet: 161, Laptop: 210 }],
        xkey: 'period', 
        ykeys: ['Phone', 'Tablet', 'Laptop'],
        labels: ['Phone', 'Tablet', 'Laptop'], 
        pointSize: 3, 
        fillOpacity: 0, 
        pointStrokeColors: ['#0bc36e', '#fec107', '#3483FF', '#fb9678'], 
        behaveLikeLine: true, 
        gridLineColor: '#e0e0e0', 
        lineWidth: 3,
        hideHover: 'auto', 
        lineColors: ['#0bc36e', '#fec107', '#3483FF', '#fb9678'], 
        resize: true
    });
    // Morris Donut Chart 1
    Morris.Donut({
        element: 'morris-donutchart-1',
        data: [{
            label: "Paid",
            value: 100,
        }, {
            label: "Unpaid",
            value: 50
        }, {
            label: "Other",
            value: 50
        }],
        resize: true,
        colors: [ '#5cbae6', '#fac364', '#ccc5a8', '#52bacc', '#dbdb46', '#98aafb', '#b6d957', '#8cd3ff', '#d998cb', '#f2d249', '#93b9c6'],
    });
    // Morris Donut Chart 2
    Morris.Donut({
        element: 'morris-donutchart-2',
        data: [{
            label: "Health",
            value: 100,
        }, {
            label: "Automobiles",
            value: 50
        }, {
            label: "Internet",
            value: 50
        }],
        resize: true,
        colors: [ '#5cbae6', '#fac364', '#ccc5a8', '#52bacc', '#dbdb46', '#98aafb', '#b6d957', '#8cd3ff', '#d998cb', '#f2d249', '#93b9c6'],
    });

    // ============================================================== 
    // Sparkline Chart
    // ==============================================================

    // Sparkline active user Line Chart
    $("#sparkline-activeuser").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#eee',
        fillColor: '#eee',
        maxSpotColor: '#eee',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#eee'
    });

    // Sparkline Line Chart 1
    $("#sparkline-line1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#0bc36e',
        fillColor: '#0bc36e',
        maxSpotColor: '#0bc36e',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#fb9678'
    });
    // Sparkline Line Chart 2
    $("#sparkline-line2").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#fb9678',
        fillColor: '#fb9678',
        maxSpotColor: '#fb9678',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#fb9678'
    });
    // Sparkline Line Chart 3
    $("#sparkline-line3").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#3483ff',
        fillColor: '#3483ff',
        maxSpotColor: '#3483ff',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#fb9678'
    });
    // Sparkline Line Chart 4
    $("#sparkline-line4").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#fff',
        lineWidth: 4,
        fillColor: '#3f51b5',
        maxSpotColor: '#3f51b5',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#fb9678'
    });
    // Sparkline Line Chart 5
    $("#sparkline-line5").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#fff',
        lineWidth: 4,
        fillColor: '#fec107',
        maxSpotColor: '#fec107',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#fb9678'
    });
    // Sparkline Line Chart 6
    $("#sparkline-line6").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#fff',
        lineWidth: 4,
        fillColor: '#282a3c',
        maxSpotColor: '#282a3c',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#fb9678'
    });
    // Sparkline Bar Chart 1
    $("#sparkline-bar1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'bar',
        height: '154',
        barWidth: '4',
        resize: true,
        barSpacing: '10',
        barColor: '#25a6f7'
    });
    // Sparkline Line Chart 2
    $("#sparkline-bar2").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'bar',
        height: '154',
        barWidth: '4',
        resize: true,
        barSpacing: '10',
        barColor: '#25a6f7'
    });
    // Sparkline Line Chart 3
    $("#sparkline-bar3").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'bar',
        height: '154',
        barWidth: '4',
        resize: true,
        barSpacing: '10',
        barColor: '#fb9678'
    });
    // Sparkline Line Chart 4
    $("#sparkline-bar4").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'bar',
        height: '154',
        barWidth: '4',
        resize: true,
        barSpacing: '10',
        barColor: '#0bc36e'
    });

    // ============================================================== 
    // Chartjs Chart
    // ==============================================================

    var chartjs_area1 = function () {
        var config = {
            type: 'line',
            data: {
                labels: ["Oct","Nov","Dec","Jan","Feb","Mar", "Apr"],
                datasets: [{
                    label: 'Sales',
                    backgroundColor: 'rgb(52, 131, 255)',
                    borderWidth: 0.1,
                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: 'rgb(52, 131, 255)',
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                    data: [100, 80, 140, 90, 92, 143, 100]
                }, {
                    label: 'Support',
                    backgroundColor: 'rgb(11, 195, 110)',
                    borderWidth: 0.1,
                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: 'rgb(254, 193, 7)',
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                    data: [60, 50, 90, 55, 62, 89, 70]
                }]
            },
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: false,
                    position: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                elements: {
                    line: {
                        tension: 0.0000001
                    },
                    point: {
                        radius: 4,
                        borderWidth: 12
                    }
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 10,
                        bottom: 0
                    }
                }
            }
        };

        var ctx = document.getElementById("chartjs-area1").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }

    var chartjs_area2 = function () {
        
        var ctx = document.getElementById("chartjs-area2").getContext("2d");
        (i = ctx.createLinearGradient(0, 0, 0, 100)).addColorStop(0, "rgba(251, 150, 120, .4)"), 
        i.addColorStop(1, "rgba(255,255,255,.9)");
        var config = {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [{
                    label: "BTC",
                    data: [20, 18, 35, 60, 38, 40, 75],
                    backgroundColor: i,
                    borderColor: "#FF9149",
                    borderWidth: 1.5,
                    strokeColor: "#FF9149",
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                datasetStrokeWidth: 3,
                pointDotStrokeWidth: 4,
                tooltipFillColor: "rgba(251, 150, 120, .4)",
                legend: {
                    display: false
                },
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            min: 0,
                            max: 85
                        }
                    }]
                },
                title: {
                    display: false,
                    fontColor: "#FFF",
                    fullWidth: false,
                    fontSize: 30,
                    text: "52%"
                }
            }
        };

        window.myLine = new Chart(ctx, config);
    };

    var chartjs_area3 = function () {
        var ctx = document.getElementById("chartjs-area3").getContext("2d");
        (i = ctx.createLinearGradient(0, 0, 0, 100)).addColorStop(0, "rgba(85, 85, 85, .4) "), 
        i.addColorStop(1, "rgba(255,255,255,.9)");
        var config = {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [{
                    label: "BTC",
                    data: [20, 18, 35, 60, 38, 40, 75],
                    backgroundColor: i,
                    borderColor: "#555",
                    borderWidth: 1.5,
                    strokeColor: "#555",
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                datasetStrokeWidth: 3,
                pointDotStrokeWidth: 4,
                tooltipFillColor: "rgba(85, 85, 85, .4) ",
                legend: {
                    display: false
                },
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            min: 0,
                            max: 85
                        }
                    }]
                },
                title: {
                    display: false,
                    fontColor: "#FFF",
                    fullWidth: false,
                    fontSize: 30,
                    text: "52%"
                }
            }
        };

        window.myLine = new Chart(ctx, config);
    };

    var chartjs_area4 = function () {
        var ctx = document.getElementById("chartjs-area4").getContext("2d");
        (i = ctx.createLinearGradient(0, 0, 0, 100)).addColorStop(0, "rgba(34, 185, 255, .4)"), 
        i.addColorStop(1, "rgba(255,255,255,.9)");
        var config = {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [{
                    label: "BTC",
                    data: [20, 18, 35, 60, 38, 40, 75],
                    backgroundColor: i,
                    borderColor: "#3483FF",
                    borderWidth: 1.5,
                    strokeColor: "#3483FF",
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                datasetStrokeWidth: 3,
                pointDotStrokeWidth: 4,
                tooltipFillColor: "rgba(34, 185, 255, .4)",
                legend: {
                    display: false
                },
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false,
                        ticks: {
                            min: 0,
                            max: 85
                        }
                    }]
                },
                title: {
                    display: false,
                    fontColor: "#FFF",
                    fullWidth: false,
                    fontSize: 30,
                    text: "52%"
                }
            }
        };

        window.myLine = new Chart(ctx, config);
    };

    chartjs_area1();
    chartjs_area2();
    chartjs_area3();
    chartjs_area4();
});