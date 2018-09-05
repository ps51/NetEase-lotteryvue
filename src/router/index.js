import Vue from 'vue'
import Router from 'vue-router'
//导入路由控制的模块
// import DaTing from '@components/DaTing/DaTing'
const DaTing = () => import(/* webpackCHunkName:"DaTing"*/'@/components/DaTing/Dating')
//双色球
const SSQ = () => import(/* webpackCHunkName:"SSQ"*/'@/components/DaTing/SSQ/ssq')
//双色球历史记录
const SSQLiShi = () => import(/* webpackCHunkName:"SSQLiShi"*/'@/components/DaTing/SSQ/ssqHistory')
const CurrentDetail = ()  => import(/* webpackCHunkName:"CurrentDetail"*/'@/components/DaTing/SSQ/currentDetail')
//历史子组件
const AllList = () => import(/* webpackCHunkName:"AllList"*/'@/components/DaTing/SSQ/allList')
//走势图
const TrendView = () => import(/* webpackCHunkName:"TrendView"*/'@/components/DaTing/Trend/TrendView')
//走势图下的子组件
const SSQTrend = () => import(/* webpackCHunkName:"SSQTrend"*/'@/components/DaTing/Trend/SSQTrend/SSQTrend')
//中奖篮球
const blueBall = () => import(/* webpackCHunkName:"blueBall"*/'@/components/DaTing/Trend/SSQTrend/blueBall')
//中奖红球
const redBall = () => import(/* webpackCHunkName:"redBall"*/'@/components/DaTing/Trend/SSQTrend/redBall')
//摇一摇购物车组件
const Cart = () => import(/* webpackCHunkName:"Cart"*/'@/components/Commons/Cart')
const JingJiChang = () => import(/* webpackCHunkName:"JingJiChang"*/'@/components/JingJiChang/JingJiChang')
const FaXian = () => import(/* webpackCHunkName:"FaXian"*/'@/components/FaXian/FaXian')
const KaiJiang = () => import(/* webpackCHunkName:"KaiJiang"*/'@/components/KaiJiang/KaiJiang')
const WoDe = () => import(/* webpackCHunkName:"WoDe"*/'@/components/WoDe/WoDe')
Vue.use(Router)


  

export default new Router({

   




  routes: [
    
      {path:'/',redirect:'/DaTing'},
      
      {path:'/DaTing',name:'DaTing',component:DaTing,
//       beforeEnter(to,from,next){
//         console.log(to)
//        console.log('sss')

//         next();
        
//  },
      children:[
        //双色球
          {
            path:'ssq',
            component:SSQ,
            name:'ssq'
          },
          
          //双色球历史开奖记录
          {
            redirect:{name:'AllList'},
            path:'SSQLiShi',
            component:SSQLiShi,
            name:'SSQLiShi',
        
            children:[
              {
                path:'AllList',
                component:AllList,
                name:'AllList'
              },
              {
                path:'CurrentDetail',
                component:CurrentDetail,
                name:'CurrentDetail'
              },
               
              

            ]
          },
          {
            path:'TrendView',
            component:TrendView,
            name:'trend',
            children:[
              {
                path:'SSQTrend',
                component:SSQTrend,
                name:'ssqTrend',
                children:[
                  {path:'redBallTrend',component:redBall,name:'redBall'},
                  {path:'blueBallTrend',component:blueBall,name:'blueBall'}
                ]
              }
            ]
          }
      ]
    
    },
   

      {path:'/JingJiChang',name:'JingJiChang',component:JingJiChang},
      {path:'/FaXian',name:'FaXian',component:FaXian},
      {path:'/KaiJiang',name:'KaiJiang',component:KaiJiang},
      {path:'/WoDe',name:'WoDe',component:WoDe},
      {path:'/Cart',name:'Cart',component:Cart}
    
    
  ],
  
  
})
