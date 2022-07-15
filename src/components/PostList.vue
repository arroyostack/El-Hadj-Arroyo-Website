<template>
<div class="flex flex-wrap gap-10 justify-center m-6 sm:justify-start ">
  <div class="post-list" v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/> 
  </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props){
        console.log(props.posts)
    }
}
</script>

<style>

</style>