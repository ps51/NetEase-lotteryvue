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
    </div>
</template>
<script>
import Focus from '@/components/Commons/Focus'

export default {
    componens:{Focus},
    data(){
        return {
            
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
            background: cornflowerblue;
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
    }
</style>
