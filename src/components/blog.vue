<script setup>

const props = defineProps({
  blogs: {
    type: Object,
    required: true,
  },
})


</script>

<template>
  <div>
    <div v-for="blog in props.blogs" :key="blog.id" class="flex h-40 m-5 pb-3 cursor-pointer border-b-2">
        <img src="../assets/images/bg.png" alt="blog" class="rounded-lg">
        <div class="px-6">
            <p class="text-md">{{blog.title}}</p>
            <p class="text-sm  mt-4">{{blog.body}}</p>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
