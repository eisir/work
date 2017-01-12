import filter from '../utils/filter'
let option
option = {
    title: {
        text: '便民全天交易量',
        left: 'center',
        top: '2%',
        textStyle: {
            color: '#ff4620',
            fontWeight:'normal',
            fontSize:20
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis : {
            type : 'category',
            "axisTick": {
                "show": false
            },
            boundaryGap : true,
            data : []
    },
    yAxis : {
        name: '笔数',
        type : 'value',
        "axisTick": {
            "show": false
        },
        // boundaryGap : ['10%','10%'],
        splitNumber:4,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#3c3c3c'
            }
        },
        "axisLine": {
          show:false
        },
    },
    series : [
        {
            name:'便民全天交易量',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[]
        }
    ]
};

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
    _data:[],
    _option:option,
    options:function(){
        let _data=fmData(this._data).seriesData;
        let _Xdata=fmData(this._data).xData;
        return {
            xAxis:{
                data: _Xdata
            },
            series:[{
                data:_data
            }]
        }
    }
}

module.exports=Setting;