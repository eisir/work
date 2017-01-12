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
                {min: 3000,label:'>3000',color:'#ae1922'}, // 不指定 max，表示 max 为无限大（Infinity）。
                {min: 1000, max: 3000,color:'#ff2900'},
                {min: 200, max: 1000,color:'#fd9580'},
                {min: 20, max: 200,color:'#fdcdc5'},
                {max: 20,label:'<20',color:'#fdf1ef'}     // 不指定 min，表示 min 为无限大（-Infinity）。
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
        // color:['#fa6a4f','#fde7d9'] 
    },
    geo: {
        map: 'china',
        left:'100',
        top:'0',
        bottom: '10',
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
            return 10+(val[2] / 1000);
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
            return 22+(val[2] / 1000);
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
                color: '#ffbc2d',
            }
        },
        zlevel: 3
    },
    {
        name: '各省市今日业务情况',
        type: 'map',
        mapType: 'china',
        left:'100',
        top:0,
        bottom:'10',
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
    },{
        name: ' ',
        type: 'effectScatter',
        coordinateSystem: 'geo',
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
    _option:function(){
        console.log(this.theme);
        if(this.theme==1){
            option.visualMap.textStyle.color="#fff";
        }
        return option
    },
    option:function(){
       
       // console.log(this._data);
        return {
            series:[
            {
            },{
            },{
                data:this._data
            },{}
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