require('echarts/map/js/china.js');
function randomData() {
    return Math.round(Math.random()*1000);
}

option = {
    title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['iphone3']
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],           // 文本，默认为数值文本
        calculable: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle:{
               normal:{label:{show:true}},
               emphasis:{label:{show:true}}
           },
           xAxis: {
                type: 'category',
                data: ['西藏']
                // 注意这里不建议写成 [5, 6, 9, 13, 19, 33]，否则不能被 markPoint / markLine 用『具体值』索引到。
            },
            markPoint:{
                symbolSize: 5,
                itemStyle: {
                   normal: {
                       borderColor: '#87cefa',
                       borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                       label: {
                        show: false
                       }
                   },
                   emphasis: {
                      borderColor: '#1e90ff',
                       borderWidth: 5,
                       label: {
                           show: false
                       }
                   }
               },
                data:[
                    {
                        coord: ['西藏',randomData() ],
                        itemStyle: {
                            normal: {color: 'rgb(41,60,85)'}
                        }
                    }
                ],
                label: {
                    normal: {
                        show:true,
                        formatter: function (param) {
                            return param != null ? Math.round(param.value) : '';
                        },
                        textStyle:{
                            color:'#f00'
                        }
                    },
                    emphasis:{
                        show:true
                    }
                },
                 tooltip: {
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
            },
            data:[
                // {name: '北京',value: randomData() },
                // {name: '天津',value: randomData() },
                {name: '上海',value: randomData() },
                {name: '重庆',value: randomData() },
                {name: '河北',value: randomData() },
                {name: '河南',value: randomData() },
                {name: '云南',value: randomData() },
                {name: '辽宁',value: randomData() },
                {name: '黑龙江',value: randomData() },
                {name: '湖南',value: randomData() },
                {name: '安徽',value: randomData() },
                {name: '山东',value: randomData() },
                {name: '新疆',value: randomData() },
                {name: '江苏',value: randomData() },
                {name: '浙江',value: randomData() },
                {name: '江西',value: randomData() },
                {name: '湖北',value: randomData() },
                {name: '广西',value: randomData() },
                {name: '甘肃',value: randomData() },
                {name: '山西',value: randomData() },
                {name: '内蒙古',value: randomData() },
                {name: '陕西',value: randomData() },
                {name: '吉林',value: randomData() },
                {name: '福建',value: randomData() },
                {name: '贵州',value: randomData() },
                {name: '广东',value: randomData() },
                {name: '青海',value: randomData() },
                {name: '四川',value: randomData() },
                {name: '宁夏',value: randomData() },
                {name: '海南',value: randomData() },
                {name: '台湾',value: randomData() },
                {name: '香港',value: randomData() },
                {name: '澳门',value: randomData() },
                {name: '西藏',value: randomData() }
            ]
        }
    ]
};

module.exports=option;