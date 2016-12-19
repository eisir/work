let $ = require( 'jquery')
var echarts = require('echarts/lib/echarts');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('../css/style.css');
let Option=require('../js/mapOption.js');


// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('root'));
// 绘制图表
myChart.setOption(Option);


var mp=myChart




