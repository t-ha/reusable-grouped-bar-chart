function GroupedBarChart() {
    //global variables (fields)
    //initialize default values
    var margin = {
        top: 50,
        left: 50,
        bottom: 50,
        right: 50
    };
    var width = 1000;
    var height = 600;
    var xScale = d3.scale.ordinal();
    var yScale = d3.scale.linear();
    var xValue = function(d) {return d[0]};
    var yValue = function(d) {return d[1]};
    
    //constructor
    function chart(selection) {
        selection.each(function(data) {
            data = data.map(function(d, i) {
                return [xValue.call(data, d, i), yValue.call(data, d, i)];
            });
            
            //update xScale
            xScale.domain(data.map(function(d) {return d[0]})).rangeRoundBands([0, (width - margin.left - margin.right)], 0.1);
            
            //update yScale
            yScale.domain([0, d3.max(data, function(d) {return d[1]})]).range([height - margin.top - margin.bottom, 0]);
            
            //Select the svg element, if it exists.
            var svg = d3.select(this).selectAll('svg').data([data]);
            
            svg.attr('width', width)
                .attr('height', height);
                
            var gEnter = svg.enter().append("svg").append("g");
                
            gEnter.attr('width', width - margin.left - margin.right)
                .attr('height', height - margin.top - margin.bottom)
                .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
            
            var bars = gEnter.selectAll('rect')
                            .data(data);
                            
            
            bars.enter().append('rect')
                    .attr('x', function(d) {return xScale(d[0])})
                    .attr('y', height + margin.top)
                    .attr('width', xScale.rangeBand())
                    .attr('title', function(d) {return d[0]})
                    .attr('height', 0);
                    
            bars.exit().remove();
            
            bars.transition().duration(1000)
                    .attr('x', function(d) {return xScale(d[0])})
                    .attr('y', function(d) {return yScale(d[1])})
                    .attr('width', xScale.rangeBand())
                    .attr('fill', 'red')
                    .attr('opacity', 0.5)
                    .attr('height', function(d) {return (height - margin.top - margin.bottom) - yScale(d[1])});
            
        });
    }
    
    //set width of chart if parameter, returns current width otherwise
    chart.width = function(val) {
        if (!arguments.length) {
            return width;
        }
        width = val;
        return chart;
    };
    
    //set height of chart if parameter, returns current height otherwise
    chart.height = function(val) {
        if (!arguments.length) {
            return height;
        }
        height = val;
        return chart;
    };
    
    //specifies column id from data to use as values for x
    chart.x = function(val) {
        if (!arguments.length) {
            return xValue;
        }
        xValue = val;
        return chart;
    };
    
    //specifies column id from data to use as values for y
    chart.y = function(val) {
        if (!arguments.length) {
            return yValue;
        }
        yValue = val;
        return chart;
    };
   
  return chart;
}