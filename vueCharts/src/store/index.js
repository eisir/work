import getData from '../utils/getData';
export default {
  state:{
    xdTopData:[],
    xdHeadData:[],
    xdListData: [],
    xdMapData:[],
    xdDayData:[],
    xdTradeData:[],
    bmTopData:[],
    bmHeadData:[],
    bmListData:[],
    bmPieData:[],
    bmTimeData:[],
    bmTradeData:[]
  },
  mutations: {
    changeXdTop(state,data){
      state.xdTopData=data
    },
    changeXdHead(state,data){
      state.xdHeadData=data
    },
    changeXdList(state,data){
      state.xdListData=data
    },
    changeXdMap(state,data){
      state.xdMapData=data
    },
    changeXdDay(state,data){
      state.xdMapData=data
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
    changeBmTrad(state,data){
      state.bmTradeData=data
    }
  },
  actions: {
    getData({commit},params){
      let para='chart/loanWebSocketServer'
      let url='ws://192.168.20.116:8081/bigdatacenter-bam-web/'+para

      getData(url,function(data){   
        let _type=data.type
        let _data=data.data

        switch(_type){
          case '001':
            commit('changeXdMap',_data);
            break;
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
            commit('changeXdHead',_data);
            break;
          case '006':
            commit('changeBmList',_data);
            break;
          case '007':
            commit('changeBmPie',_data);
            break;
          case '008':
            commit('changeBmTime',_data);
            break;
          case '009':
            commit('changeBmTrad',_data);
            break;
        }

      })
    }
  }
}