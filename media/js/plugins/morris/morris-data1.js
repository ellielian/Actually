JSONData_Project = [{
            label: "Amazon",
            value: 66
        }, {
            label: "uncompleted",
            value: 34
        }]

JSONData_Section = [{
            label: "My Progress",
            value: 70
        }, {
            label: "uncompleted",
            value: 30
        }]

JSONData_Task1 = [{
            label: "taskB",
            value: 78
        }, {
            label: "uncompleted",
            value: 22
        }]

JSONData_Task2 = [{
            label: "taskC",
            value: 99
        }, {
            label: "uncompleted",
            value: 1
        }]

JSONData_Task3 = [{
            label: "taskD",
            value: 58
        }, {
            label: "uncompleted",
            value: 42
        }]

JSONData_Task4 = [{
            label: "taskE",
            value: 80
        }, {
            label: "uncompleted",
            value: 20
        }]

var data = {
    projectname: 'Amazon',
    projectprogress: 66,
    sectionname: 'Front-end',
    sectionprogress: 85,
    tasks: [
        {
            task: 'task1',
            taskprogress: 78
        },
        {
            task: 'task2',
            taskprogress: 95
        },
        {
            task: 'task3',
            taskprogress: 50
        },
        {
            task: 'task4',
            taskprogress: 20
        },
        {
            task: 'task5',
            taskprogress: 45
        },
        {
            task: 'task6',
            taskprogress: 85
        }
    ]
}

$(function() {

    var startAngle = 0;
    $('#morris-donut-chart1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: 400,
            spacingBottom: 0
        },
        title: {
            text: '<b style="font-size: 120%; font-weight: bold;">'+data.projectname+'</b><br>'+data.projectprogress+'%',
            align: 'center',
            verticalAlign: 'middle',
            style: {
                fontSize: '25px'
            },
            y: 0
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                colors: ['#046a95'],
                startAngle: startAngle,
                endAngle: startAngle + data.projectprogress*0.01*360,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '70%',
            data: [
                ['Amazon:', 6],               
            ]
        }]
    });

    $('#morris-donut-chart2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: 400,
            spacingBottom: 0
        },
        title: {
            text: '<b style="font-size: 120%; font-weight: bold;">'+data.sectionname+'</b><br>'+data.sectionprogress+'%',
            align: 'center',
            verticalAlign: 'middle',
            style: {
                fontSize: '25px'
            },
            y: 0
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -40,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                colors: ['#058dc7'],
                startAngle: startAngle,
                endAngle: startAngle + data.sectionprogress*0.01*360,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '70%',
            data: [
                ['Amazon:', 6],               
            ]
        }]
    });

    for (var i = 0; i < data.tasks.length; i++) {
        var newId = "task" + i;
        //var newDiv = $( "<div></div>").attr("id",newId);
        $("<div></div>").attr("class","col-lg-3").attr("id", newId).appendTo("#taskCharts");
        $("#taskCharts div#" + newId).highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: 220
        },
        title: {
            text: '<b style="font-size: 120%; font-weight: bold;">'+data.tasks[i].task+'</b><br>'+data.tasks[i].taskprogress+'%',
            align: 'center',
            verticalAlign: 'middle',
            style: {
                fontSize: '25px'
            },
            y: 0
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -40,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                colors: ['rgb(105,180,50)'],
                startAngle: startAngle,
                endAngle: startAngle + data.tasks[i].taskprogress*0.01*360,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '80%',
            data: [
                ['Amazon:', 6],               
            ]
        }]
    });
    };

    /*$('#morris-donut-chart3').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '<b style="font-size: 120%; font-weight: bold;">'+data.tasks[0].task+'</b><br>'+data.tasks[0].taskprogress+'%',
            align: 'center',
            verticalAlign: 'middle',
            style: {
                fontSize: '25px'
            },
            y: 0
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -40,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: startAngle,
                endAngle: startAngle + data.tasks[0].taskprogress*0.01*360,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '80%',
            data: [
                ['Amazon:', 6],               
            ]
        }]
    });

    $('#morris-donut-chart4').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '<b style="font-size: 120%; font-weight: bold;">'+data.tasks[1].task+'</b><br>'+data.tasks[1].taskprogress+'%',
            align: 'center',
            verticalAlign: 'middle',
            style: {
                fontSize: '25px'
            },
            y: 0
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -40,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: startAngle,
                endAngle: startAngle + data.tasks[1].taskprogress*0.01*360,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '80%',
            data: [
                ['Amazon:', 6],               
            ]
        }]
    });

$('#morris-donut-chart5').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '<b style="font-size: 120%; font-weight: bold;">'+data.tasks[2].task+'</b><br>'+data.tasks[2].taskprogress+'%',
            align: 'center',
            verticalAlign: 'middle',
            style: {
                fontSize: '25px'
            },
            y: 0
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -40,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: startAngle,
                endAngle: startAngle + data.tasks[2].taskprogress*0.01*360,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '80%',
            data: [
                ['Amazon:', 6],               
            ]
        }]
    });

    $('#morris-donut-chart6').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: '<b style="font-size: 120%; font-weight: bold;">'+data.tasks[3].task+'</b><br>'+data.tasks[3].taskprogress+'%',
            align: 'center',
            verticalAlign: 'middle',
            style: {
                fontSize: '25px'
            },
            y: 0
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                    distance: -40,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: startAngle,
                endAngle: startAngle + data.tasks[3].taskprogress*0.01*360,
                center: ['50%', '50%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '80%',
            data: [
                ['Amazon:', 6],               
            ]
        }]
    });*/
    // Morris.Donut({
    //     element: 'morris-donut-chart1',
    //     data: JSONData_Project,
    //     resize: true,
    //     colors: ['rgba(11, 98, 164, 1)', 'rgba(11, 98, 164, 0)'],
    //     formatter: function (y, data) { return y + '%' }
    // });

    // Morris.Donut({
    //     element: 'morris-donut-chart2',
    //     data: JSONData_Section,
    //     resize: true,
    //     colors: ['rgba(122, 146, 163, 1)', 'rgba(122, 146, 163, 0)'],
    //     formatter: function (y, data) { return y + '%' }
    // });

    // Morris.Donut({
    //     element: 'morris-donut-chart3',
    //     data: JSONData_Task1,
    //     resize: true,
    //     colors: ['rgba(77, 167, 77, 1)', 'rgba(77, 167, 77, 0)'],
    //     formatter: function (y, data) { return y + '%' }
    // });

    //     Morris.Donut({
    //     element: 'morris-donut-chart4',
    //     data: JSONData_Task2,
    //     resize: true,
    //     colors: ['rgba(77, 167, 77, 1)', 'rgba(77, 167, 77, 0)'],
    //     formatter: function (y, data) { return y + '%' }
    // });

    // Morris.Donut({
    //     element: 'morris-donut-chart5',
    //     data: JSONData_Task3,
    //     resize: true,
    //     colors: ['rgba(77, 167, 77, 1)', 'rgba(77, 167, 77, 0)'],
    //     formatter: function (y, data) { return y + '%' }
    // });
    
    //     Morris.Donut({
    //     element: 'morris-donut-chart6',
    //     data: JSONData_Task4,
    //     resize: true,
    //     colors: ['rgba(77, 167, 77, 1)', 'rgba(77, 167, 77, 0)'],
    //     formatter: function (y, data) { return y + '%' }
    // });
});
