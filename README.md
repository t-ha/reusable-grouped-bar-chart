# reusable-grouped-bar-chart API Reference

A reusable grouped bar chart.

## Usage

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
> Specifies which column in the data set to use for the x-axis

\# *GroupedBarChart*.**y**(arr)
> Specifies which column(s) in the data set to make each bar. Accepts an array of objects as a parameter where each key in an object is a column name from the dataset and each value is a corresponding value in that column.

\# *GroupedBarChart*.**colorScale**(arr)
> Encodes each bar to it's own color. Accepts an array or strings as a parameter where each string is a hexidecimal color value.

\# *GroupedBarChart*.**xLabel**(str)
> Sets the label of the x-axis to `str`

\# *GroupedBarChart*.**yLabel**(str)
> Sets the label of the y-axis to `str`
