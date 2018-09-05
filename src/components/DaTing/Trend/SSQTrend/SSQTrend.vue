<template>
    <div id="SSQTrend">
  <div class="topBar">
           
           <span @click="$router.go(-1)">
               <i class="fa fa-angle-left"></i></span>
           <span>网易彩票走势图</span>
           
           <span>
               <i class="fa fa-download"></i>
           </span>
         </div>
         <Focus :focus="focus"></Focus>
         <ul>
             <li v-for="(item,key) in balls" :key="key" @click="pushToView(item,key)"
             
               
                      :style="key == $store.state.ssqSelectedIndex?{borderBottom:'2px solid red'}:{border:'none'}"
             >
                 {{item.title}}
             </li>
         </ul>
         <router-view></router-view>
    </div>
</template>
<script>
import Focus from '@/components/Commons/Focus'

export default {
    components:{Focus},
    data(){
        return {
            focus:[],
            balls:[
                {name:'redBall',title:'红球走势'},
                {name:'blueBall',title:'篮球走势'}
            ]
        }
    },
    created(){
        this.loadData('/api/focus','get','focus');
        this.$store.dispatch('SetSSQData');
        //点击高亮
         var ssqSelectedIndex = localStorage.getItem('ssqSelectedIndex');
        this.$store.commit('ssqSelectedIndex',{ssqSelectedIndex:ssqSelectedIndex});
    },
     methods:{
             pushToView(item,key){
            this.$store.commit('ssqSelectedIndex',{ssqSelectedIndex:key});
            localStorage.setItem('ssqSelectedIndex',key);
            this.$router.push({name:item.name,params:{item:this.$store.state.currentSSQ}});
        }
    }
    

}
</script>
<style lang="scss" scpoed>
    #SSQTrend{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            overflow-y: scroll;
            z-index: 10;
            .topBar{
                width: 100%;
                height: 50px;
                background: #fff;
                display: flex;
                flex-direction: row;
                justify-content:space-between;
                align-items: center;
                color: #494c53;
                i{
                    font-size: 25px;
                }
                  span{
                     display:flex;
                     justify-content:center;
                     align-items:center;
                    font-size: 20px;
                      i{
                    margin:7px;
                }
                }
            }
            ul{
                width: 100%;
                height: 44px;
                background: white;
                display: flex;
                flex-direction: row;
                li{
                    flex: 1;
                    text-align: center;
                    line-height: 44px;
                    height: 44px;
                }
            }
    }
</style>
