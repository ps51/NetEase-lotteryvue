<template>
    <div id="allList">
     <!-- allList取三十条数据 -->
     <ul>
  
         <li v-for="(item,key) in allList30" :key="key" @click="pushView(item)">
             <span>{{item.period}}</span>
             <span>
                 <span v-for="(winnum,index) in item.winnerNumber" :key="index"
                    :style="index<6?{color:'red'}:{color:'blue'}">
                    {{winnum>9?winnum:'0'+winnum}}
                   
                 </span>
                  <i class="fa fa-angle-right"></i>
             </span>
               
         </li>
     </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            allList:{data:[]}
        }
    },
    methods:{
        pushView(item){
         
            this.pushToView({name:'CurrentDetail'},{item:item})
           
        }
    },
    computed:{
        //最近三十条数据
        allList30(){
            return this.allList.data.slice(0,30)
        }
    },
    created(){
        this.loadData('/api/ssq','get','allList')
    },
    watch:{
        allList(newVlue){
           
            this.$store.commit('SETCURRENTSSQ',{currentSSQ:newVlue.data[0]});
            localStorage.setItem('currentSSq',JSON.stringify(newVlue.data[0]));
        }
    },
    
}
</script>
<style lang="scss" scoped>
    #allList{
        width: 100%;
        ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            background: lightgray;
            li{
                width: 100%;
                height: 80px;
                background: #f0efe7;
                margin-bottom: 1px;
                display: flex;
                flex-direction: column;
                padding: 10px;
                box-sizing: border-box;
              
                span{
                    margin-bottom: 10px;
                    font-size: 17px;
                    margin-right: 5px;
                    i{
                        float: right;
                        margin-right: 10px;
                    }
                }

            }
        }
    }
</style>
