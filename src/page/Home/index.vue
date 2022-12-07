<script setup>
import searchIcon from '../../components/icons/search.vue';
import Header from '../../components/header.vue';
import blogList from '../../components/blogList.vue';
</script>

<template>
  <div class="px-5">

    <Header />

    <div class="flex flex-wrap items-center h-screen">
      <div class="bg-red-600 w-full md:w-1/2">
        <img src="../../assets/images/hero_img%20-%20Copy.jpg" class=" w-full" alt="" />
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
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 md:col-span-9 rounder-md h-screen ">
        <blogList/>
      </div>
      <div class="col-span-0 md:col-span-3 rounder-md grid grid-cols-1 text-center mt-7 h-96  hidden md:block">
        <div class=" border-y-2 border-blue-600  py-5">
          <p class="bold text-xl">
            جستوجو
          </p>
          <div class="flex justify-center">
            <div class="mt-3 ">
              <div class=" flex  items-stretch w-full rounded">
                <span
                  class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                  id="basic-addon2">
                  <searchIcon />
                </span>
                <input type="search"
                  class="form-control flex-auto min-w-0 block w-full px-3 text-md py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="دنبال چی میگردی؟" aria-label="Search" aria-describedby="button-addon2">
              </div>
            </div>
          </div>
        </div>
        <div class=" border-b-2 border-blue-600 py-5 ">
          <p class="bold text-xl mb-10">
            پست های اخیر
          </p>
          <div>
            <div class="flex justify-around items-center gap-2 my-2 cursor-pointer border rounded-md h-24 py-3">
              <img src="../../assets/images/bg.webp" class="h-full" alt="عکس">
              <p>لورم متن ساختگی</p>
            </div>
            <div class="flex justify-around items-center gap-2 my-2 cursor-pointer border rounded-md h-24 py-3">
              <img src="../../assets/images/post1.jpg" class="h-full" alt="عکس">
              <p>لورم متن ساختگی</p>
            </div>
            <div class="flex justify-around items-center gap-2 my-2 cursor-pointer border rounded-md h-24 py-3">
              <img src="../../assets/images/hero_img.jpg" class="h-full" alt="عکس">
              <p>لورم متن ساختگی</p>
            </div>
          </div>
        </div>
        <div class="py-5">
          <p class="bold text-xl mb-10">
            تگ ها
          </p>
          <div class="flex flex-wrap gap-5 ">
            <a href="" class="bg-gray-300 rounded-md hover:text-blue-600 px-2 py-1 ">برنامه نویسی</a>
            <a href="" class="bg-gray-300 rounded-md hover:text-blue-600 px-2 py-1 ">کسب و کار </a>
            <a href="" class="bg-gray-300 rounded-md hover:text-blue-600 px-2 py-1 ">فرانت اند</a>
            <a href="" class="bg-gray-300 rounded-md hover:text-blue-600 px-2 py-1 ">حفظ انگیزیه</a>
            <a href="" class="bg-gray-300 rounded-md hover:text-blue-600 px-2 py-1 ">برنامه نویسی</a>
            <a href="" class="bg-gray-300 rounded-md hover:text-blue-600 px-2 py-1 ">آینده شغلی</a>
            <a href="" class="bg-gray-300 rounded-md hover:text-blue-600 px-2 py-1 ">مهارت های نرم</a>
            <a href="" class="bg-gray-300 rounded-md hover:text-blue-600 px-2 py-1 ">برنامه نویسی</a>
          </div>

          
        </div>

      </div>
    </div>



    
  </div>

</template>

<style scoped>

</style>
