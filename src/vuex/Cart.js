const state = {
    //订单列表
    orderList: []
}
const getters = {

}
const mutations = {
    //往订单里新增新选项
    ADDTOORDERLIST(state,payload){
        state.orderList.push(payload.order);
    },
    // 删除购物车内的订单
    DELETEORDER(state,payload){
        state.orderList.splice(payload,1);
    },
    CLEANCART(state){
        state.orderList= [];
    }
}
const actions = {

}
export default {
    state,
    getters,
    mutations,
    actions
}