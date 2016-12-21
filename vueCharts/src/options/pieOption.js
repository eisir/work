import 'echarts/lib/chart/pie'
let option = {
    title:{
        text:'便民交易比例图',
        left:'center',
        textStyle:{
            color:'#ff4620',
            fontWeight:'normal',
            fontSize:24
        }
    },
    label: {
        normal: {
            formatter: "{b} {c}({d}%)",
            position: "insideTopRight"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '50%'],            
            labelLine: {
            },
            center:['50%','60%'],
            data:[{
                "name":"信用卡还款无卡还款",
                "value":59.0
            },{
                "name":"信用卡还款线下pos",
                "value":470.0
            },{
                "name":"信用卡还款瘦终端",
                "value":929.0
            },{
                "name":"转账汇款",
                "value":332.0
            },{
                "name":"信用卡还款胖终端",
                "value":654.0
            }]
        }
    ]
};

module.exports=option;