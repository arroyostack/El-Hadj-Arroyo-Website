<template>
  <div class="tags">
     <div v-if="error">{{ error }}</div>
     <div v-if="posts.length" class="layout">
         <PostList :posts="postWithTag"/>
         <TagCloud :posts="posts"/>
     </div>
     <div v-else>
         <Spinner />
     </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import TagCloud from '../components/TagCloud.vue'
import PostList from "../components/PostList";
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import { computed } from '@vue/runtime-core';

export default {
    components: { PostList, Spinner, TagCloud },
    setup(){
        const route = useRoute()
        const { posts, error, load } = getPosts()

        load()

        const postWithTag = computed(() => {
            return posts.value.filter(item => {
                return item.tags.includes(route.params.tag)
            })
        })

        return { error, posts, postWithTag }
    }
}
</script>

<style>

.tags {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

</style>