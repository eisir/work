import filter from '../utils/filter'
let option = {
    color: ['#4575c9', '#fb4d4e', '#ffbc2d','#279f33'],

    title: [{
        text: '近15天业务交易情况',
        left: 'center',
        top: '2%',
        textStyle: {
            color: '#ff4620',
            fontWeight:'normal',
            fontSize:20
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        bottom: '30%',
        right:'20',
        textStyle: {
            color: '#3c3c3c',
            fontSize:16
        },
        data: [ '进件量','贷款笔数', '申请金额','贷款金额']
    },
    grid: {
        left: '3%',
        right: '144',
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
                color: '#3c3c3c',
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            rotate:60,
            interval:0,
            textStyle: {
                color: '#3c3c3c',
                fontSize:12
            }
        },
        data: []
    },
    yAxis: [{
        name:'笔数',
        nameTextStyle:{
            color:'#3c3c3c'
        },
        // nameLocation:'middle',
        // nameGap:'60',
        // nameRotate:'0',
        // nameTextStyle:{
        //   fontSize:20
        // },
        "axisLine": {
          show:false
        },
        splitNumber:4,
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
                fontSize:12
            }
        },
        type: 'value'
    },{
        name:'金额(元)',
        nameTextStyle:{
            color:'#3c3c3c'
        },
        // max:800,
        // min:0,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#3c3c3c',         
                type:'dashed'
            }
        },
        splitNumber:4,
        "axisLine": {
          show:false
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
    }],
    series: [{
        name: '进件量',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        lineStyle:{
            normal:{
                width:1
            }
        },
        data: []
    },
    {
        name: '贷款笔数',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',  
        lineStyle:{
            normal:{
                width:1
            }
        },      
        data: []
    },{
        name: '申请金额',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        lineStyle:{
            normal:{
                width:1
            }
        },
        yAxisIndex: 1,
        data: []
    },{
        name: '贷款金额',
        type: 'line',
        symbolSize: 6,
        symbol: 'circle',
        lineStyle:{
            normal:{
                width:1
            }
        },
        yAxisIndex: 1,
        data: []
    }]
}


function fmData(data){
    var res={xData:[],seriesData:[]}

    for(let i=0;i<data.length;i++){
        res.seriesData.push(data[i].yAxis)
        res.xData.push(filter.getDate(data[i].xAxis))
    }
    return res
}

let Setting={
    index:0,
    theme:0,
    _data:[90, 120, 39  , 50, 120, 120,211],
    _option:function(){
        if(this.theme==1){
            // option.visualMap.textStyle.color="#fff";
            option.legend.textStyle.color="#fff";
            option.xAxis.axisLine.lineStyle.color="#fff";
            option.xAxis.axisLabel.textStyle.color="#fff";
            option.yAxis.forEach(function(n){
                n.splitLine.lineStyle.color="#fff";
                n.axisLabel.textStyle.color="#fff";
                n.nameTextStyle.color="#fff";
            })
            
            option.xAxis.axisLabel.textStyle.color="#fff";
        }
        return option
    },
    option:function(){
        let _data1,_data2,_data3,_data4,_xData;
        if(this._data[0]){
            _data1=fmData(this._data[0].data).seriesData;
        }
        if(this._data[1]){
            _data2=fmData(this._data[1].data).seriesData;
        }
        if(this._data[2]){
            _data3=fmData(this._data[2].data).seriesData;
        }
        if(this._data[3]){
            _data4=fmData(this._data[3].data).seriesData;
        }
        

        _xData=fmData(this._data[0].data).xData;


        return {
            xAxis:{
                data:_xData
            },
            series:[
                {
                    data:_data1
                },
                {
                    data:_data2
                },
                {
                    data:_data3
                },
                {
                    data:_data4
                },
            ]
        };
    }
}

module.exports=Setting;