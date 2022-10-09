<template>
    <div>
        <nav
        class="container px-6 py-8 mx-auto justify-between w-full md:flex md:justify-between md:items-center md:text-sm"
      >
      <div class="flex w-full justify-between text-mainText md:justify-between ">
        <img src="../assets/top_logo.png" alt="" class=""/>
         <!-- Mobile menu button -->
         <div @click="toggleNav" class="flex md:hidden">
           <button
             type="button"
             class="
              text-mainText
               hover:text-activeText
               focus:outline-none focus:text-gray-400
             "
           >
             <svg viewBox="0 0 24 24" class="w-6 h-6 ">
               <path
                 fill-rule="evenodd"
                 d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
               ></path>
             </svg>
           </button>
         </div>
         
       </div>
  
       <!-- Mobile Menu  -->
       <ul
         :class="showMenu ? 'flex' : 'hidden'"
         class="
           flex-col
           mt-8
           space-y-4
    xl:text-xl
  
   
           md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
         "
       >
         <li class="text-mainText hover:text-activeText cursor-pointer    ">Home</li>
         <div>
           <div class="relative">
             <!-- Dropdown toggle button -->
             <button
               @click="show = !show"
               class="flex items-center p-2   rounded-md"
             >
               <span class="mr-4">Services</span>
               <svg
                 class="w-5 h-5 text-mainText dark:text-white"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20"
                 fill="currentColor"
               >
                 <path
                   fill-rule="evenodd"
                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                   clip-rule="evenodd"
                 />
               </svg>
             </button>
       
             <!-- Dropdown menu -->
             <div
               v-show="show"
               class="
                 absolute
                 left-0
                 py-4
             
                 z-10
                 bg-white
                 rounded-md
                 shadow-xl
               w-48
                 text-mainText
                 border 
                 border-activeText
                 flex
                 flex-col
                 
               "
             >
               <router-link
                 to="/"
                 class="
                   
                   
                 tracking-wider
                 text-lg
                  text-gray-800
                   cursor-pointer
                   h-full
                  border-b
                  pl-2
                  pb-2
                   hover: hover:text-activeText
                 "
               >
                 Individual
               </router-link>
               <router-link
                 to="/"
                 class="
                     
                  text-gray-800
                  cursor-pointer
                 h-full
         tracking-wider
               text-lg
                pl-2
               mt-2
                 hover: hover:text-activeText
                 "
               >
                 Companies
               </router-link>
            
             </div>
           </div>
         </div>
           <li class="text-mainText hover:text-activeText cursor-pointer    ">About</li>
           <li class="text-mainText hover:text-activeText cursor-pointer   ">Contact Us</li>
           <li class="text-mainText hover:text-activeText cursor-pointer  ">Blog</li>
         <p class="     gap-2  text-activeText  " :class="showMenu ? 'flex' : 'hidden'"><img src="../assets/tel.png"/> 123456789</p>
       </ul>
       <p class="tracking-widest hidden md:flex text-activeText  font-bold   gap-2   text-xl " :class="showMenu ? 'hidden' : 'flex'"> <img src="../assets/tel.png"/> 022191622</p>
  
       
      </nav>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  export default {
    setup() {
      let showMenu = ref(false);
      let show = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      return { showMenu, toggleNav, show };
    },
  };
  </script>
  