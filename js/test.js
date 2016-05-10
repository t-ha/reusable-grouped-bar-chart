var graph = GroupedBarChart()
                .x(function(d) {return d.letter})
                .y(function(d) {
                    return [
                        {freq1: +d.freq1},
                        {freq2: +d.freq2},
                        {freq3: +d.freq3}
                    ];
                });
                // .colorScale([
                //     '#7ECEFD',
                //     '#FDD9BD',
                //     '#CA7350'
                // ]);

d3.csv('data/test.csv', function(data) {
    console.log(data);
    d3.select('#vis')
        .datum(data)
        .call(graph);
});