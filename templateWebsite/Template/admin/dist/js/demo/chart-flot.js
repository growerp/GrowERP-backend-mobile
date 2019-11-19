/*
** Flot Charts JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {

    // ============================================================== 
    // Flot Charts
    // ==============================================================
    // Line Chart    
    var basicLineChart = function () {
        $.plot("#line-chart", [{
            label: "Line Chart",
            data: [ [2013, 0],
            [2014, 90],
            [2015, 65],
            [2016, 145],
            [2017, 95],
            [2018, 185]
            ] }], 
            {
                legend: {
                    show: false
                },
                grid: {
                    borderWidth: 1,
                    borderColor: {
                        top: "#f1f1f1",
                        right: "transparent",
                        bottom: "transparent",
                        left: "transparent"
                    },
                    color: "#999",
                    hoverable: true,
                    minBorderMargin: 20,
                    labelMargin: 10,
                    margin: {
                        top: 8,
                        bottom: 20,
                        left: 20
                    }
                },
                series: {
                    lines: {
                        show: true,
                        lineWidth: 0,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: .84
                            }, {
                                opacity: .2
                            }]
                        }
                    },
                    points: {
                        show: false
                    }
                },
                xaxis: {
                    tickLength: 0,
                    tickDecimals: 0
                },
                yaxis: {
                    tickSize: 50
                },
                colors: ["#007bff"]
            })
    }
    

    // ============================================================== 
    // Sine Consine Charts
    // ==============================================================
    var sineCosineChart = function () {
        //Create sin and cos data
        for (var sin = [], cos = [], i = 0; i < 14; i += .1) {
            sin.push([i, Math.sin(i)]), cos.push([i, Math.cos(i)]);
        }
        //Plot sine and cosine charts
        $.plot("#sine-cosine", [{
            data: sin,
            label: "sin(x)" }, {
                data: cos,
                label: "cos(x)"
            }], {
                series: {
                    lines: {
                        show: true
                    }
                },
                crosshair: {
                    mode: "x"
                },
                grid: {
                    borderWidth: 1,
                    borderColor: "transparent",
                    color: "#999",
                    minBorderMargin: 20,
                    labelMargin: 10,
                    margin: {
                        top: 8,
                        bottom: 20,
                        left: 20
                    },
                    hoverable: true,
                    autoHighlight: false
                },
                xaxis: {
                    tickLength: 0,
                    tickDecimals: 0
                },
                yaxis: {
                    min: -1.2,
                    max: 1.2
                },
                colors: ["#007bff", "#fb9678"]
            });
    }
    

    // ============================================================== 
    // Realtime Data Charts
    // ==============================================================
    var realtimeChart = function () {
        var realtime_data = [],
        totalPoints = 300,
        updateInterval = 30;
        function getRandomData() {

            if (realtime_data.length > 0)
                realtime_data = realtime_data.slice(1);

            while (realtime_data.length < totalPoints) {

                var prev = realtime_data.length > 0 ? realtime_data[realtime_data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                realtime_data.push(y);
            }


            var res = [];
            for (var i = 0; i < realtime_data.length; ++i) {
                res.push([i, realtime_data[i]])
            }

            return res;
        }

        function update() {
            realtime_plot.setData([getRandomData()]);
            realtime_plot.draw();
            setTimeout(update, updateInterval);
        }

        $("#updateInterval").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1) {
                    updateInterval = 1;
                } else if (updateInterval > 2000) {
                    updateInterval = 2000;
                }
                $(this).val("" + updateInterval);
            }
        });

        realtime_plot = $.plot("#realtime-chart", [ getRandomData() ], {
            grid: {
                borderWidth: 1,
                borderColor: "transparent",
                color: "#999",
                minBorderMargin: 20,
                labelMargin: 10,
                margin: {
                    top: 8,
                    bottom: 20,
                    left: 20
                }
            },
            series: {
                shadowSize: 0,
                lines: {
                    fill: !0,
                    fillColor: {
                        colors: [{
                            opacity: .8
                        }, {
                            opacity: .1
                        }]
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: !1
            },
            colors: ["#fec107"]
        });
        update();
    }

    // ============================================================== 
    // Series Type Charts
    // ==============================================================
    var seriesChart = function () {
        var d1 = [];
        for (var i = 0; i < 14; i += 0.5) {
            d1.push([i, Math.sin(i)]);
        }

        var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

        var d3 = [];
        for (var i = 0; i < 14; i += 0.5) {
            d3.push([i, Math.cos(i)]);
        }

        var d4 = [];
        for (var i = 0; i < 14; i += 0.1) {
            d4.push([i, Math.sqrt(i * 10)]);
        }

        var d5 = [];
        for (var i = 0; i < 14; i += 0.5) {
            d5.push([i, Math.sqrt(i)]);
        }

        var d6 = [];
        for (var i = 0; i < 14; i += 0.5 + Math.random()) {
            d6.push([i, Math.sqrt(2*i + Math.sin(i) + 5)]);
        }

        $.plot("#series-type-chart", [{
            data: d1,
            lines: { show: true, fill: true }
        }, {
            data: d2,
            bars: { show: true }
        }, {
            data: d3,
            points: { show: true }
        }, {
            data: d4,
            lines: { show: true }
        }, {
            data: d5,
            lines: { show: true },
            points: { show: true }
        }, {
            data: d6,
            lines: { show: true, steps: true }
        }], {
            grid: {
                borderWidth: 1,
                borderColor: "#f1f1f1",
                color: "#777",
                minBorderMargin: 20,
                labelMargin: 10,
                margin: {
                    top: 8,
                    bottom: 10,
                    left: 10
                }
            },
            xaxis: {
                tickLength: 0,
                tickDecimals: 0
            },
            yaxis: {
                tickSize: 5
            },
            colors: ["#0bc36e", "#fec107", "#fb9678", "#3483FF", "#626E82"]
        });
    } 


    // ============================================================== 
    // Symbol Type Charts
    // ==============================================================
    function generate(offset, amplitude) {

        var res = [];
        var start = 0, end = 10;

        for (var i = 0; i <= 50; ++i) {
            var x = start + i / 50 * (end - start);
            res.push([x, amplitude * Math.sin(x + offset)]);
        }

        return res;
    }

    var symbolChart = function () {
        var data = [
        { data: generate(2, 1.8), points: { symbol: "circle" } },
        { data: generate(3, 1.5), points: { symbol: "square" } },
        { data: generate(4, 0.9), points: { symbol: "diamond" } },
        { data: generate(6, 1.4), points: { symbol: "triangle" } },
        { data: generate(7, 1.1), points: { symbol: "cross" } }
        ];

        $.plot("#symbol-chart", data, {
            series: {
                points: {
                    show: true,
                    radius: 3
                }
            },
            grid: {
                borderWidth: 1,
                borderColor: "#f1f1f1",
                color: "#777",
                minBorderMargin: 20,
                labelMargin: 10,
                margin: {
                    top: 8,
                    bottom: 10,
                    left: 10
                }
            }
        });
    }

    // ============================================================== 
    // Bar  Charts
    // ==============================================================
    var barChartChart = function () {

        $.plot("#bar-chart", [
            [
            ["January", 10],
            ["February", 8],
            ["March", 4],
            ["April", 13],
            ["May", 17],
            ["June", 9]
            ]
            ], {
                series: {
                    bars: {
                        show: true,
                        barWidth: .8,
                        align: "center",
                        lineWidth: 0,
                        fill: true,
                        fillColor: {
                            colors: [{
                                opacity: .25
                            }, {
                                opacity: .85
                            }]
                        }
                    }
                },
                xaxis: {
                    mode: "categories",
                    tickLength: 0
                },
                yaxis: {
                    tickSize: 4
                },
                grid: {
                    borderWidth: 1,
                    borderColor: "transparent",
                    color: "#777",
                    minBorderMargin: 20,
                    labelMargin: 10,
                    margin: {
                        top: 8,
                        bottom: 20,
                        left: 20
                    }
                },
                colors: ["#3483FF"]
            })
    }

    // ============================================================== 
    // Thresold Charts
    // ==============================================================
    var thresholdsChart = function () {
        for (var o, data = [], e = 0; e <= 60; e += 1) {
            data.push([e, parseInt(30 * Math.random() - 10)]);
        }

        $.plot("#thresold-chart", [{
            data: data,
            color: "#3483FF",
            threshold: {
                below: 0,
                color: "#fb9678"
            },
            lines: {
                steps: !0
            }
        }], {
            grid: {
                borderWidth: 1,
                borderColor: "#f1f1f1",
                color: "#777",
                minBorderMargin: 20,
                labelMargin: 10,
                margin: {
                    top: 8,
                    bottom: 20,
                    left: 20
                }
            }
        })
    }

    // ============================================================== 
    // Stacked bar Chart
    // ==============================================================
    var stackedBarChart = function () {
        var d1 = [];
        for (var i = 0; i <= 10; i += 1) {
            d1.push([i, parseInt(Math.random() * 30)]);
        }

        var d2 = [];
        for (var i = 0; i <= 10; i += 1) {
            d2.push([i, parseInt(Math.random() * 30)]);
        }

        var d3 = [];
        for (var i = 0; i <= 10; i += 1) {
            d3.push([i, parseInt(Math.random() * 30)]);
        }

        var stack = 0,
        bars = true,
        lines = false,
        steps = false;

        $.plot("#stacked-bar-chart", [ d1, d2, d3 ], {
            series: {
                stack: stack,
                lines: {
                    show: lines,
                    fill: true,
                    steps: steps,
                    lineWidth: 0
                },
                bars: {
                    show: bars,
                    barWidth: 0.6,
                    lineWidth: 0,
                    fill: 1
                }
            },
            grid: {
                borderWidth: 1,
                borderColor: "#e9e9e9",
                color: "#999",
                minBorderMargin: 20,
                labelMargin: 10,
                margin: {
                    top: 8,
                    bottom: 20,
                    left: 20
                }
            },
            colors: ["#3483FF", "#fec107", "#0bc36e"]
        });
    }

    // ============================================================== 
    // Error bar Chart
    // ==============================================================
    var errorBarChart = function () {
        function drawArrow(ctx, x, y, radius){
            ctx.beginPath();
            ctx.moveTo(x + radius, y + radius);
            ctx.lineTo(x, y);
            ctx.lineTo(x - radius, y + radius);
            ctx.stroke();
        }

        function drawSemiCircle(ctx, x, y, radius){
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI, false);
            ctx.moveTo(x - radius, y);
            ctx.lineTo(x + radius, y);
            ctx.stroke();
        }

        var data1 = [
        [1,1,.5,.1,.3],
        [2,2,.3,.5,.2],
        [3,3,.9,.5,.2],
        [1.5,-.05,.5,.1,.3],
        [3.15,1.,.5,.1,.3],
        [2.5,-1.,.5,.1,.3]
        ];

        var data1_points = {
            show: true,
            radius: 5,
            fillColor: "blue", 
            errorbars: "xy", 
            xerr: {show: true, asymmetric: true, upperCap: "-", lowerCap: "-"}, 
            yerr: {show: true, color: "red", upperCap: "-"}
        };

        var data2 = [
        [.7,3,.2,.4],
        [1.5,2.2,.3,.4],
        [2.3,1,.5,.2]
        ];

        var data2_points = {
            show: true,
            radius: 5,
            errorbars: "y", 
            yerr: {show:true, asymmetric:true, upperCap: drawArrow, lowerCap: drawSemiCircle}
        };

        var data3 = [
        [1,2,.4],
        [2,0.5,.3],
        [2.7,2,.5]
        ];

        var data3_points = {
            //do not show points
            radius: 0,
            errorbars: "y", 
            yerr: {show:true, upperCap: "-", lowerCap: "-", radius: 5}
        };

        var data4 = [
        [1.3, 1],
        [1.75, 2.5],
        [2.5, 0.5]
        ];

        var data4_errors = [0.1, 0.4, 0.2];
        for (var i = 0; i < data4.length; i++) {
            data4_errors[i] = data4[i].concat(data4_errors[i])
        }

        var data = [
        {color: "#3483FF", points: data1_points, data: data1, label: "data1"}, 
        {color: "#f91941",  points: data2_points, data: data2, label: "data2"},
        {color: "#0bc36e", lines: {show: true}, points: data3_points, data: data3, label: "data3"},
        // bars with errors
        {color: "#fec107", bars: {show: true, align: "center", barWidth: 0.25}, data: data4, label: "data4"},
        {color: "#fec107", points: data3_points, data: data4_errors}
        ];

        $.plot($("#error-bar-chart"), data , {
            legend: {
                position: "sw",
                show: true
            },
            series: {
                lines: {
                    show: false
                }
            },
            xaxis: {
                min: 0.6,
                max: 3.1
            },
            yaxis: {
                min: 0,
                max: 3.5
            },
            zoom: {
                interactive: true
            },
            pan: {
                interactive: true
            }
        });
    }

    // ============================================================== 
    // Basic Pie Chart
    // ==============================================================
    var basicPieChart = function () {
        $.plot("#basic-pie-chart", [{
            label: "Series1",
            data: 40
        }, {
            label: "Series2",
            data: 60
        }, {
            label: "Series3",
            data: 80
        }, {
            label: "Series4",
            data: 90
        }, {
            label: "Series5",
            data: 100
        }, {
            label: "Series6",
            data: 110
        }], {
            series: {
                pie: {
                    show:true
                }
            },
            colors: ["#3483FF", "#fec107", "#fb9678", "#03a9f3", "#0bc36e", "#EfA752"]
        })
    }

    // ============================================================== 
    // Label Pie Chart
    // ==============================================================
    var labelPieChart = function () {
        var data = {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    label: {
                        show: true,
                        radius: 1,
                        formatter: function(e, a) {
                            return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + e + "<br/>" + Math.round(a.percent) + "%</div>"
                        },
                        background: {
                            opacity: .9
                        }
                    }
                }
            },
            legend: {
                show: !1
            },
            colors: ["#3483FF", "#fec107", "#fb9678", "#03a9f3", "#0bc36e", "#EfA752"]
        };
        $.plot("#label-pie-chart", [{
            label: "Series1",
            data: 40
        }, {
            label: "Series2",
            data: 60
        }, {
            label: "Series3",
            data: 80
        }, {
            label: "Series4",
            data: 90
        }, {
            label: "Series5",
            data: 100
        }, {
            label: "Series6",
            data: 110
        }], data)
    }

    // ============================================================== 
    // Rectangular Pie Chart
    // ==============================================================
    var rectangularPieChart = function () {
        var data = {
            series: {
                pie: {
                    show: !0,
                    radius: 500,
                    label: {
                        show: !0,
                        formatter: function(e, a) {
                            return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + e + "<br/>" + Math.round(a.percent) + "%</div>"
                        },
                        threshold: .1
                    }
                }
            },
            legend: {
                show: !1
            },
            colors: ["#3483FF", "#fec107", "#fb9678", "#03a9f3", "#0bc36e", "#EfA752"]
        };
        $.plot("#rectangular-pie-chart", [{
            label: "Series1",
            data: 40
        }, {
            label: "Series2",
            data: 60
        }, {
            label: "Series3",
            data: 80
        }, {
            label: "Series4",
            data: 90
        }, {
            label: "Series5",
            data: 100
        }, {
            label: "Series6",
            data: 110
        }], data)
    }

    // ============================================================== 
    // Titled Pie Chart
    // ==============================================================
    var tiltedPieChart = function () {
        var data = {
            series: {
                pie: {
                    show: true,
                    radius: 1,
                    tilt: .5,
                    label: {
                        show: true,
                        radius: 1,
                        formatter: function(e, a) {
                            return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + e + "<br/>" + Math.round(a.percent) + "%</div>"
                        },
                        background: {
                            opacity: .8
                        }
                    },
                    combine: {
                        color: "#999",
                        threshold: .1
                    }
                }
            },
            legend: {
                show: true
            },
            colors: ["#3483FF", "#fec107", "#fb9678", "#03a9f3", "#0bc36e", "#EfA752"]
        };
        $.plot("#tilted-pie-chart", [{
            label: "Series1",
            data: 50
        }, {
            label: "Series2",
            data: 70
        }, {
            label: "Series3",
            data: 60
        }, {
            label: "Series4",
            data: 90
        }, {
            label: "Series5",
            data: 80
        }, {
            label: "Series6",
            data: 110
        }], data)
    }

    // ============================================================== 
    // Donut Pie Chart
    // ==============================================================
    var donutPieChart = function () {
        $.plot("#donut-pie-chart", [{
            label: "Series1",
            data: 40
        }, {
            label: "Series2",
            data: 60
        }, {
            label: "Series3",
            data: 80
        }, {
            label: "Series4",
            data: 90
        }, {
            label: "Series5",
            data: 100
        }, {
            label: "Series6",
            data: 110
        }], {
            series: {
                pie: {
                    innerRadius: .55,
                    show: true
                }
            },
            colors: ["#3483FF", "#fec107", "#fb9678", "#03a9f3", "#0bc36e", "#EfA752"]
        })
    }

    // ============================================================== 
    // interactive Pie Chart
    // ==============================================================
    var interactivePieChart = function () {
        var e = $("#interactive-pie-chart");
        $.plot(e, [{
            label: "Series1",
            data: 40
        }, {
            label: "Series2",
            data: 60
        }, {
            label: "Series3",
            data: 80
        }, {
            label: "Series4",
            data: 90
        }, {
            label: "Series5",
            data: 100
        }, {
            label: "Series6",
            data: 110
        }], {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true,
                clickable: true
            },
            colors: ["#3483FF", "#fec107", "#fb9678", "#03a9f3", "#0bc36e", "#EfA752"]
        }), e.bind("plothover", function(e, a, l) {
            if (l) {
                var r = parseFloat(l.series.percent).toFixed(2);
                $("#hover").html("<span style='font-weight:bold; color:" + l.series.color + "'>" + l.series.label + " (" + r + "%)</span>")
            }
        }), e.bind("plotclick", function(e, a, l) {
            l && (percent = parseFloat(l.series.percent).toFixed(2), alert(l.series.label + ": " + percent + "%"))
        })
    }



    //Intilise Charts
    basicLineChart();
    sineCosineChart();
    realtimeChart();
    seriesChart();
    symbolChart();

    barChartChart();
    thresholdsChart();
    stackedBarChart();
    errorBarChart();

    basicPieChart();
    labelPieChart();
    rectangularPieChart();
    tiltedPieChart();
    donutPieChart();
    interactivePieChart();
});