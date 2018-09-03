<template>
    <div id="DaTing">
        <div class="TopBar">网易彩票</div>
        <Focus></Focus>
        <div class="navBar">
            <span>网易彩票已累计中奖：100亿289万</span>
            <ul>
                <li v-for="(item,key) in navBarList" :key="key">
                    <div :style="item.style">
                     <i :class="item.icon" :style="item.istyle"></i>
                    {{item.title}}
                    </div>
                </li>
            </ul>
        </div>
    <Games :resp="gameList"></Games>
    <transition name="fade">
 <router-view></router-view>
    </transition>
   
    </div>
</template>
<script>
import Focus from './Focus/Focus'
import Games from './Games/Games'


 export default {
     
    components:{Focus,Games},
    data(){
        return{
          gameList:[]
        

        }
    },
    
    created(){
        this.loadData('/api/games','get','gameList');
    }
    
   
   
}

</script>
<style lang="scss" scoped>
            .fade-enter-active,.fade-leave-active{
                transition: all .5s;
            }
            .fade-enter,.fade-leave-to{
                transform: translateX(300px);
                opacity: 0;
            }
            #DaTing{
                width: 100%;
                height: 100%;
            .swiper-container{
                width: 100%;
                height: 100%;
            img{
                width: 100%;
                height: 100%;
        }
        }

        .TopBar{
            width: 100%;
            height: 44px;
            background: rgb(219, 47, 47);
            line-height: 44px;
            text-align: center;
            font-weight: 900;
            font-size: 20px;
            color: white;
        }
      
        .navBar{
                    width: 100%;
                    height: 94px;;
            
           
                ul{
                    width: 100%;
                    height: 74px;
                    display: flex;
                    flex-direction: row;
                    li{
                        flex: 1;
                       width: 100%;
                       height: 100%;
                       div{
                           width: 100%;
                           height: 100%;
                           display: flex;
                           flex-direction: column;
                           justify-content: space-around;
                           align-items: center;
                       }
                        i{
                            border-radius:50%;
                          
                            width: 40px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            font-size:20px; 
                        }
                        
                    }
                }
            
            span{
                color: red;
              }
        }
        
    }
    
</style>