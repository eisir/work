
let option = {
    color: ['#fe0000', '#00f0ff', '#00ff01'],

    title: [{
        text: '全天信贷业务交易情况',
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
        bottom: '30%',
        right:'0',
        textStyle: {
            color: '#3c3c3c',
            fontSize:16
        },
        data: ['房贷金额', '申请金额', '进件量']
    },
    grid: {
        left: '6%',
        right: '15%',
        top: '20%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
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
                fontSize:20
            }
        },
        data: ['15:40', '15:50', '16:00', '16:10', '16:20', '16:30', '16:40','16:50']
    },
    yAxis: {
        name:'笔\n数',
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
        name: '房贷金额',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        data: [90, 50, 39, 50, 120, 120,811]
    }, {
        name: '申请金额',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        data: [70, 162, 50, 87, 90, 147,160]
    }, {
        name: '进件量',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        data: [10, 125, 80, 132, 187, 130,100]
    }]
}

module.exports=option;