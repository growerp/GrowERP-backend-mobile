/*
** Sparkline charts JS
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {

    // ============================================================== 
    // Sparkline Chart
    // ==============================================================
    //Sparkline Line Chart 1
    $("#sparkline1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#99d683',
        fillColor: '#99d683',
        maxSpotColor: '#99d683',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#99d683'
    });
    //Sparkline Line Chart 2
    $("#sparkline2").sparkline([0,2,8,6,8,5,6,4,8,6,6,2 ], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#13dafe',
        fillColor: '#13dafe',
        minSpotColor:'#13dafe',
        maxSpotColor: '#13dafe',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#13dafe'
    });
    //Sparkline Line Chart 3
    $("#sparkline3").sparkline([2,4,4,6,8,5,6,4,8,6,6,2], {
        type: 'line',
        width: '100%',
        height: '50',
        lineColor: '#6164c1',
        fillColor: '#6164c1',
        maxSpotColor: '#6164c1',
        highlightLineColor: 'rgba(0, 0, 0, 0.2)',
        highlightSpotColor: '#6164c1'
    });
    //Sparkline Bar Chart 4
    $('#sparkline4').sparkline([20, 40, 30], {
        type: 'pie',
        height: '200',
        resize: true,
        sliceColors: ['#13dafe', '#6164c1', '#f1f2f7']
    });
    //Sparkline Bar Chart 5
    $("#sparkline5").sparkline([5,6,2,8,9,4,7,10,11,12,10,4,7,10], {
        type: 'bar',
        height: '200',
        barWidth: 10,
        barSpacing: 7,
        barColor: '#99d683'
    });
    //Sparkline Bar Chart 6
    $('#sparkline6').sparkline([5, 6, 2, 9, 4, 7, 10, 12,4,7,10], {
        type: 'bar',
        height: '200',
        barWidth: '10',
        resize: true,
        barSpacing: '7',
        barColor: '#f96262'
    });

    //Sparkline Dashed Charts
    $('#sparklinedash1').sparkline([5,6,2,8,9,4,7,10,11,12,10], {
        type: 'bar',
        height: '30',
        barWidth: '4',
        resize: true,
        barSpacing: '5',
        barColor: '#00c292'
    });
    $('#sparklinedash2').sparkline([5,6,2,8,9,4,7,10,11,12,10], {
        type: 'bar',
        height: '30',
        barWidth: '4',
        resize: true,
        barSpacing: '5',
        barColor: '#ab8ce4'
    });
    $('#sparklinedash3').sparkline([5,6,2,8,9,4,7,10,11,12,10], {
        type: 'bar',
        height: '30',
        barWidth: '4',
        resize: true,
        barSpacing: '5',
        barColor: '#03a9f3'
    });
    $('#sparklinedash4').sparkline([5,6,2,8,9,4,7,10,11,12,10], {
        type: 'bar',
        height: '30',
        barWidth: '4',
        resize: true,
        barSpacing: '5',
        barColor: '#fb9678'
    });

});