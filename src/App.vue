<script setup>
import Navbar from "./components/Navbar.vue";
import TopLayout from "./components/TopLayout.vue";
import SwiperTop from "./components/SwiperTop.vue";
import Services from "./components/Services.vue";
import Testmonials from "./components/Testmonials.vue";
import Assessments from "./components/Assessments.vue";
import Footer from "./components/Footer.vue";
import AOS from 'aos'
import 'aos/dist/aos.css'
import {onMounted} from 'vue'

onMounted(()=>{
  AOS.init()
})

</script>

<template>
  <main class=" ">
    <div data-aos="fade-down">

      <Navbar /> </div>
      <div class="relative">
       <TopLayout />

         <SwiperTop/>
        </div>
         <Services />
  

        <Testmonials />
        <Assessments />
    
        <Footer />
   
  </main>
</template>
