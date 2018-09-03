<template>
  <div id="app">
   
   <router-view></router-view>
   <Tabbars></Tabbars>
  </div>
</template>

<script>
import Tabbars from '@/components/Commons/Tabbars'
import mixins from '@/mixins/mixins'

export default {
  name: 'App',
  components:{Tabbars},
  created(){
    // this.$http.get(this.$http.defaults.baseURL+'/api/ssq')
    // .then((response)=>{
    //   console.log(response)
    // })
    //现在注册了mixins全局相当于以上效果
   
    localStorage.setItem('SELECTEINDEX',0)
    this.loadData('/api/ssq','get')
  }
}
</script>

<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 64px;
  overflow-y: scroll;
}
</style>
