
let option
option = {
    title: {
        text: '便民实时交易',
        left: 'center',
        top: '2%',
        textStyle: {
            color: '#ff4620',
            fontWeight:'normal',
            fontSize:24
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            "axisTick": {
                "show": false
            },
            boundaryGap : true,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : {
        type : 'value',
        "axisTick": {
            "show": false
        },
        boundaryGap : false,
        splitNumber:3,
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
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[120, 132, 101, 134, 90, 230, 210]
        }
    ]
};
export default option