<template>
   <div id="history">
       <Focus :focus="images"></Focus>
       <span  @click="$router.go(-1)">
            <i class="fa fa-angle-left"></i>
       </span>
       <ul>
          <li v-for="(item,index) in addrs"
          
          :key="index" @click="pushToView(item,index)"
          :style="index == $store.state.ssqSelectedIndex?{borderBottom:'2px solid red'}:{border:'none'}"
          >
        {{item.title}}
          </li>
       </ul>
       <keep-alive>
       <router-view></router-view> 
       </keep-alive> 
   </div>
</template>
<script>
import Focus from '@/components/Commons/Focus'
export default {
    components:{Focus},
    data(){
        return{
            images:{},
            addrs:[
                {name:'CurrentDetail',title:'本期详情'},
                {name:'AllList',title:'全部期次'}
            ]
        }
    },
    methods:{
        //点击事件高亮
        pushToView(item,index){
            this.$store.commit('ssqSelectedIndex',{ssqSelectedIndex:index});
            localStorage.setItem('ssqSelectedIndex',index);
            this.$router.push({name:item.name,params:{item:this.$store.state.currentSSQ}});
        }
    },
    created(){
        var ssqSelectedIndex = localStorage.getItem('ssqSelectedIndex');
        this.$store.commit('ssqSelectedIndex',{ssqSelectedIndex:ssqSelectedIndex});

        this.loadData('/api/focus','get','images');
    }

}
</script>
<style lang="scss" scoped>
#history{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 64px;
    background: red;
    z-index:3;
    background: white;
    overflow: scroll;
    span{
         i{  
                 padding-left: 12px;
                   font-size:30px
                 
                   
                }
    }
    ul{
        
        width: 100%;
        height: 30px;
        background: rgb(255, 255, 255);
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid lightgray;
        li{
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-content: center;
            color: rgb(204, 204, 204)
        }
    }
}
</style>
