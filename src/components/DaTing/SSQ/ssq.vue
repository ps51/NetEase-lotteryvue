<template>
    <div id="ssq">
       <div class="topBar">
           
           <span @click="$router.go(-1)">
               <i class="fa fa-angle-left"></i>首页</span>
           <span>双色球</span>
           
           <span @click="pushToHistory" >往期开奖</span>
       </div>
    </div>
</template>
<script>

export default {
    methods:{
        pushToHistory(){
            this.$router.push({name:'SSQLiShi'});
        }
    }
}
</script>
<style lang="scss" scoped>
        #ssq{
            position: fixed;
            top: 0;
            left: 0;
            bottom: 64px;
            right: 0;
            z-index: 2;
            background: orange;
            .topBar{
                width: 100%;
                height: 50px;
                background: hotpink;
                display: flex;
                flex-direction: row;
                justify-content:space-between;
                align-items: center;
                color: white;
                span{
                     display:flex;
                     justify-content:center;
                     align-items:center;
                   
                      i{
                    margin:7px;font-size:40px
                }
                }
                :nth-child(2){
                font-size: 25px;
            }
            :nth-child(3){
               margin-right: 10px;
            }
            }
          
        }
</style>
