<template>
<main class="bg-navBg w-full h-full ">
<div class="container mx-auto my-4 px-4 py-2 h-full  "   data-aos="zoom-in"  data-aos-duration="3000" >

  <div class=" flex  justify-between">
    <p></p>
    <h1 class="text-mainText font-extrabold  text-sm tracking-wider">See what clients are saying about us...</h1>
    <img src="../assets/“.png" alt="">
</div>
  <swiper
    :modules="modules"
   :breakpoints="breakpoints"
    :slides-per-view="1.5"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"

    @swiper="onSwiper"
    @slideChange="onSlideChange" 
    class=" flex flex-wrap w-full  h-full text-sm"

    >
    <swiper-slide>
      <div id="content ">
        <div class="testimonial  text-test bg-testBg w-full lg:w-5/6   shadow-lg">
        <blockquote class=" w-3/6">
   Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.vel scelerisque nisl consectetur et.vel scelerisque nisl consectetur et.
        </blockquote>
      </div>
    </div>
    <div class="arr"></div>
    <div class="w-16 h-16 rounded-full flex items-center justify-center">
      <img src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png" alt="" class="h-full w-full">
    </div> 
    </swiper-slide>
    <swiper-slide>
      <div id="content">
        <div class="testimonial  w-full lg:w-5/6  text-test grid bg-testBg rounded items-center justify-center w-6/6 shadow-lg">
        <blockquote>
          Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.vel scelerisque nisl consectetur et.vel scelerisque nisl consectetur et.
        </blockquote>
        
        
      </div>
      <div class="arr"></div>
      <div class="w-16 h-16 rounded-full flex items-center justify-center">
        <img src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png" alt="" class="h-full w-full">
      </div> 
        </div>
    </swiper-slide>
    
    ...
  </swiper>
</div>
</main>  
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
import {ref,onMounted} from 'vue'
  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
    
      let breakpoints = ref({
        100:{
          slidesPerView:1,

        },
        300:{
          slidesPerView:1,

        },
        700:{
          slidesPerView:1,

        },
        850:{
          slidesPerView:2,

        },

      
      });

      
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

   

      return {
        onSwiper,
        onSlideChange,
      breakpoints,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>
<style>
  


.testimonial blockquote {

 
padding:8px;
  position: relative;
  border: none;
  border-radius: 8px;
  width: 100%;
  align-items: justify;
 
}


.testimonial blockquote:before {
  top: 0;
  left: 10px;
}

.testimonial blockquote:after {
  content: "\201D";
  right: 10px;
  bottom: -0.5em;
}

.arr{
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #C4C4C4;
  margin: 0 0 0 60px;
 
}

.testimonial p {
  margin: 8px 0 0 20px;
  text-align: left;

}

</style>