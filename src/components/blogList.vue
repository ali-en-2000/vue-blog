<script setup>
import Blog from './blog.vue';
import axios from 'axios'

import { reactive, onMounted } from 'vue'
var state = reactive({
    blogs:null
});
onMounted(() => {
    getBlogs()

})


async function getBlogs(){    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
        console.log(result);
        state.blogs = result?.data
    })
    .catch((error) => {
      console.log(error);
    });
    
    }
</script>

<template>
  <div>
    <Blog :blogs="state.blogs"/>
  </div>
</template>

<style scoped>

</style>
