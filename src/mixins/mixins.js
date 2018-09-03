var mixin = {
    data(){
        return{
            response:{},
            navBarList:[
                {title:'领红包',icon:'fa fa-btc',style:{color:'lightblue'},istyle:{border:'1px solid lightblue'},bg:{backgroundColor:'lightblue'}},
                {title:'开奖',icon:'fa fa-trophy',style:{color:'orange'},istyle:{border:'1px solid orange'},bg:{backgroundColor:'orange'}},
                {title:'下载',icon:'fa fa-cloud-download',style:{color:'red'},istyle:{border:'1px solid red'},bg:{backgroundColor:'red'}},
                {title:'资讯',icon:'fa fa-file-text-o',style:{color:'lightgreen'},istyle:{border:'1px solid lightgreen'},bg:{backgroundColor:'lightblue'}}

            ]
        }
    },
    
        
    
    methods:{
        pushToVie(){
            console.log(this)
        },
        loadData(url,method,res){
          
            if (method === 'get') {
                this.$http.get(this.$http.defaults.baseURL+url)
                .then((response)=>{
                    this.response = response.data;
                    this[res] = response.data;
                    // console.log(this.response);
                })
            }
            
        },
        
        pushToView(item,params){
            //传递过来的数据可能性
            /*
                对象，对象里是都有path，是否有name属性
            
            */
           console.log(params)
           if (item instanceof String) {
               this.$router.push({path:item})
               console.log(item)
           }
            if (item.path) {
                this.$router.push({path:item.path})
            }
            console.log(params   )
            if (item.name) {
                this.$router.push({name:item.name,params:params})
            }
            
        }
    }
}
//导出mixin对象
export default mixin;