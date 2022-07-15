<template>
  <div class="xl:w-3/5 lg:w-4/6 py-4 px-8 text-white shadow-lg rounded-lg">
    <div class="flex justify-start">
      <img
        class="
          w-20
          h-20
          object-cover
          rounded-full
          border-2 border-indigo-500
          hover:scale-150
        "
        src="../assets/El-hadj.jpg"
      />
    </div>
    <div>
      <div class="flex justify-start mt-4 pb-4">
        <a
          href="#"
          class="
            tracking-widest
            text-lg
            title-font
            font-medium
            mb-1
            text-yellow-200
            hover:scale-110 hover:skew-x-6
          "
          >Now that you're here...</a
        >
      </div>
      <p
        class="
          pb-2
          text-slate-100
          sm:text-6xl
          text-5xl
          hover:text-yellow-200 hover:scale-110 hover:skew-x-6
        "
      >
        Have a <span class="text-teal-300">look</span>
      </p>
      <p
        class="
          animate-pulse
          text-4xl
          sm:text-5xl
          title-font
          font-light
          sm:tracking-wide
          hover:text-yellow-200 hover:scale-110 hover:skew-x-6
        "
      >
        at <span class="text-teal-300">my demos</span> and "&ltCode /&gt"
      </p>
      <br />
      <p
        class="
          mt-2
          tracking-widest
          text-lg text-slate-300
          title-font
          font-medium
          mb-10
          hover:font-mono hover:text-yellow-200
        "
      >
        Here you can find a <span class="text-teal-300">selection of my projects</span> as well as visit its <span class="text-teal-300">Github</span> or <span class="text-teal-300">Live demo</span> links. These are the <span class="text-teal-300">projects I most enyoyed</span> given the technology and approach and equally the one's <span class="text-teal-300">I most learned from</span>. <span class="text-teal-300">Hands on experience!</span>.
      </p>
    </div>
  </div>

  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <div>
        <PostList :posts="posts" />
      </div>
      <!-- <div><TagCloud :posts="posts"/></div> -->
    </div>
    <div v-else>
      <h1><Spinner /></h1>
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";

export default {
  name: "HomeView",
  components: { PostList, Spinner, TagCloud },

  setup() {
    const { posts, error, load } = getPosts();

    load();
    return { posts, error };
  },
};
</script>

<style>
.home {
  height: 100%;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: flex;
}

.my-back {
  background: red;
}
</style>