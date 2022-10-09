<script setup>
import Navbar from "./components/Navbar.vue";
import TopLayout from "./components/TopLayout.vue";
import SwiperTop from "./components/SwiperTop.vue";
import Services from "./components/Services.vue";
import Testmonials from "./components/Testmonials.vue";
import Assessments from "./components/Assessments.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main class=" ">
    <div class="container mx-auto">

      <Navbar />
       <TopLayout />
       <SwiperTop/>
      <Services />
  

        <Testmonials />
        <Assessments />
    
        <Footer />
    </div>
  </main>
</template>
