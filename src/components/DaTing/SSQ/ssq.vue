<template>
    <div id="ssq">
       <div class="topBar">
           
           <span @click="$router.go(-1)">
               <i class="fa fa-angle-left"></i>首页</span>
           <span>双色球</span>
           
           <span @click="pushToHistory" >往期开奖</span>
       </div>
       <div class="itemtop"  @click="randomNum">
         
               <i class="fa fa-mobile" style="font-size:30px;margin-left: 6px;margin-top: 6px;display: block;"></i>
           <span style="margin-right: 20px;">摇一摇机选</span>
          
           <span>至少选择6个红球，一个篮球</span>
       </div>
       <div class="celltop">
        <ul>
           <li v-for="(item,key) in 33" :key="key"
          
           v-random ="redBalls"
           >
             {{item>9?item:'0'+item}}
           </li>
       </ul>
       </div>
       <div class="cellbuoom">
           <ul>
           <li  v-for="(item,key) in 16" :key="key"
            :style="item==blueBall?{background:'blue',color:'white'}:{}"
           >
                <b>{{item>9?item:'0'+item}}</b>  
           </li>
       </ul>
       </div>

        <div class="cartBar">
            <button @click="showRandomSelect =!showRandomSelect">机选</button>
            <button @click="addToCart">

                {{redBalls.length>0?'加入购彩车':'查看购彩车'}}   
                <span class="countBadge">{{orderCount}}</span>
                </button>
            <button @click="takeOrder">立即投注</button>
        </div>

        <ul class="randomList" v-if="showRandomSelect">
            <li v-for="(item,key) in randomList" :key="key" @click="selecteRanDom(item.num)">
                 <i class="fa fa-cc-visa fa-2x" style="color:goldenrod"></i>{{item.title}}
            </li>
        </ul>

    </div>
</template>
<script>

export default {
    data(){
        return{
            redBalls:[],
            blueBall:'',
            showRandomSelect:false,
            randomList:[
                {title:'1注',num:1},
                {title:'5注',num:5},
                {title:'10注',num:10}
            ]
        }
    },
    computed: {
        orderCount(){
            return this.$store.state.Cart.orderList.length;
        }
    },
    methods:{
        pushToHistory(){
            this.$router.push({name:'SSQLiShi'});
        },
        randomNum(){
         
            var rs = [];
            var obj = {};
            //获取随机的红球

            //取0-6之间的随机数如果大与6那么就为false
            while(rs.length<6){
                //向上取证取0-33的随机数
                var num = Math.ceil(Math.random()*33);
                //因为下面直接添加属性是没有值的所以为false
                //当随机到数那么false则取反变成true则添加今rs
                //当为true的时候则不添加，可达到不重复效果
                if (!obj[num]) {
                    obj[num] = true;
                    rs.push(num);
                }
            }
            //赋值红球
            this.redBalls =rs;
            //获取随机的篮球
            this.blueBall = Math.ceil(Math.random()*16);
        },
            
        //摇一摇随机选号
       shake(){
            if(window.DeviceMotionEvent) {
                var _this = this;
                var speed = 25;    // 用来判定的加速度阈值，太大了则很难触发
                var x, y, z, lastX, lastY, lastZ;
                x = y = z = lastX = lastY = lastZ = 0;
                window.addEventListener('devicemotion', function(event){
                    var acceleration = event.accelerationIncludingGravity;
                    x = acceleration.x;
                    y = acceleration.y;
                    if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed) {
                        // 用户设备摇动了，触发响应操作
                        // 此处的判断依据是用户设备的加速度大于我们设置的阈值
                         //alert('摇了');
                        //随机获取6个红球1个篮球
                        // 6个随机数且不重复
                        _this.randomNum();
                      
                    }
                    lastX = x;
                    lastY = y;
                }, false);
            }
        },
        selecteRanDom(num){
         
            //订单列表
            var orderList = [];
            while(num>0){
                var allBalls = [];
                var obj = {};
                //获取随机的红球
                while (allBalls.length<6) {
                    var key = Math.ceil(Math.random()*33);
                    if (!obj[key]) {
                        obj[key] = true;
                        allBalls.push(key);
                    }
                }
                allBalls.push(Math.ceil(Math.random()*16));
                this.$store.commit('ADDTOORDERLIST',{order:allBalls});
                num--;
            }
            this.$router.push({name:'Cart'});
        },
        //加入购物车
            addToCart(){

                    if (this.redBalls.length) {
                        //将this.redBalls转换为数组
                        var order = Array.from(this.redBalls);
                        order.push(this.blueBall);
                        this.$store.commit('ADDTOORDERLIST',{order:order});

                    }else{
                        this.$router.push({name:'Cart'})
                    }
                    this.redBalls = [];
                    this.blueBall = '';
            },
             takeOrder(){
        if (this.redBalls.length) {
            this.addToCart();
        }
        this.$router.push({name:'Cart'})
    },
    },
    //立即投注
   
    created(){
        this.shake();
    }
}
</script>
<style lang="scss" scoped>
.countBadge {
        position: fixed;
        display: block;
        width: 30px;
        height:30px;
        background: red;
        bottom: 30px;
        right: 37%;
        border-radius: 50%;
        color: white;
        text-align: center;
        line-height: 30px;
    }
     @mixin ballLi{
             ul{
                    width: 100%;
                        
                      border-top: 1px solid #b4a8a8;
                    display: flex;
                    flex-wrap:wrap;
                   
                    li{
                        width: 30px;
                        height: 30px;
                        margin-left:20px;
                        margin-top: 7px;
                        border-radius: 50%;
                       
                        text-align: center;
                        line-height: 30px; 
                       background: white;
                        font-size: 16px;
                        span{
                            margin-right: 5px;
                        }
                    }
                }
                
        }

        #ssq{
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0px;
            right: 0;
            z-index: 102;
            background: rgb(224, 223, 219);
            .topBar{
                width: 100%;
                height: 50px;
                background:#d91d37;
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
          .itemtop{
               border-top: 1px solid #b4a8a8;
              width: 100%;
              height: 44px;
              background: #ccc;
              display: flex;
              justify-content: space-between;
              padding-left: 5px;
              padding-right: 10px;
              box-sizing:border-box;
              line-height: 44px;
            color: #999;
          }
          .celltop{
              width: 100%;
           

               @include ballLi;
               color: #bc102d;
          }
          .cellbuoom{
              width: 100%;
           
           
               @include ballLi;
               color: blue;
          }
          .cartBar{
              position: absolute;
              bottom: 0;
              width:100%;
            height: 64px;
            background: #2e3235;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            button{
                border: none;
                outline: none;
                background: none;
                border-radius: 5px;
                font-size: 15px;
            }
            button:nth-child(1){
                color: white;
                width: 20%;
                height: 100%;
                background: #666;
            }
             button:nth-child(2){
                color: #604928;
                width: 35%;
                height: 100%;
                background: #ecebd3;
            }
             button:nth-child(3){
                color: #604928;
                width: 35%;
                height: 100%;
                background: #ffb400;
            }
          }
          .randomList{
              position: fixed;
              width: 30%;
              background: #fff;
              bottom: 64px;
              left: 15px;
              li{
                  height: 50px;
                  width: 100%;
                  border-bottom: 1px solid lightgray;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
              }
          }
        }
</style>
