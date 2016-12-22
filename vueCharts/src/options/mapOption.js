import echarts from 'echarts/lib/echarts'
import 'echarts/map/js/china.js'
import getData from './getData'
import geoCoordMap from './geoData'


var provs=echarts.getMap('china').geoJson.features
var prosD=provs.map(n=>({name:n.properties.name,cp:n.properties.cp}))


var data = getData.data

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
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
        trigger: 'item'
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
        top:'20%',
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
        data: convertData(data),
        symbolSize: function(val) {
            return val[2] / 10;
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#614f86'
            }
        }
    }, {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data.sort(function(a, b) {
            return b.value - a.value;
        }).slice(0, 6)),
        symbolSize: function(val) {
            return val[2] / 10;
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
                color: '#261742',
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        zlevel: 1
    }
    ]
};

module.exports=option;