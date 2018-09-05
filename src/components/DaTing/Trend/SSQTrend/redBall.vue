<template>
    <div id="redBall">
        <div class="cellLeft">
            <ul>
                <li v-for="(item,key) in redBallData" :key="key">
                    {{item.period}}
                </li>
            </ul>
        </div>
        <div class="cellRight">

        </div>
    </div>
</template>
<script>
export default {
    computed:{
        redBallData(){
           
            return this.$store.getters.redBallData;
        }
    },
   
}
</script>
<style lang="scss" scoped>
    #redBall{
        width: 100%;
        .cellLeft{
            width: 20%;
            height: 100%;
            ul{
                width: 100%;
                height: 100%;
                li{
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    display: flex;
                    flex-direction: row;
                    &:nth-child(2n-1){
                        background: rgba(240, 225, 225, 0.932);
                    }
                }
            }
        }
    }
</style>
