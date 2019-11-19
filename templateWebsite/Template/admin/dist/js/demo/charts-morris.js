/*
** Morris Charts JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {

    // ============================================================== 
    // Morris Chart
    // ==============================================================
    // Morris Line Chart
    Morris.Line({
        element: 'morris-line-chart1',
        resize: true,
        data: [
        {y: '2009 Q1', item1: 2666},
        {y: '2010 Q2', item1: 2778},
        {y: '2011 Q3', item1: 4912},
        {y: '2012 Q4', item1: 3767},
        {y: '2013 Q1', item1: 6810},
        {y: '2014 Q2', item1: 5670},
        {y: '2015 Q3', item1: 4820},
        {y: '2016 Q4', item1: 15073},
        {y: '2017 Q1', item1: 10687},
        {y: '2018 Q2', item1: 8432}
        ],
        xkey: 'y',
        ykeys: ['item1'],
        labels: ['Item 1'],
        gridLineColor: '#eef0f2',
        lineColors: ['#009efb'],
        lineWidth: 2,
        hideHover: 'auto'
    });
    // Morris Area Chart
    Morris.Area({
        element: 'morris-area-chart1',
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
        pointStrokeColors:['#b4becb', '#3483FF'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#b4becb', '#3483FF'],
        resize: true
    });
    // Morris Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart1',
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
    // Morris Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart1',
        data: [{
            y: '2012',
            a: 100,
            b: 90,
            c: 60
        }, {
            y: '2013',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2014',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: '2015',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2016',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: '2017',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: '2018',
            a: 100,
            b: 90,
            c: 40
        }],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['A', 'B', 'C'],
        barColors:['#0bc36e', '#555', '#3483FF'],
        hideHover: 'auto',
        gridLineColor: '#eef0f2',
        resize: true
    });
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
});