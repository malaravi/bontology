var Script = function () {

    $(".sparkline").each(function(){
        var $data = $(this).data();

        $data.valueSpots = {'0:': $data.spotColor};

        $(this).sparkline( $data.data || "html", $data,
        {
            tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
        });




    });

//sparkline chart

    $("#barchart").sparkline([5,3,6,7,5,6,4,2,3,4,6,8,9,10,8,6,5,7,6,5,4,7,4,9,2,4,6,7,4,7,5,6,4,2,3,4,6,8,9,3,4,6,8,9,10,], {
        type: 'bar',
        height: '90',
        barWidth: 8,
        barSpacing: 5,
        barColor: '#0090d9'
//        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
//            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'

    });


    $("#linechart").sparkline([4,5,3,7,9,3,6,4,7,9,7,6,2], {
        type: 'line',
        width: '300',
        height: '75',
        fillColor: '',
        lineColor: '#fff',
        lineWidth: 2,
        spotColor: '#fff',
        minSpotColor: '#fff',
        maxSpotColor: '#fff',
        highlightSpotColor: '#fff',
        highlightLineColor: '#ffffff',
        spotRadius: 4,
        highlightLineColor: '#ffffff'
//        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
//            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'



    });

    $("#pie-chart").sparkline([2,1,1,1], {
        type: 'pie',
        width: '100',
        height: '100',
        borderColor: '#00bf00',
        sliceColors: ['#41CAC0', '#A8D76F', '#F8D347', '#EF6F66']
//        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
//            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
    });

    //work progress bar

    $("#work-progress1").sparkline([438764,192990,843995,1309096,195177,0,684746,1061398,0,0,0,0], {
        type: 'bar',
        height: '20',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#0093D0'
//        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
//            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
    });

    $("#work-progress2").sparkline([1,2,0,0,0,1,1,1,1,1,2,0], {
        type: 'bar',
        height: '22',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#FFc425'
//        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
//            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
    });

    $("#work-progress3").sparkline([3,1,1,3,1,0,1,2,0,0,0,0], {
        type: 'bar',
        height: '22',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#ee3124'
//        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
//            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
    });

    $("#work-progress4").sparkline([3,1,1,3,1,0,1,2,0,0,0,0], {
        type: 'bar',
        height: '22',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#ee3124'
//        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
//            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
    });

    $("#work-progress5").sparkline([6,8,5,7,6,8,3], {
        type: 'bar',
        height: '22',
        barWidth: 5,
        barSpacing: 2,
        barColor: '#41cac0'
//        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
//            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
    });

    $("#pie-chart2").sparkline([2,1,1,1], {
        type: 'pie',
        width: '250',
        height: '125',
        sliceColors: ['#41CAC0', '#A8D76F', '#F8D347', '#EF6F66']
//        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
//    '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'});

    });

}();