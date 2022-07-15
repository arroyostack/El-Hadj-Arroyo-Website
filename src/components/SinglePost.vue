<template>
  <div class="">
      <router-link :to="{name: 'Details', params: {id: post.id}}">
      
      <div class="w-80 py-4 px-8 bg-white  tex-black bg-opacity-90 hover:bg-white  hover:bg-opacity-4 shadow-lg rounded-lg my-10 hover:scale-105">
  <div class="flex justify-start md:justify-start -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-teal-300" :src="`${post.img}`">
  </div>
  <div>
    <h2 class=" text-3xl font-semibold">{{ post.title }}</h2>
    <p class="mt-2">{{ post.brief }}</p>
  </div>
  <br>
  <span v-for="tag in post.tags" :key="tag" class="font-semibold text-cyan-700"> @{{ tag }}</span>
  <div class="flex justify-end mt-4">
    
    <a href="#" class="text-xl font-medium text-indigo-500">More</a>
    
  </div>
</div>
</router-link>
  </div>

 
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0, 200) + '....'
        })
    
        return { snippet }
    }

}
</script>

<style>
 
.post{
    margin: 0 40px 30px;
    padding: 30px;
    border-bottom: 1px dashed #e7e7e7;
}

.post h3 {
    display: block;
    position: relative;
    font-size: 26px;
    color: black;
    margin-bottom: 10px;
    max-width: 400px;
}

.post h3:before {
    content: "";
    display: block;
    widows: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
}



</style>