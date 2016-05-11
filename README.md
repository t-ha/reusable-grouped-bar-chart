# reusable-grouped-bar-chart API Reference

A reusable grouped bar chart.

## Usage

```javascript
var data = [
    {
        id: 'a',
        val1: 3,
        val2: 1
    },
    {
        id: 'b',
        val1: 6,
        val2: 2
    },
    {
        id: 'c',
        val1: 4,
        val2: 5
    }
];

//instance of GroupedBarChart
var chart = GroupedBarChart()
                .x(function(d) {return d.id;}) //sets x values to 'id'
                .y(function(d) {return [       //sets y values to 'val1' and 'val2'
                    {val1: +d.val1},
                    {val2: +d.val2}
                ];})
                .width(1000)                   //sets width of chart to 1000
                .height(600)                   //sets height of chart to 600
                .xLabel('Id')                  //sets X-Axis label to 'Id'
                .yLabel('Value');              //sets Y-Axis label to 'Value'


```

## API Functions

\# *GroupedBarChart*()

> Constructs a GroupedBarChart object

\# *GroupedBarChart*.**margin**(margins)
> Sets the margins of the chart on an svg and returns that chart instance.

\# *GroupedBarChart*.**width**(value)
> Sets the width of the chart to `value` and returns that chart instance.

\# *GroupedBarChart*.**height**(value)
> Sets the height of the chart to `value` and returns that chart instance.

\# *GroupedBarChart*.**x**(value)
> Specifies which identifier in the data set to use for the x-axis

\# *GroupedBarChart*.**y**(arr)
> Specifies which identifier(s) in the data set to use to make each bar. Accepts an array of objects as a parameter.

\# *GroupedBarChart*.**colorScale**(arr)
> Sets color scale to `arr` where `arr` is an array of strings and each string is a hexidecimal color value.

\# *GroupedBarChart*.**xLabel**(str)
> Sets the label of the x-axis to `str`

\# *GroupedBarChart*.**yLabel**(str)
> Sets the label of the y-axis to `str`

\# *GroupedBarChart*.**showLegend**(bool)
> If `bool` is true, a legend for the chart becomes visible and hidden when `bool` is false. `bool` is false by default.

\# *GroupedBarChart*.**showToolTip**(bool)
> If `bool` is true, tooltips are enabled for the chart. Tooltips are disabled when `bool` is false. `bool` is true by default.


