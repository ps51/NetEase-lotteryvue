<template>
    <div id="Games">
        <ul>
            <li v-for="(item,key) in resp" :key="key" @click="pushToView(item)">
                
                <div class="cellLeft">
                     <img  :src=item.imageUrl alt="">
                </div>

                <div class="cellRight">
                    {{item.title}}
                    <p :style="item.iscolor">{{item.hdname}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>
<script>
export default {
      props:['resp'],
    created(){
        this.loadData('/api/games','get')
      
      
    }
}
</script>
<style lang="scss" scoped>
#Games{
            width: 100%;
            margin-top: 15px;
            background: #fff;
            ul{
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                li{
                    width: 50%;
                   display: flex;
                   padding: 10px;
                   box-sizing: border-box;
                   flex-direction: row;
                     border-bottom: 1px solid rgb(235, 225, 225);
                     
                    .cellLeft{
                        width: 30%;
                       
                        img{
                            width: 106%;
                             
                        }
                    }
                    .cellRight{
                        width: 70%;
                        font-size: 14px;
                      padding-left:10px;
                      p{
                        height: 14px;
                        padding-top: 7px;
                        font-size: 12px;
                        color: red;
                      }
                    }
                }
            }
        }
</style>


