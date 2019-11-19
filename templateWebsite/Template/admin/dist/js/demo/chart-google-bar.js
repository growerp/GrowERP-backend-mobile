/*
** Google Bar Chart
*** @version v1.4.0
**** @copyright 2018 Pepdev.
*/
$(function() {

    // ============================================================== 
    // Google bar Chart
    // ==============================================================

    function drawRightY() {
    	var data = google.visualization.arrayToDataTable([
    		['City', '2018 Population', '2000 Population'],
    		['New York City, NY', 8175000, 8008000],
    		['Los Angeles, CA', 3792000, 3694000],
    		['Chicago, IL', 2695000, 2896000],
    		['Houston, TX', 2099000, 1953000],
    		['Philadelphia, PA', 1526000, 1517000]
    		]);

    	var materialOptions = {
    		chart: {
    			title: 'Population of Largest U.S. Cities',
    			subtitle: 'Based on most recent and previous census data'
    		},
    		height: 400,
    		fontSize: 12,
    		colors: ["#fb9678", "#3483FF"],
    		hAxis: {
    			gridlines: {
    				color: "#f1f1f1"
    			}
    		},
    		vAxis: {
    			gridlines: {
    				count: 10
    			},
    			minValue: 0
    		},
    		bars: 'horizontal',
    		
    		legend: {
    			position: "top",
    			alignment: "center",
    			textStyle: {
    				fontSize: 12
    			}
    		}
    	};
    	var materialChart = new google.charts.Bar(document.getElementById('bar-chart'));
    	materialChart.draw(data, materialOptions);
    }

    function drawStacked() {
    	var data = google.visualization.arrayToDataTable([
    		['City', '2000 Population', '2014 Population', '2018 Population'],
    		['New York City, NY', 8175000, 8175000, 8008000],
    		['Los Angeles, CA', 3792000, 8175000, 3694000],
    		['Chicago, IL', 2695000, 8175000, 2896000],
    		['Houston, TX', 2099000, 8175000, 1953000],
    		['Philadelphia, PA', 1526000, 8175000, 1517000]
    		]);

    	var options = {
    		title: 'Population of Largest U.S. Cities',
    		chartArea: {width: '50%'},
    		isStacked: true,
    		colors: ["#fb9678", "#fec107", "#0bc36e"],
    		chartArea: {
    			left: "5%",
    			width: "90%",
    			height: 350
    		},
    		hAxis: {
    			gridlines: {
    				color: "#f1f1f1"
    			}
    		},
    		vAxis: {
    			gridlines: {
    				count: 10
    			},
    			minValue: 0
    		},
    		legend: {
    			position: "top",
    			alignment: "center",
    			textStyle: {
    				fontSize: 12
    			}
    		}
    	};
    	var chart = new google.visualization.BarChart(document.getElementById('stacked-bar-chart'));
    	chart.draw(data, options);
    }

    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawRightY);
    google.charts.setOnLoadCallback(drawStacked);

});