
<template>
    <div id="currentDetail">
      <span>{{currentItem.period}}</span>
       <ul>
          <li v-for="(item,key) in currentItem.winnerNumber" :key="key"
            :style="key>5?{color:'blue',borderColor:'blue'}:{}"
          >
        {{item>9?item:'0'+item}}
          </li>
      </ul>
      <table class="table table-bordered">
         <thead>
              <tr>
                  <th>本期销量(元)</th>
              <th>
                  奖池奖金(元)
                  </th>
                  </tr>

                   </thead>  
                
                  <tbody>
              <tr>
                   
                <td>308,676,480</td>
              <td>1,062,181,270</td>
             
              </tr>
            </tbody>
      </table>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>奖项</th>
                    <th>中奖次数</th>
                    <th>每项奖金(元)</th>
                </tr>
               
            </thead>
            <tbody>
                 <tr>
                     <td>一等奖</td>
                     <td>5</td>
                     <td>7,864,370</td>
                     
                 </tr>
                  <tr>
                     <td>二等奖</td>
                     <td>70</td>
                     <td>255,747</td>
                     
                 </tr>
                  <tr>
                     <td>三等奖</td>
                     <td>1,045</td>
                     <td>3,000</td>
                     
                 </tr>
                  <tr>
                     <td>四等奖</td>
                     <td>5</td>
                     <td>7,864,370</td>
                     
                 </tr>
                  <tr>
                     <td>五等奖</td>
                     <td>1,041,620</td>
                     <td>10</td>
                     
                 </tr>
                  <tr>
                     <td>六等奖</td>
                     <td>10,982,801</td>
                     <td>5</td>
                     
                 </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
export default {
    data(){
        return{
            currentItem:{}
        }
    },
    created(){
     
        this.$store.commit('ssqSelectedIndex',{ssqSelectedIndex:0});
      localStorage.setItem('ssqSelectedIndex',0);
       
       
    },
    activated(){
        
         if (this.$route.params.item) {
             this.currentItem = this.$route.params.item;
        }else{
            this.currentItem = JSON.parse(localStorage.getItem('currentSSQ'));
        }
    },
    deactivated(){
      
    }
}
</script>
<style lang="scss" scoped>

        #currentDetail{
         
            padding: 10px;
            ul{
                width: 100%;
                display: flex;
                flex-direction: row;
                margin-top: 10px;
                li{
                    font-size: 15px;
                    margin-right: 10px;
                    width: 25px;
                    height: 25px;
                    border: 1px solid red;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 25px;
                    color: red;
                }
            }
        }
        table{
            text-align: center;
        }
        th{
            text-align: center;
            border: 1px solid #d7d4c8 !important;
           background: 1px solid #fcfbf6;
         
        }
        td{
         color: red;
        }
</style>

   