<script setup>
import Header from '../components/header.vue'
import Test from "../components/test.vue";
</script>

<template>
  <div class="overflow-scroll">
    <div>
    <Header/>

    </div>
    <div class="flex flex-wrap items-center  p-10">
        <div class="bg-red-600 w-full md:w-1/2">
          <img
              src="../assets/images/hero_img%20-%20Copy.jpg"
              class="h-screen w-full"
              alt=""
          />
        </div>
        <div class="bg-white w-full md:w-1/2">
          <div class="my-auto">
            <h2 class="text-4xl  sm:text-center sm:text-5xl">به بلاگ برنامه نویسی ما خوش آمدید</h2>
            <p class="mt-10 text-lg leading-normal text-gray-600 sm:text-center">
              ما در این جا تجربیات و چالش هایی که در زمینه برنامه نویسی داشتیم رو به اشتراک می گذاریم
              امیدوارم این مطالب برای شما مفید باشه
            </p>

          </div>
        </div>

      </div>
    <Test/>





  </div>
</template>

<style scoped>

</style>
