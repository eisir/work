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
            return params.name+'：'+params.value[2]
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
    geo: {
        map: 'china',
        left:'10',
        top:'10%',
        bottom: '10%',
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
            return 3+(val[2] / 100);
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
            return 20+(val[2] / 500);
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
        zlevel: 1
    }
    ]
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
       let _data2=fmData(this._data.splice(0, 10))
       

        return {
            series:[
            {
                data:_data1
            },{
                data:_data2
            }
            ]
        };
    }
}

module.exports=Setting;