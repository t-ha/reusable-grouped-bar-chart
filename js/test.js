var graph = GroupedBarChart()
                .x(function(d) {return d.letter})
                .y(function(d) {return +d.freq})
                .width(900)
                .height(500);

d3.csv('data/test.csv', function(data) {
    d3.select('#vis')
        .datum(data)
        .call(graph);
});