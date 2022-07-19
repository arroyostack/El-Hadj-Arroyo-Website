<template>
  <div class="wrapper">
    <div class="xl:w-1/2 lg:w-5/6 py-4 px-8 text-white shadow-lg rounded-lg">
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
            >Howdly, my name is</a
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
          El Hadj Arroyo
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
          I build
          <span class="text-teal-300"
            >web apps for <br />
            people</span
          >
        </p>
        <br />
        <div
          class="
            mt-2
            tracking-widest
            text-lg
            title-font
            font-medium
            mb-10
            hover:font-mono hover:text-yellow-200
          "
        >
          <p>
            I am a <span class="text-teal-300">Front End developer </span> based in Spain. Passionate for <span class="text-teal-300">web technologies</span>, <span class="text-teal-300">Javascript</span> ecosystem and how <span class="text-teal-300">web apps</span> are evolving.
          </p>
          <p>
            My main skills cover <span class="text-teal-300">Html (85%), CSS (75%), Javascript (75%), Vue 3 (70%), Firebase (50%), Sass (50%), Git (50%), Worpress (80%)</span> as well web developing tools and some products from Adobe <span class="text-teal-300">Creative Cloud</span>. In progress: Node js, Jest js, Pinia js
          </p>
          <p>
            <span class="text-teal-300">I enjoy</span> very much <span class="text-teal-300">working along with others</span> in a team environment as well as I am able to complete a project on a one person team.
          </p>
        </div>
      </div>

      <div class="flex justify-start mt-4 animate-bounce">
        <router-link :to="{ name: 'projects' }">
          <a href="#" class="text-xl font-medium text-teal-300 mt-5"
            >portfolio</a
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
.wrapper {
  height: 100vh;
}

@media only screen and (max-width: 600px) {
  .wrapper {
    height: 100%;
  }
}
</style>