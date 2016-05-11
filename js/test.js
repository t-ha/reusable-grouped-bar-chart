$(function() { 
    var dataset = [
        {
            freq1: 4,
            freq2: 18,
            freq3: 2,
            prim: 'A'
        },
        {
            freq1: 5,
            freq2: 8,
            freq3: 4,
            prim: 'B'
        },
        {
            freq1: 10,
            freq2: 3,
            freq3: 1,
            prim: 'C'
        },
        {
            freq1: 19,
            freq2: 6,
            freq3: 13,
            prim: 'D'
        },
        {
            freq1: 7,
            freq2: 15,
            freq3: 16,
            prim: 'E'
        }
    ];

    var data2 = [
        {
            freq1: 5,
            freq2: 1,
            freq3: 2,
            prim: 'A'
        },
        {
            freq1: 4,
            freq2: 2,
            freq3: 4,
            prim: 'B'
        },
        {
            freq1: 10,
            freq2: 11,
            freq3: 1,
            prim: 'C'
        },
        {
            freq1: 12,
            freq2: 6,
            freq3: 13,
            prim: 'D'
        }
    ];

    var graph = GroupedBarChart()
                    .x(function(d) {return d.prim})
                    .y(function(d) {
                        return [
                            {freq1: +d.freq1},
                            {freq2: +d.freq2}
                        ];
                    })
                    .width(1000)
                    .height(800)
                    .margin({
                        top: 80,
                        left: 80,
                        bottom: 80,
                        right: 80
                    })
                    .xLabel('x axis')
                    .yLabel('y axis')
                    .showLegend(false);

    var chartWrapper = d3.select('#vis')
                        .datum([dataset])
                        .call(graph);
                        
    $('#button').on('click', function() {
        graph.y(function(d) {
            return [
                {freq1: +d.freq1},
                {freq2: +d.freq2},
                {freq3: +d.freq3}
            ];
        })
        .showLegend(true);
        chartWrapper.datum([data2]).call(graph);
    });
});
                        

