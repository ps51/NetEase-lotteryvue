import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import axios from 'axios'
import Cart from './Cart'
const state = {
    selectedIndex:0,
    ssqSelectedIndex:1,
    currentSSQ:{},
    ssqData:{}

}
const getters = {

    redBallData(state){
       
        if (state.ssqData.data) {
            //彩票数据
            var data = state.ssqData.data.data;
            var redBallData = [];
            data.forEach((item)=>{
                redBallData.push({
                    luckyBlue:item.luckyBlue,
                    missNumber:item.missNumber.general.slice(0,33),
                    period:item.period,
                    winnerNumber:item.winnerNumber.slice(0,6)
                })
            })
            return redBallData;
        }
    }
}
const mutations = {
    //导航高亮
    SELECTEINDEX(state,payload){
     
        state.selectedIndex = payload.selectedIndex;
    },
    //双色球历史高亮
    ssqSelectedIndex(state,payload){
        state.ssqSelectedIndex = payload.ssqSelectedIndex;
    },
    SETCURRENTSSQ(state,payload){
        state.currentSSQ = payload.currentSSQ;
    },
    //双色球中奖
    SETSSQDATA(state,payload){
        state.ssqData = payload;
       
    }
}
//获取双色球的数据
const actions = {
    SetSSQData(context){
        axios.get('http://localhost:8888/api/ssq')
        .then((res)=>{
            context.commit('SETSSQDATA',res);
        })
    }
}
const modules = {
    Cart
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})