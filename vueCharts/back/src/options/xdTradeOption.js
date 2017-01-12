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
        data: [ '进件量','放款笔数', '申请金额','放款金额']
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
            textStyle: {
                color: '#3c3c3c',
                fontSize:10
            }
        },
        data: ['9-1', '9-2', '9-3', '9-4', '9-5', '9-6', '9-7', '9-8', '9-9', '9-10', '9-11', '9-12', '9-13', '9-14', '9-15']
    },
    yAxis: [{
        name:'笔数',
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
        name: '放款笔数',
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
        name: '放款金额',
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
    _data:[90, 120, 39  , 50, 120, 120,211],
    _option:option,
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