<template>
<main class="bg-blue-300 w-full h-full ">
<div class="container mx-auto py-8 px-8 h-full " >

  <div class=" flex  justify-between">
    <p></p>
    <h1 class="text-mainText font-extrabold text-xl tracking-wider">See what clients are saying about us...</h1>
    <img src="../assets/“.png" alt="">
</div>
  <swiper
    :modules="modules"
   :breakpoints="breakpoints"
    :slides-per-view="2"
    :space-between="10"
    navigation
    :pagination="{ clickable: true }"

    @swiper="onSwiper"
    @slideChange="onSlideChange" 
    class=" flex flex-wrap items-center justify-center h-full"
    >
    <swiper-slide>
      <div id="content">
        <div class="testimonial">
        <blockquote>
   Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </blockquote>
        <div></div>
        <div class="w-96 h-96 rounded-full bg-white ">
          <img src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png" alt="" class="h-full w-full">
        </div> 
        </div>
        </div>
    </swiper-slide>
    <swiper-slide>
      <div id="content">
        <div class="testimonial">
        <blockquote>
Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </blockquote>
        <div></div>
     
         <div class="w-full h-full rounded-full  ">
          <img src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png" alt="" class="h-full w-full">
        </div> 
        
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
        300:{
          slidesPerView:1,

        },
        700:{
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
  margin: 10px 10px 0;
  background: #efefef;
  padding: 20px 60px;
  position: relative;
  border: none;
  border-radius: 8px;
  font-style: italic;
}

.testimonial blockquote:before,
.testimonial blockquote:after {
  content: "\201C";
  position: absolute;
  font-size: 80px;
  line-height: 1;
  color: #757f9a;
  font-style: normal;
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

.testimonial div {
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #efefef;
  margin: 0 0 0 60px;
}

.testimonial p {
  margin: 8px 0 0 20px;
  text-align: left;

}

</style>