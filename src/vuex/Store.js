import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    selectedIndex:0,
    ssqSelectedIndex:1,
    currentSSQ:{}
}
const getters = {

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
    }
}
const actions = {

}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})