<template>
    <div id="Tabbars">

        <ul>
            <li v-for="(item,index) in tabbs" :key="index" @click="pushToVie(item.path,index,$event)"
                :style="index==$store.state.selectedIndex?{color:'orange'}:{color:'white'}"
              
            >
           
           
                <i :class="item.icon"></i>
                {{item.title}}
                

            </li>
        </ul>


    </div>
</template>
<script>



export default {
    
        data(){
            return{
                tabbs:[
                    {title:'大厅',path:'/DaTing',icon:'fa fa-home'},
                    {title:'竞技场',path:'/JingJiChang',icon:'fa fa-futbol-o'},
                    {title:'发现',path:'/FaXian',icon:'fa fa-globe'},
                    {title:'开奖',path:'/KaiJiang',icon:'fa fa-trophy'},
                    {title:'我的',path:'/WoDe',icon:'fa fa-user-o'}
                ],
                 changeRed:0
            }
        },
        methods:{
            pushToVie(path,index,ev){
              console.log(index);
              this.$store.commit('SELECTEINDEX',{selectedIndex:index});
              localStorage.setItem('SELECTEINDEX',index);

             
                this.$router.push(path);
            }
        },
        mounted(){
            var selectedIndex = localStorage.getItem('SELECTEINDEX');
            this.$store.commit('SELECTEINDEX',{selectedIndex:selectedIndex});
        }
}
</script>
<style lang="scss" scoped>

    .red{
        color: red;
    }
#Tabbars{
    width:100%;
    height: 64px;
    background: rgb(10, 10, 10);
    position: fixed;
    bottom: 0;
    z-index: 100;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        li{
            flex: 1;
            color:rgb(122, 119, 119);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            i{
                font-size: 25px;
            }
        }
    }
}
</style>
