<script setup>
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
const router = useRouter();





var state = reactive({
  blog: null
});
onMounted(() => {
  const route = useRoute()
  console.log(route.params.id)
  getBlog(route.params.id)

})


async function getBlog(id) {
  axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .then((result) => {
      state.blog = result?.data
    })
    .catch((error) => {
      console.log(error);
    });

}


</script>

<template>
  <div>
    <!-- component -->
    <div class="flex flex-wrap md items-center h-screen">
      <div class="bg-white w-full md:w-1/2">
        <div class="mx-32">
          <h1 class=" font-bold mt-16 text-lg">title : {{ state?.blog?.title }}</h1>


          <!-- description -->
          <div class="description w-full  md:w-2/3 mt-16 text-gray-500 text-sm">
            description : {{ state?.blog?.body }}
          </div>

          <button class="uppercase mt-5 text-sm font-semibold hover:underline bg-gray-300 rounded-md px-4 py-2" @click="router.push('/')">برگشت
          </button>
        </div>
      </div>
      <div class="bg-red-600 w-full md:w-1/2 ">
        <img src="../../assets/images/post3.jpg" class="h-full w-full" alt="" />
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>
