<template>
    <div id="Focus">
 <swiper :options="swiperOption" class="swiper" >
      
        <swiper-slide v-for="(item,key) in response" :key="key" class="swiper1">
             <img :src=item.imageUrl alt="item.title" title="item.title">
             </swiper-slide>
      
        <div class="swiper-pagination" slot="pagination"></div>
       
      </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    components:{swiper,swiperSlide},
    created(){
        this.loadData('/api/focus','get')
    
    },
        data() {
      return {
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
}
</script>
<style lang="scss" scoped>
  #Focus{
            width: 100%;
            height: 130px;
            overflow: hidden;
           
        .swiper{
            width: 100%;
            height: 100%;
            .swiper1 img{
                width: 100%;
                height: 100%;
            }
        }
            
        }
       
</style>


