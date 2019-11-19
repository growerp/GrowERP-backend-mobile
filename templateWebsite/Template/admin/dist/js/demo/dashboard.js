/*
** Dashboard JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {

    // ============================================================== 
    // Morris Chart
    // ==============================================================
    if ($('#morris-area-chart2').length > 0) {
        // Morris Area Chart
        Morris.Area({
            element: 'morris-area-chart2',
            data: [{
                period: '2012',
                SiteA: 0,
                SiteB: 0,
            }, {
                period: '2013',
                SiteA: 125,
                SiteB: 94,
            }, {
                period: '2014',
                SiteA: 78,
                SiteB: 58,
            }, {
                period: '2015',
                SiteA: 68,
                SiteB: 198,
            }, {
                period: '2016',
                SiteA: 180,
                SiteB: 150,
            }, {
                period: '2017',
                SiteA: 103,
                SiteB: 87,
            },
            {
                period: '2018',
                SiteA: 250,
                SiteB: 150,
            }],
            xkey: 'period',
            ykeys: ['SiteA', 'SiteB'],
            labels: ['Area A', 'Area B'],
            pointSize: 0,
            fillOpacity: 0.8,
            pointStrokeColors:['#ffc107', '#3483FF'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 0,
            smooth: false,
            hideHover: 'auto',
            lineColors: ['#ffc107', '#3483FF'],
            resize: true
        });
    }

    // Morris Line Chart 1
    if ($('#morris-line-chart1').length > 0) {
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
    }



    // Morris Area Chart 1
    if ($('#morris-area-1').length > 0) {
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
    }

    if ($('#morris-area2').length > 0) {
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
            pointStrokeColors: ['#00bfc7', '#fec107', '#fb9678', '#9675ce'], 
            behaveLikeLine: true, 
            gridLineColor: '#e0e0e0', 
            lineWidth: 3,
            hideHover: 'auto', 
            lineColors: ['#00bfc7', '#fec107', '#fb9678', '#9675ce'], 
            resize: true
        });
    }

    if ($('#morris-area-chart3').length > 0) {
        // Morris Area Chart 2
        // Morris Area Chart
        Morris.Area({
            element: 'morris-area-chart3',
            data: [{
                period: '2010',
                phone: 0,
                tablet: 0,
                latop: 0
            }, {
                period: '2011',
                phone: 50,
                tablet: 15,
                latop: 5
            }, {
                period: '2012',
                phone: 20,
                tablet: 50,
                latop: 65
            }, {
                period: '2013',
                phone: 100,
                tablet: 12,
                latop: 7
            }, {
                period: '2014',
                phone: 30,
                tablet: 20,
                latop: 150
            }, {
                period: '2015',
                phone: 25,
                tablet: 80,
                latop: 40
            }, {
                period: '2016',
                phone: 10,
                tablet: 10,
                latop: 10
            }
            ],
            lineColors: ['#0bc36e', '#555', '#3483FF'],
            xkey: 'period',
            ykeys: ['phone', 'tablet', 'latop'],
            labels: ['Site A', 'Site B', 'Site C'],
            pointSize: 0,
            lineWidth: 0,
            resize:true,
            fillOpacity: 0.75,
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            hideHover: 'auto' 
        });
    }
    
    if ($('#morris-donutchart-2').length > 0) {
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
    }
    
    if ($('#morris-donutchart-crypto').length > 0) {
        // Morris Donut Chart 2
        Morris.Donut({
            element: 'morris-donutchart-crypto',
            data: [{
                label: "BTC",
                value: 10.245,
            }, {
                label: "LTC",
                value: 4.045
            }, {
                label: "ETH",
                value: 50.34
            }, {
                label: "XMR",
                value: 12.32
            }, {
                label: "XRP",
                value: 54.23
            }, {
                label: "DASH",
                value: 32.34
            }, {
                label: "NEO",
                value: 21
            }],
            resize: true,
            colors: [ '#5cbae6', '#fac364', '#ccc5a8', '#52bacc', '#dbdb46', '#98aafb', '#b6d957', '#8cd3ff', '#d998cb', '#f2d249', '#93b9c6'],
        });
    }

    if ($('#morris-donut-invoice-by-status').length > 0) {
        Morris.Donut({
            element: 'morris-donut-invoice-by-status',
            data: [{"value":"7","label":"Paid"},{"value":"1","label":"In Process"},{"value":"1","label":"Other"}],
            colors: ['#98aafb', '#ccc5a8', '#52bacc'],
        });
    }

    if ($('#canadalite-chart-1').length > 0) {
        require.config({
            paths: {
                echarts: "assets/plugin/echarts"
            }
        }), require(["echarts", "echarts/chart/line", "echarts/chart/scatter", "echarts/chart/k"], function(e) {
            var t = e.init(document.getElementById("canadalite-chart-1"));
            chartOptions = {
                legend: {
                    show: !1
                },
                grid: {
                    x: 40,
                    x2: 0,
                    borderColor: "#e3e3e3"
                },
                tooltip: {
                    trigger: "axis",
                    formatter: function(e) {
                        var t = e[0].seriesName + " - " + e[0].name;
                        return t += "<br/>  Opening : " + e[0].value[0], t += "<br/>  Closing : " + e[0].value[1], t += "<br/>  Highest : " + e[0].value[3], t += "<br/>  Lowest : " + e[0].value[2]
                    },
                    axisPointer: {
                        type: "line",
                        lineStyle: {
                            color: "#1E9FF2",
                            width: 2,
                            type: "solid"
                        }
                    }
                },
                legend: {
                    show: !1,
                    data: ["BTC"]
                },
                dataZoom: {
                    show: !0,
                    realtime: !0,
                    start: 0,
                    end: 50
                },
                color: ["#3483FF", "#1EC481", "#18BE77"],
                calculable: !0,
                xAxis: [{
                    type: "category",
                    boundaryGap: !0,
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    axisTick: {
                        onGap: !1
                    },
                    splitLine: {
                        show: !1
                    },
                    data: ["2018/1/24", "2018/1/25", "2018/1/28", "2018/1/29", "2018/1/30", "2018/1/31", "2018/2/1", "2018/2/4", "2018/2/5", "2018/2/6", "2018/2/7", "2018/2/8", "2018/2/18", "2018/2/19", "2018/2/20", "2018/2/21", "2018/2/22", "2018/2/25", "2018/2/26", "2018/2/27", "2018/2/28", "2018/3/1", "2018/3/4", "2018/3/5", "2018/3/6", "2018/3/7", "2018/3/8", "2018/3/11", "2018/3/12", "2018/3/13", "2018/3/14", "2018/3/15", "2018/3/18", "2018/3/19", "2018/3/20", "2018/3/21", "2018/3/22", "2018/3/25", "2018/3/26", "2018/3/27", "2018/3/28", "2018/3/29", "2018/4/1", "2018/4/2", "2018/4/3", "2018/4/8", "2018/4/9", "2018/4/10", "2018/4/11", "2018/4/12", "2018/4/15", "2018/4/16", "2018/4/17", "2018/4/18", "2018/4/19", "2018/4/22", "2018/4/23", "2018/4/24", "2018/4/25", "2018/4/26", "2018/5/2", "2018/5/3", "2018/5/6", "2018/5/7", "2018/5/8", "2018/5/9", "2018/5/10", "2018/5/13", "2018/5/14", "2018/5/15", "2018/5/16", "2018/5/17", "2018/5/20", "2018/5/21", "2018/5/22", "2018/5/23", "2018/5/24", "2018/5/27", "2018/5/28", "2018/5/29", "2018/5/30", "2018/5/31", "2018/6/3", "2018/6/4", "2018/6/5", "2018/6/6", "2018/6/7", "2018/6/13"]
                }],
                yAxis: [{
                    type: "value",
                    scale: !0,
                    boundaryGap: [.01, .01],
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#e3e3e3"
                        }
                    }
                }],
                series: [{
                    name: "BTC",
                    type: "k",
                    barMaxWidth: 20,
                    itemStyle: {
                        normal: {
                            color: "#0bc36e",
                            color0: "#fb9678",
                            lineStyle: {
                                width: 2,
                                color: "#0bc36e",
                                color0: "#fb9678"
                            }
                        },
                        emphasis: {
                            color: "#0bc36e",
                            color0: "#fb9678"
                        }
                    },
                    data: [{
                        value: [2320.26, 2302.6, 2287.3, 2362.94],
                        itemStyle: {
                            normal: {
                                color0: "#FFA4B0",
                                lineStyle: {
                                    width: 3,
                                    color0: "#FF4961"
                                }
                            },
                            emphasis: {
                                color0: "#FB9678"
                            }
                        }
                    },
                    [2300, 2291.3, 2288.26, 2308.38],
                    [2295.35, 2346.5, 2295.35, 2346.92],
                    [2347.22, 2358.98, 2337.35, 2363.8],
                    [2360.75, 2382.48, 2347.89, 2383.76],
                    [2383.43, 2385.42, 2371.23, 2391.82],
                    [2377.41, 2419.02, 2369.57, 2421.15],
                    [2425.92, 2428.15, 2417.58, 2440.38],
                    [2411, 2433.13, 2403.3, 2437.42],
                    [2432.68, 2434.48, 2427.7, 2441.73],
                    [2430.69, 2418.53, 2394.22, 2433.89],
                    [2416.62, 2432.4, 2414.4, 2443.03],
                    [2441.91, 2421.56, 2415.43, 2444.8],
                    [2420.26, 2382.91, 2373.53, 2427.07],
                    [2383.49, 2397.18, 2370.61, 2397.94],
                    [2378.82, 2325.95, 2309.17, 2378.82],
                    [2322.94, 2314.16, 2308.76, 2330.88],
                    [2320.62, 2325.82, 2315.01, 2338.78],
                    [2313.74, 2293.34, 2289.89, 2340.71],
                    [2297.77, 2313.22, 2292.03, 2324.63],
                    [2322.32, 2365.59, 2308.92, 2366.16],
                    [2364.54, 2359.51, 2330.86, 2369.65],
                    [2332.08, 2273.4, 2259.25, 2333.54],
                    [2274.81, 2326.31, 2270.1, 2328.14],
                    [2333.61, 2347.18, 2321.6, 2351.44],
                    [2340.44, 2324.29, 2304.27, 2352.02],
                    [2326.42, 2318.61, 2314.59, 2333.67],
                    [2314.68, 2310.59, 2296.58, 2320.96],
                    [2309.16, 2286.6, 2264.83, 2333.29],
                    [2282.17, 2263.97, 2253.25, 2286.33],
                    [2255.77, 2270.28, 2253.31, 2276.22],
                    [2269.31, 2278.4, 2250, 2312.08],
                    [2267.29, 2240.02, 2239.21, 2276.05],
                    [2244.26, 2257.43, 2232.02, 2261.31],
                    [2257.74, 2317.37, 2257.42, 2317.86],
                    [2318.21, 2324.24, 2311.6, 2330.81],
                    [2321.4, 2328.28, 2314.97, 2332],
                    [2334.74, 2326.72, 2319.91, 2344.89],
                    [2318.58, 2297.67, 2281.12, 2319.99],
                    [2299.38, 2301.26, 2289, 2323.48],
                    [2273.55, 2236.3, 2232.91, 2273.55],
                    [2238.49, 2236.62, 2228.81, 2246.87],
                    [2229.46, 2234.4, 2227.31, 2243.95],
                    [2234.9, 2227.74, 2220.44, 2253.42],
                    [2232.69, 2225.29, 2217.25, 2241.34],
                    [2196.24, 2211.59, 2180.67, 2212.59],
                    [2215.47, 2225.77, 2215.47, 2234.73],
                    [2224.93, 2226.13, 2212.56, 2233.04],
                    [2236.98, 2219.55, 2217.26, 2242.48],
                    [2218.09, 2206.78, 2204.44, 2226.26],
                    [2199.91, 2181.94, 2177.39, 2204.99],
                    [2169.63, 2194.85, 2165.78, 2196.43],
                    [2195.03, 2193.8, 2178.47, 2197.51],
                    [2181.82, 2197.6, 2175.44, 2206.03],
                    [2201.12, 2244.64, 2200.58, 2250.11],
                    [2236.4, 2242.17, 2232.26, 2245.12],
                    [2242.62, 2184.54, 2182.81, 2242.62],
                    [2187.35, 2218.32, 2184.11, 2226.12],
                    [2213.19, 2199.31, 2191.85, 2224.63],
                    [2203.89, 2177.91, 2173.86, 2210.58],
                    [2170.78, 2174.12, 2161.14, 2179.65],
                    [2179.05, 2205.5, 2179.05, 2222.81],
                    [2212.5, 2231.17, 2212.5, 2236.07],
                    [2227.86, 2235.57, 2219.44, 2240.26],
                    [2242.39, 2246.3, 2235.42, 2255.21],
                    [2246.96, 2232.97, 2221.38, 2247.86],
                    [2228.82, 2246.83, 2225.81, 2247.67],
                    [2247.68, 2241.92, 2231.36, 2250.85],
                    [2238.9, 2217.01, 2205.87, 2239.93],
                    [2217.09, 2224.8, 2213.58, 2225.19],
                    [2221.34, 2251.81, 2210.77, 2252.87],
                    [2249.81, 2282.87, 2248.41, 2288.09],
                    [2286.33, 2299.99, 2281.9, 2309.39],
                    [2297.11, 2305.11, 2290.12, 2305.3],
                    [2303.75, 2302.4, 2292.43, 2314.18],
                    [2293.81, 2275.67, 2274.1, 2304.95],
                    [2281.45, 2288.53, 2270.25, 2292.59],
                    [2286.66, 2293.08, 2283.94, 2301.7],
                    [2293.4, 2321.32, 2281.47, 2322.1],
                    [2323.54, 2324.02, 2321.17, 2334.33],
                    [2316.25, 2317.75, 2310.49, 2325.72],
                    [2320.74, 2300.59, 2299.37, 2325.53],
                    [2300.21, 2299.25, 2294.11, 2313.43],
                    [2297.1, 2272.42, 2264.76, 2297.1],
                    [2270.71, 2270.93, 2260.87, 2276.86],
                    [2264.43, 2242.11, 2240.07, 2266.69],
                    [2242.26, 2210.9, 2205.07, 2250.63],
                    [2190.1, 2148.35, 2126.22, 2190.1]
                    ],
                    markPoint: {
                        symbol: "star",
                        itemStyle: {
                            normal: {
                                label: {
                                    position: "top"
                                }
                            }
                        },
                        data: [{
                            name: "highest",
                            value: 2441.9,
                            xAxis: "2018/2/18",
                            yAxis: 2466
                        }]
                    }
                }]
            }, t.setOption(chartOptions);
        })
}




    // ============================================================== 
    // Sparkline Chart
    // ==============================================================

    // Sparkline active user Line Chart
    $("#sparkline-activeuser").sparkline([2,4,4,6,8,5,6,4,8,6,6,2], {
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
    $(".sparkline-capitalizations").sparkline([3,4,4,5,3,5,4], {
        type: 'line',
        width: '100px',
        height: '30',
        lineColor: '#3483FF',
        lineWidth: 4,
        fillColor: '#fff',
        maxSpotColor: '#03a9f3',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#fb9678'
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
        fillColor: '#03a9f3',
        maxSpotColor: '#03a9f3',
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
        fillColor: '#555',
        maxSpotColor: '#555',
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
    // Chartjs Charts
    // ==============================================================
    
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
    
    if ($('#chartjs-area2').length > 0) {
        chartjs_area2();
    }
    if ($('#chartjs-area3').length > 0) {
        chartjs_area3();
    }
    if ($('#chartjs-area4').length > 0) {
        chartjs_area4();
    }

    // ============================================================== 
    // Am Charts
    // ==============================================================

    if ($('#amchart-trading').length > 0) {
        var chartData1 = [];
        var chartData2 = [];
        var chartData3 = [];
        var chartData4 = [];

        generateChartData();

        function generateChartData() {
            var firstDate = new Date();
            firstDate.setDate( firstDate.getDate() - 500 );
            firstDate.setHours( 0, 0, 0, 0 );

            var a1 = 1500;
            var b1 = 1500;
            var a2 = 1700;
            var b2  = 1700;
            var a3 = 1600;
            var b3 = 1600;
            var a4 = 1400;
            var b4 = 1400;

            for ( var i = 0; i < 500; i++ ) {
                var newDate = new Date( firstDate );
                newDate.setDate( newDate.getDate() + i );

                a1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
                b1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

                a2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
                b2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

                a3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
                b3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

                a4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
                b4 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

                chartData1.push( {
                    "date": newDate,
                    "value": a1,
                    "volume": b1 + 1500
                } );
                chartData2.push( {
                    "date": newDate,
                    "value": a2,
                    "volume": b2 + 1500
                } );
                chartData3.push( {
                    "date": newDate,
                    "value": a3,
                    "volume": b3 + 1500
                } );
                chartData4.push( {
                    "date": newDate,
                    "value": a4,
                    "volume": b4 + 1500
                } );
            }
        }

        var chart = AmCharts.makeChart( "amchart-trading", {
            "type": "stock",
            "theme": "light",
            "dataSets": [ {
                "title": "USD",
                "fieldMappings": [ {
                    "fromField": "value",
                    "toField": "value"
                }, {
                    "fromField": "volume",
                    "toField": "volume"
                } ],
                "dataProvider": chartData1,
                "categoryField": "date"
            }],

            "panels": [ {
                "showCategoryAxis": false,
                "title": "BTC",
                "percentHeight": 70,
                "stockGraphs": [ {
                    "id": "g1",
                    "valueField": "value",
                    "comparable": true,
                    "compareField": "value",
                    "balloonText": "[[title]]:<b>[[value]]</b>",
                    "compareGraphBalloonText": "[[title]]:<b>[[value]]</b>"
                } ],
                "stockLegend": {
                    "periodValueTextComparing": "[[percents.value.close]]%",
                    "periodValueTextRegular": "[[value.close]]"
                }
            }, {
                "title": "Volume",
                "percentHeight": 30,
                "stockGraphs": [ {
                    "valueField": "volume",
                    "type": "column",
                    "showBalloon": false,
                    "fillAlphas": 1
                } ],
                "stockLegend": {
                    "periodValueTextRegular": "[[value.close]]"
                }
            } ],

            "chartScrollbarSettings": {
                "graph": "g1"
            },

            "chartCursorSettings": {
                "valueBalloonsEnabled": true,
                "fullWidth": true,
                "cursorAlpha": 0.1,
                "valueLineBalloonEnabled": true,
                "valueLineEnabled": true,
                "valueLineAlpha": 0.5
            },
            "periodSelector": {
                "position": "top",
                "periods": [ {
                    "period": "MM",
                    "selected": true,
                    "count": 1,
                    "label": "1 month"
                }, {
                    "period": "YYYY",
                    "count": 1,
                    "label": "1 year"
                }, {
                    "period": "YTD",
                    "label": "YTD"
                }, {
                    "period": "MAX",
                    "label": "MAX"
                } ]
            },
        } );

    }
});