
let option = {
    color: ['#fe0000'],

    title: [{
        text: '便民交易平均处理时长',
        left: 'center',
        top: '2%',
        textStyle: {
            color: '#ff4620',
            fontWeight:'normal',
            fontSize:24
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        bottom: '50%',
        right:'0',
        textStyle: {
            color: '#3c3c3c',
            fontSize:12
        },
        data: ['交易平均处理时长']
    },
    grid: {
        left: '6%',
        right: '22%',
        top: '20%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        "show": false
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#3c3c3c'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#3c3c3c',
                fontSize:12
            }
        },
        data: ['15:40', '15:45', '15:50', '15:55', '16:00', '16:05', '16:10','16:15']
    },
    yAxis: {
        name:'秒\n数',
        nameLocation:'middle',
        nameGap:'60',
        nameRotate:'0',
        nameTextStyle:{
          fontSize:20
        },
        "axisLine": {
          show:false
        },
        splitNumber:3,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#3c3c3c'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#3c3c3c',
                fontSize:20
            }
        },
        type: 'value'
    },
    series: [{
        name: '交易平均处理时长',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        data: [90, 120, 39  , 50, 120, 120,211]
    }]
}

module.exports=option;