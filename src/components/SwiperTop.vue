<template>
  <div class="relative  w-full flex items-center justify-center sw">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="w-4/6 absolute bottom-0"
    >
      <swiper-slide>
        <div
          :class="active ? 'active' : 'not active'"
          class="bg-cyan-100 rounded-lg flex items-center justify-center shadow-md h-full"
        >
          <img src="../assets/Asset 1 1.png" alt="" class="rounded-lg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          :class="active ? 'active' : 'not active'"
          class="bg-cyan-100 rounded shadow-md flex items-center justify-center h-full"
        >
          <img src="../assets/_Group_ (1).png" alt="" class="rounded-lg" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          :class="active ? 'active' : 'not active'"
          class="bg-cyan-100 rounded-lg flex items-center justify-center shadow-md h-full"
        >
          <img src="../assets/Слой 1.png" alt="" class="rounded-lg" />
        </div>
      </swiper-slide>
      ...
    </swiper>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { ref } from "vue";
// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let active = ref(false);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      active,
      modules: [Navigation, Pagination, A11y, Autoplay],
    };
  },
};
</script>
<style>
.swiper-button-next {
  position: absolute;
  right:0;
  width: 3rem;
  color: #402109;
}
.swiper-button-prev {
  position: absolute;

  width: 3rem;
  color: #402109;
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #402109;
  opacity: 1;
  width: 1rem;
  height: 1rem;
  transform: scale(1.01);
}
.sw {
  position: absolute;
top:0
}
.active {
  transform: scaleY(1.01);
}
</style>

<!-- 
<swiper-slide >
  <div class="w-full h-full  shadow-md">
    <div :class="active ? 'active' : 'not active'"  class="bg-cyan-100  rounded shadow-md flex items-center justify-center h-48 w-48">
    <img src="../assets/Asset 1 1.png" alt=""  class="h-full w-full"/>
  </div></div>
</swiper-slide>
<swiper-slide>
  <div class="w-full h-full bg-cover bg-center shadow-md">
    <div :class="active ? 'active' : 'not active'"  class="bg-cyan-100 px-4 rounded shadow-md flex items-center justify-center h-full bg-center bg-cover">
    <img src="../assets/_Group_ (1).png" alt="" />
  </div></div>
</swiper-slide>
<swiper-slide>
  <div class="w-full h-full bg-cover bg-center flex items-center justify-center shadow-md  rounded-lg">
    <div :class="active ? 'active' : 'not active'"  class="bg-cyan-100 px-4 rounded-lg flex items-center justify-center shadow-md h-full bg-center bg-cover">
    <img src="../assets/Слой 1.png" alt="" class=" rounded-lg" />
  </div></div>
</swiper-slide>

</swiper> -->

