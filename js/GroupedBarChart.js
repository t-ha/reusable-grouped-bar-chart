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
    var xScale1 = d3.scale.ordinal();   /*is this right?*/
    var yScale = d3.scale.linear();
    var xValue = function(d) {return d[0]};
    var yValues = function(d) {return d[1]};
    var xAxis = d3.svg.axis().scale(xScale).orient('bottom');
    var yAxis = d3.svg.axis().scale(yScale).orient('left');
    
    //constructor
    function chart(selection) {
        selection.each(function(data) {
            
            //Convert data to standard representation greedily;
            //this is needed for nondeterministic accessors.
            data = data.map(function(d, i) {
                return [xValue.call(data, d, i), yValues.call(data, d, i)];
            });
           
            var groupNames = [];
            var values = [];
            var allGroups = [];
            data[0][1].forEach(function(d) {
                groupNames.push(Object.keys(d)[0]);
            });
            
            data.forEach(function(d) {
                allGroups.push(d[0]);
                d.groups = groupNames.map(function(name, i) {return {name: name, value: +d[1][i][name]}; });
            });
            
            //update xScale
            xScale.domain(data.map(function(d) {return d[0]})).rangeRoundBands([0, (width - margin.left - margin.right)], 0.1);
            
            //update xScale1
            xScale1.domain(groupNames).rangeRoundBands([0, xScale.rangeBand()]);
            
            //update yScale
            yScale.domain([0, 11]).range([height - margin.top - margin.bottom, 0]);
            
            //Select the svg element, if it exists.
            var svg = d3.select(this).selectAll('svg').data([data]);
            
            //otherwise create skeletal chart
            var gEnter = svg.enter().append("svg").append("g");
            gEnter.append('g').attr('class', 'x axis');
            gEnter.append('g').attr('class', 'y axis');
            
            //update outer dimensions
            svg.attr('width', width)
                .attr('height', height);
            
            //update inner dimensions  
            gEnter.attr('width', width - margin.left - margin.right)
                .attr('height', height - margin.top - margin.bottom)
                .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
                
            var g = svg.selectAll('g');
            
            //update x-axis    
            g.select('.x.axis')
                .attr('transform', 'translate(0, ' + (height - margin.bottom - margin.top) + ')')
                .attr('title', 'xaxis')
                .call(xAxis);

            //update y-axis    
            g.select('.y.axis')
                .call(yAxis);
                
            var barGroups = gEnter.selectAll('.group')
                            .data([data])
                            .enter().append('g')
                            .attr('class', 'group')
                            .attr('transform', function(d, i) {return 'translate(' + xScale(d[i][0]) + ', 0)'});
            
            var bars = barGroups.selectAll('rect')
                            .data(function(d, i) {return d[i].groups});           
            
            bars.enter().append('rect')
                    .attr('x', function(d) {return xScale1(d.name)})
                    .attr('y', height - margin.top - margin.bottom)
                    .attr('width', xScale1.rangeBand())
                    .attr('height', 0)
                    .attr('fill', 'red')
                    .attr('opacity', 0.5);
                    
            bars.exit().remove();
            
            bars.transition().duration(1000)
                    .attr('x', function(d) {return xScale1(d.name)})
                    .attr('y', function(d) {return yScale(+d.value)})
                    .attr('width', xScale1.rangeBand())
                    .attr('fill', 'red')
                    .attr('opacity', 0.5)
                    .attr('height', function(d) {return (height - margin.top - margin.bottom) - yScale(+d.value)});
            
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
    //takes array of objects as parameter
    chart.y = function(arr) {
        if (!arguments.length) {
            return yValues;
        }
        yValues = arr;
        return chart;
    };
   
  return chart;
}