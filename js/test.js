var graph = GroupedBarChart()
                .x(function(d) {return d.letter})
                .y(function(d) {
                    return [
                        {freq1: +d.freq1},
                        {freq2: +d.freq2},
                        {freq3: +d.freq3}
                    ];
                })
                .width(600)
                .height(450)
                .xLabel('x axis')
                .yLabel('y axis');
                // .colorScale([
                //     '#7ECEFD',
                //     '#FF0000',
                //     '#CA7350'
                // ]);

d3.csv('data/test.csv', function(data) {
    d3.select('#vis')
        .datum(data)
        .call(graph);
});