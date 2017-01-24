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
    title: {
        text: '各省市今日业务情况',
        left: 'center',
        top:'2%',
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
    
    visualMap: {
        type:'piecewise',
        // splitNumber:5,
        // min:0,
        // max:1000,
        pieces: [
                {min: 1000,label:'>1000',color:'#ae1922'}, // 不指定 max，表示 max 为无限大（Infinity）。
                {min: 600, max: 1000,color:'#e23819'},
                {min: 400, max: 600,color:'#ff994e'},
                {min: 200, max: 400,color:'#fd9580'},
                {min: 20, max: 200,color:'#fdcdc5'},
                {max: 20,label:'<20',color:'#fdf1ef'}     // 不指定 min，表示 min 为无限大（-Infinity）。
            ],
        textStyle: {
            color: '#000'
        },
        inverse:false,
        left: '40',
        bottom: '20',
        itemHeight:20,
        hoverLink:false,   
        seriesIndex:2,
        // color:['#fa6a4f','#fde7d9'] 
    },
    geo: {
        map: 'china',
        left:'150',
        top:'12%',
        bottom: '20',
        label: {
            emphasis: {
                show: true
            }
        },
        silent:false,
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#8baccb',
                borderColor: '#e9e9e9',
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
                color: '#ffbc2d',
            }
        }
    }, {
        name: 'Top 10',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [],
        symbolSize: function(val) {
            return 10+(val[2] / 1000);
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: false,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#ffbc2d',
            }
        },
        zlevel: 3
    },
    {
        name: '各省今日进件情况',
        type: 'map',
        mapType: 'china',
        left:'150',
        top:'12%',
        bottom:'20',
        data:[],
        zlevel:1,
        roam:false,
        silent:false,
        geoIndex:0,
        itemStyle: {
            normal:{
                borderColor:'#fff'
            },
            emphasis: {
                areaColor:'#ff994e'
            }
        }
    },{
        name: ' ',
        type: 'scatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        symbolSize: function(val) {
            return 8+(val[2] / 1000);
        },
        hoverAnimation: false,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#15ecc6',
            }
        },
        zlevel: 4,
        data:[]
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
    theme:0,
    _data:[],
    _cityData:[],
    _efData:[],
    _option:function(){
        if(this.theme==1){
            option.visualMap.textStyle.color="#fff";
        }
        return option
    },
    option:function(){
        let _data1=fmCityData(this._cityData)
        let _data2=fmCityData(this._cityData.slice(0, 10))
        return {
            series:[
            {
                data:_data1
            },{
                data:_data2
            },{
                data:this._data
            },{
                data:this._efData
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
            },{}
            ]
        }
    }
}

module.exports=Setting;