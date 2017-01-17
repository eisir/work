import getDatas from '../utils/getData';
export default {
  state:{
    theme:0,
    themeClass:['','theme_kj'],
    TopData:[],
    HeadData:[],
    xdListData: [],
    xdMapData:{},
    xdDayData:[],
    xdTradeData:[],
    bmTopData:[],
    bmHeadData:[],
    bmListData:[],
    bmPieData:[],
    bmTimeData:[],
    bmTradeData:[],
    xdCityData:[],
    alertMapOpen:false
  },
  mutations: {
    changeAlertMap(state,para){
      state.alertMapOpen=para
    },
    changeTheme(state){
      if(state.theme==0){
        state.theme=1
      }else{
        state.theme=0
      }
    },
    changeTop(state,data){   
      state.TopData=data
    },
    changeHead(state,data){
      state.HeadData=data
    },
    changeXdList(state,data){
      state.xdListData=data
    },
    changeXdMap(state,data){
      if(data.cityData)  {
        data.cityData=data.cityData.sort(function(a, b) {
            return b.value - a.value;
        });
      }
      state.xdMapData=data
    },
    changeMapCity(state,data){
      
      state.xdCityData=data
    },
    changeXdDay(state,data){      
      state.xdDayData=data
    },
    changeXdTrade(state,data){
      state.xdTradeData=data
    },
    changeBmTop(state,data){
      state.bmTopData=data
    },
    changeBmHead(state,data){

      state.bmHeadData=data
    },
    changeBmList(state,data){
      state.bmListData=data
    },
    changeBmPie(state,data){

      state.bmPieData=data
    },
    changeBmTime(state,data){

      state.bmTimeData=data
    },
    changeBmTrade(state,data){
      
      state.bmTradeData=data
    }
  },
  actions: {
    getTheme({commit}){
      commit('changeXdMap');
    },
    getData({commit},params){
      let para=params.xd?'chart/loanWebSocketServer':'chart/lmpsWebSocketServer'
      
      // console.log(!_prd_url);
      if(!_prd_url){        
        // var url='ws://192.168.0.212:38081/bigdatacenter-bam-web/'+para
        var url='ws://101.231.207.223:58083/bigdatacenter-bam-web/'+para
        // var url='ws://101.231.207.223:55081/bigdatacenter-bam-web/'+para
      }else{
        var url=_prd_url+para
      }
      
      // let url='ws://10.1.22.80:55081/bigdatacenter-bam-web/'+para
     
      getDatas(url,function(data){      
        let tmpData = {}
        data.forEach(function(n,index){
          let _type = n.type;
          let _data = n.data;
          if(_type=='001'){
            tmpData.pData=_data
          }else if(_type=='013'){
            tmpData.cityData=_data
          }else{
            change(_type,_data);
          }
        });
        if(tmpData.pData||tmpData.cityData){
          commit('changeXdMap',tmpData);
        }

      })

      function change(_type,_data){
        switch(_type){
          // case '001':
          //   commit('changeXdMap',_data);
          //   break;
          case '002':
            commit('changeXdList',_data);
            break;
          case '003':
            commit('changeXdDay',_data);
            break;
          case '004':
            commit('changeXdTrade',_data);
            break;
          case '005':
            commit('changeHead',_data);
            break;
          case '006':
            commit('changeTop',_data);
            break;
          case '007':
            commit('changeBmList',_data);
            break;
          case '008':
            commit('changeBmPie',_data);
            break;
          case '009':
            commit('changeBmTrade',_data);
            break;
          case '010':
            commit('changeBmTime',_data);
            break;
          case '011':
            commit('changeHead',_data);
            break;
          case '012':
            commit('changeTop',_data);
            break;
          // case '013':
          //   commit('changeMapCity',_data);
          //   break;
        }
      }
    }
  }
}