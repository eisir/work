
let option = {
    title:{
        text:'便民交易比例图',
        left:'center',
        textStyle:{
            color:'#ff4620',
            fontWeight:'normal',
            fontSize:20
        }
    },
    label: {
        normal: {
            formatter: "{b} {c}({d}%)",
            // position: "insideTopRight"
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        // extraCssText:'text-align:left'
    },
    series: [
        {
            name:'便民交易(笔数)',
            type:'pie',
            radius: ['30%', '50%'],            
            labelLine: {
            },
            center:['50%','60%'],
            data:[]
        }
    ]
};

let Setting={
    _data:[],
    _option:option,
    options:function(){
        let _data=this._data;
        return {
            series:[{
                data:_data
            }]
        }
    }
}

module.exports=Setting;