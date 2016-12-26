import echarts from 'echarts/lib/echarts'
import 'echarts/map/js/china.js'
import geoCoordMap from './geoData'


var provs=echarts.getMap('china').geoJson.features
let temp={};
provs.forEach(n=>{
        temp[n.properties.name]=n.properties.cp;      
})
var geoData=temp
// console.log(geoData);


let option

option = {
    // backgroundColor: '#404a59',
    title: {
        text: '各省市今日进件情况',
        left: 'center',
        textStyle: {
            color: '#ff4623',
            fontWeight: 'normal',
            fontSize:'20'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter:function(params){
            if(params.value[2]) {
                return params.name+'：'+params.value[2]
            }else{
                return params.name+'：'+params.value
            }
            
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x: 'right',
        data: ['各省市今日进件情况'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        itemHeight:100,
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true,
        seriesIndex:2,
        // color:['#f00','#fafafa'] 
    },
    geo: {
        map: 'china',
        left:'80',
        top:'6%',
        bottom: '0',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#8baccb',
                borderColor: '#d8ecf5'
            },
            emphasis: {
                areaColor: '#75a1c6'
            }
        }
    },
    series: [{
        name: '各省市今日进件情况',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [],
        symbolSize: function(val) {
            return 3+(val[2] / 1000);
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                show: true,
                formatter:function(val){
                    return val[2]
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#fe0000'
            }
        }
    }, {
        name: 'Top 10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [],
        symbolSize: function(val) {
            return 20+(val[2] / 1000);
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#fe0000',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 2
    },
    {
        name: '各省市今日进件情况',
        type: 'map',
        mapType: 'china',
        left:'80',
        top:'6%',
        bottom:'0',
        data:[],
        zlevel:1
    }]
};

function fmData(data){
    let res=[]
    for(let i=0;i<data.length;i++){
        let geoCoord = geoData[data[i].name]
        if(geoCoord){
            res.push({
                name:data[i].name,
                value: geoCoord.concat(data[i].value)
            })
        }
    }
    return res
}


let Setting={
    index:0,
    _data:[],
    _option:option,
    option:function(){
       let _data1=fmData(this._data)
       let _data2=fmData(this._data.slice(0, 10))

        return {
            visualMap:{
                max:this._data[0].value
            },
            series:[
            {
                data:_data1
            },{
                data:_data2
            },{
                data:this._data
            }
            ]
        };
    }
}

module.exports=Setting;