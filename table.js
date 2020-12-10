Highcharts.chart('graphic-3', {
    data: {
        table: 'dt-table'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Covid Cases in Kansas Colleges'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Positive Cases'
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
});
