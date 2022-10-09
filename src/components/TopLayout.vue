<template>
  <main class="w-full h-screen ">
    <div class=" w-full h-4/6 backg flex items-center  ">
      <div
        class="container mx-auto flex w-full  items-center justify-between "
      >
        <div
          class=" w-full h-full flex   items-center justify-between gap-8  ml-8 md:flex-row   "
        >
          <div data-aos="fade-right" data-aos-duration="1000" class="text-activeText text-lg flex w-full flex-col justify-center  gap-8 items-center md:text-4xl sm:text-2xl lg:text-6xl md:flex-col ">
            <div class="flex flex-col w-full">
              <h2 class="tracking-wider">Find the insurance</h2>
              <h2 class="tracking-wider">Plan that fits your</h2>
              <h2 class="tracking-wider">needs</h2>
            </div>
            <div class="flex h-full w-full    md:flex-row">
              <button
                class="px-4  text-white  bg-blue-500 text-sm tracking-wider  rounded shadow-md md:text-lg lg:text-xl lg:px-12 lg:w-full"
              >
                Individual
              </button>
              <button
                class="px-4 text-blue-500  bg-white text-sm tracking-wider rounded shadow-md  md:text-lg lg:text-2xl lg:px-12 lg:w-full lg:py-4"
              >
                Company
              </button>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" class="w-0 h-0 flex items-center justify-center md:w-full md:h-full" >
            <img src="../assets/_Group_.png" class="w-full h-full md:w-4/6 md:h-4/6 " />
          </div>
        </div>
      </div>
    </div>

  </main>
</template>
<script setup>


</script>
<style>
.backg {
  background-image: url("../assets/background.JPG");
  background-size: cover;
  background-position:bottom;
  background-repeat:no-repeat

}
.imgbg {
  opacity: 0.5;
}
</style>
