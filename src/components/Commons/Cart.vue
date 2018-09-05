
  <template>
    <div id="Cart">
        <div class="topBar">
          <span style="display:flex;justify-content:center;align-items:center"
            @click="$router.go(-1)"
          >
     <i class="fa fa-angle-left" style="margin:5px;font-size:40px"></i>
                返回
          </span>
          <span>双色球</span>
          <span style="margin-right:5px;" @click="pushToHistory">往期开奖</span>
        </div>
      
          <Focus :foucs="focus"></Focus>
            <div class="gameBanner"  style="width:100%;height:30px;background:#fff">

            </div>
            <div class="bottom">
                 
                <button @click="$router.push({name:'ssq'})">
                     <i class="fa fa-plus"></i>
                    <span>手动选号</span>
                </button>
                <button @click="selecteRanDom">
                     <i class="fa fa-plus"></i>
                    <span>机选一注</span>
                </button>
                <button @click="cleanCart">
                    <i class="fa fa-trash-o"></i>
                    <span>清空列表</span>
                </button>
          
              </div>
            <ul class="orderList">
                <li v-for="(item,index) in orderList" :key="index">
                         <i class="fa fa-times-circle-o fa-2x" @click="deleteOrder(index)"></i>
                          <div>
                             <span v-for="(num,key) in item" :key="key"
                                :style="key==6?{color:'blue',fontSize:'20px'}:{color:'red',fontSize:'20px'}"
                             >
                             {{num>9?num:'0'+num}}

                             </span>
                        </div>
                          <i class="fa fa-angle-right" style="color:gray;font-size:20px;float:right;margin-right:20px;"></i>
                </li>
            </ul>
          
    </div>
</template>
    


<script>
import Focus from '@/components/Commons/Focus'
export default {
    components:{Focus},
    data(){
        return {
            focus:[]
        }
    },
     methods: {
    pushToHistory() {
      this.$router.push({ name: "SSQLiShi" });
    },
    deleteOrder(index){
        this.$store.commit('DELETEORDER',index);
    },
    selecteRanDom(){
        var allBalls = [];
        var obj = {};
        //获取随机的红球
        while(allBalls.length<6){
            var key = Math.ceil(Math.random()*33);
            if(!obj[key]){
                obj[key]=true;
                allBalls.push(key);
            }
        }
        allBalls.push(Math.ceil(Math.random()*16));
        this.$store.commit('ADDTOORDERLIST',{order:allBalls})
    },
    cleanCart(){
        this.$store.commit('CLEANCART')
    }
  },
  computed: {
    orderList() {
      return this.$store.state.Cart.orderList;
    }
  },
  created() {
    this.loadData("/api/focus", "get", "focus");
  }
}
</script>

<style lang="scss" scoped>
    #Cart{
        position: fixed;
        top: 0;
        bottom:0;
        left: 0;
        right: 0;
        background: rgb(226, 226, 226);
        .topBar{
            width: 100%;
            height: 8%;
            background: rgba(230, 129, 204, 0.925);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            color: white;
            font-size: 20px;
        }
        .focus{
            width: 100%;
            height: 22%;;
        }
        .bottom{
            width: 100%;
            padding: 10px;
            height: 20%;
            .btnBox{
                width: 100%;
                height: 75%;
                display: flex;
                justify-content: space-around;
                align-content: center;
                button{
                    border: none;
                    border-radius: 5px;
                    background: white;
                    outline: none;
                    height: 30px;;
                }
            }
           
        }
 .orderList{
                width: 100%;
                height: 75%;
                overflow-y: scroll;
                li{
                    width: 100%;
                    height: 80px;
                    background: white;
                    color: lightgray;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-bottom: 1px solid lightgray;
                }
            }
    }
</style>
