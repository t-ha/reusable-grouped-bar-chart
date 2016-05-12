$(function() {
  d3.csv('data/data2.csv', function(error, data){
	var myChart = GroupedBarChart()
				.x(function(d) {return d.id;})
				.y(function(d) {return [
					{val1: +d.val1},
					{val2: +d.val2},
					{val3: +d.val3}
				];})
				.width(1200)
				.height(800)
				.xLabel('id value')
				.yLabel('Value')
				.colorScale(['#F9BF3B', '#F1892D', 'rgb(184, 84, 0)'])
				.margin({
					top: 50,
					left: 60,
					bottom: 60,
					right: 50
				})
				.showLegend(true);

	var chartWrapper = d3.select('#chart')
						.datum([data])
						.call(myChart);
	});
});