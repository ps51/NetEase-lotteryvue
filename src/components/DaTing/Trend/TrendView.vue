<template>
    <div id="TrendView">
       <div class="topBar">
           
           <span @click="$router.go(-1)">
               <i class="fa fa-angle-left"></i>首页</span>
           <span>网易彩票走势图</span>
           
           <span>
               <i class="fa fa-download"></i>
           </span>
          
   
    
       </div>
        <Focus :focus="images"></Focus>
        <div class="navBar">
           
            <ul>
                <li v-for="(item,key) in navBarList" :key="key">
                    <div >
                     <i :class="item.icon" :style="item.istyle,item.bg"></i>
                    {{item.title}}
                    </div>
                </li>
            </ul>
        </div>
        <Games :resp="imageList"></Games>
        <transition name="fadeUp">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import Focus from '@/components/Commons/Focus'
import Games from '../Games/Games'
export default {
    components:{Focus,Games},
    data(){
            return{
                images:[],
                imageList:[]
            }
    },
  
    created(){
        this.loadData('/api/focus','get','images')
        this.loadData('/api/trendimageUrl','get','imageList')
    }
}
</script>
<style lang="scss" scoped>
        .fadeUp-enter-active,.fadeUp-leave-active{
            transition: all .3s;
        }
        .fadeUp-enter,.fadeUp-leave-to{
            transform: translateY(300px);
            opacity: 0;
        }
        
        #TrendView{
            position: fixed;
            top: 0;
            left: 0;
            bottom: 64px;
            right: 0;
            z-index: 5;
            background: rgb(240, 230, 230);
            overflow: scroll;
            .topBar{
                width: 100%;
                height: 50px;
                background: #d91d37;
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
                font-size: 20px;
            }
            :nth-child(3){
               margin-right: 10px;
               i{
                   font-size: 17px;
               }
            }
            }
           
        
               .navBar{
                    width: 100%;
                    height: 94px;;
                     background: #fff;  
           
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
