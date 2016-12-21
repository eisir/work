let option = {
    color: ['#fe0000', '#00f0ff', '#00ff01'],

    title: [{
        text: '近15天信贷交易情况',
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
                fontSize:10
            }
        },
        data: ['9-1', '9-2', '9-3', '9-4', '9-5', '9-6', '9-7', '9-8', '9-9', '9-10', '9-11', '9-12', '9-13', '9-14', '9-15']
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
        data: [90, 50, 39, 50, 120, 120,811, 50, 39, 50, 120, 120,811, 50, 39]
    }, {
        name: '申请金额',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        data: [70, 162, 50, 87, 90, 147,160, 162, 50, 87, 90, 147,160, 147,160]
    }, {
        name: '进件量',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        data: [10, 125, 80, 132, 187, 130,100, 125, 80, 132, 187, 130,100, 130,100]
    }]
}

module.exports=option;