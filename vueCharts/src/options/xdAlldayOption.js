import filter from '../utils/filter'

let option = {
    color: ['#fe0000', '#00f0ff', '#00ff01','#ff00ff'],

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
        data: [ '进件量','放款笔数', '申请金额','放款金额']
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
                fontSize:12
            }
        },
        data: []
    },
    yAxis: [{
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
    },{
        name:'房贷金额',
        // max:800,
        // min:0,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#3c3c3c'
            }
        },
        "axisLine": {
          show:false
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
    }],
    series: [ {
        name: '进件量',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        data: []
    },{
        name: '放款笔数',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',        
        data: []
    }, {
        name: '申请金额',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        yAxisIndex: 1,
        data: []
    }, {
        name: '放款金额',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        yAxisIndex: 1,
        data: []
    }]
}

function fmData(data){
    var res={xData:[],seriesData:[]}

    for(let i=0;i<data.length;i++){
        res.seriesData.push(data[i].yAxis)
        res.xData.push(filter.getLastTimeShort(data[i].xAxis))
    }
    return res
}



let Setting={
    index:0,
    _data:[90, 120, 39  , 50, 120, 120,211],
    options:function(){
        if(this._data[0]){
            option.series[0].data=fmData(this._data[0].data).seriesData;
        }
        if(this._data[2]){
            option.series[1].data=fmData(this._data[2].data).seriesData;
        }
        if(this._data[1]){
            option.series[2].data=fmData(this._data[1].data).seriesData;
        }
        if(this._data[3]){
            option.series[3].data=fmData(this._data[0].data).seriesData;
        }
        

        option.xAxis.data=fmData(this._data[0].data).xData;

        return option;
    }
}

module.exports=Setting;