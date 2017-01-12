import echarts from 'echarts/lib/echarts'
import 'echarts/map/js/china.js'
import geoCoordMap from './geoData'


var provs=echarts.getMap('china').geoJson.features
let temp={};
provs.forEach(n=>{
        temp[n.properties.name]=n.properties.cp;   
})
var geoData=temp


let option

option = {
    title:"",
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
    
    visualMap: {
        type:'piecewise',
        // splitNumber:5,
        // min:0,
        // max:1000,
        pieces: [
                {min: 3000,label:'>3000'}, // 不指定 max，表示 max 为无限大（Infinity）。
                {min: 1000, max: 3000},
                {min: 200, max: 1000},
                {min: 10, max: 200},
                {max: 10,label:'<10'}     // 不指定 min，表示 min 为无限大（-Infinity）。
            ],
        textStyle: {
            color: '#000'
        },
        inverse:false,
        left: '40',
        bottom: '10',
        itemHeight:20,
        hoverLink:false,         // 文本，默认为数值文本
        calculable: true,
        seriesIndex:2,
        color:['#fa6a4f','#fde7d9'] 
    },
    geo: {
        map: 'china',
        left:'160',
        top:'0',
        bottom: '20',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#8baccb',
                borderColor: '#d8ecf5',
                shadowBlur: 1,
                    shadowOffsetX: 3,
                    shadowOffsetY: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
            // emphasis: {
            //     areaColor: '#c3c3c3',
            //     shadowBlur: 1,
            //         shadowOffsetX: 3,
            //         shadowOffsetY: 5,
            //         shadowColor: 'rgba(0, 0, 0, 0.5)'
            // }
        }
    },
    series: [{
        name: '各城市今日进件情况',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [],
        symbolSize: function(val) {
            return 4+(val[2] / 1000);
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
        zlevel: 2,
        itemStyle: {
            normal: {
                color: '#f00',
            }
        }
    }, {
        name: 'Top 10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [],
        symbolSize: function(val) {
            return 12+(val[2] / 1000);
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
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#f00',
            }
        },
        zlevel: 3
    },
    {
        name: '各省市今日进件情况',
        type: 'map',
        mapType: 'china',
        left:'160',
        top:0,
        bottom:'20',
        data:[],
        zlevel:1,
        itemStyle: {
            normal:{
                borderColor:'#ebebeb'
            },
            emphasis: {
                areaColor:'#ff994e'
            }
        },
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
function fmCityData(data){
    let res=[]
    for(let i=0;i<data.length;i++){
        let geoCoord = geoCoordMap[data[i].name]
        if(geoCoord){
            res.push({
                name:data[i].name,
                value: geoCoord.concat(data[i].value)
            })
        }
    }
    return res
}

function randomData() {
    return Math.round(Math.random()*1000);
}



let Setting={
    index:0,
    _data:[],
    _cityData:[],
    _option:option,
    option:function(){
       
       // console.log(this._data);
        return {
            series:[
            {
            },{
            },{
                data:this._data
            }
            ]
        };
    },
    cityOption:function(){
        let _data1=fmCityData(this._cityData)
        let _data2=fmCityData(this._cityData.slice(0, 10))
        return {
            series:[
            {
                data:_data1
            },{
                data:_data2
            },{                
            }
            ]
        }
    }
}

module.exports=Setting;