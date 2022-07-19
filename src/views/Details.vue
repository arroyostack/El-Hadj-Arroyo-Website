<template>
  <!-- <div class="home">
    
    <div v-if="post" class="post">
      <h3>{{ post.title }}</h3>
      <p class="pre">{{ post.body }}</p>
      <button @click="handleClick">Click</button>
    </div>
    <div v-else>
    

    
      <h1><Spinner /></h1>
    </div>
  </div> -->

  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div v-if="error">
      {{ error }}
    </div>

    <div class="max-w-screen-md px-4 md:px-8 mx-auto">
      <h1
        class="
          text-gray-800 text-2xl
          sm:text-3xl
          font-bold
          text-center
          mb-4
          md:mb-6
        "
      >
        {{ post.title }}
      </h1>
      <div class="overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
        <img
          :src="post.img"
          loading="lazy"
          alt="project picture"
          class="w-full h-full object-cover object-center pb-5"
        />
        <!-- TAGS -->
        <div class="grid grid-cols-2 md:grid-cols-4 rounded-lg pt-5">
          <div class="flex flex-col p-2" v-for="tag in post.tags" :key="tag">
            <div
              class="
                tex-black
                text-sm
                bg-slate-200
                sm:text-sm
                md:text-sm
                font-bold
                border-2
                p-2
                rounded-md
                hover:bg-purple-500 hover:text-black
              "
            >
              {{ tag }}
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 rounded-lg pt-5">
          <div class="flex p-2">
            <a :href="post.git" target="empty">
              <div
                class="
                  tex-black
                  text-sm
                  bg-slate-200
                  sm:text-sm
                  md:text-sm
                  font-bold
                  border-2
                  p-2
                  rounded-md
                  hover:bg-purple-500
                  flex
                  mr-2
                  items-center
                "
              >
                <p class="pr-2">GIT</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </div>
            </a>
            <a :href="post.live" target="empty">
              <div
                class="
                  tex-black
                  text-sm
                  bg-slate-200
                  sm:text-sm
                  md:text-sm
                  font-bold
                  border-2
                  p-2
                  rounded-md
                  hover:bg-purple-500
                  flex
                  items-center
                "
              >
                <p class="pr-2">Demo</p>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- BODY -->

      <div
        class="text-gray-500 sm:text-lg mb-6 md:mb-8"
        v-html="post.body"
      ></div>

      <img :src="post.img2" alt="" />
      <div
        class="text-gray-500 sm:text-lg mb-6 md:mb-8"
        v-html="post.body2"
      ></div>

      <!-- triar -->
      <div class="container">
        <main class="grid">
          <article>
            <img
              src="https://i.postimg.cc/qM26f88S/Screen-Shot-2022-07-20-at-12-04-10-AM.png"
              alt="Sample photo"
            />
            <div class="text">
              <h3 class="light-text text-slate-400 font-medium">
                Music Event Company
              </h3>
              <p class="font-bold text-2xl pt-2 pb-5">DenisDeson Eventos</p>
              <a
                href="https://denisdesoneventos.com/"
                class="light-text btn btn-primary btn-block text-purple-500"
                target="empty"
                ><strong>Live Demo</strong></a
              >
            </div>
          </article>
          <article>
            <img
              src="https://i.postimg.cc/jj2jjN7s/Screen-Shot-2022-07-20-at-12-07-35-AM.png"
              alt="Sample photo"
            />
            <div class="text">
              <h3 class="light-text text-slate-400 font-medium">Artist</h3>
              <p class="font-bold text-2xl pt-2 pb-5">Malick Mbengue</p>
              <a
                href="https://malickmbengue.com/"
                class="light-text btn btn-primary btn-block text-purple-500"
                target="empty"
                ><strong>Live Demo</strong></a
              >
            </div>
          </article>
          <article>
            <img
              src="https://i.postimg.cc/RZNr6TXb/Screen-Shot-2022-07-20-at-12-10-18-AM.png"
              alt="Sample photo"
            />
            <div class="text">
              <h3 class="text-slate-400 font-medium light-text">Restaurant</h3>
              <p class="font-bold text-2xl pt-2 pb-5">La Isleta de la Vina</p>
              <a
                href="https://www.isletadelavina.com/"
                class="light-text btn btn-primary btn-block text-purple-500"
                target="empty"
                ><strong>Live Demo</strong></a
              >
            </div>
          </article>
          <article>
            <img
              src="https://i.postimg.cc/59nkBCYc/Screen-Shot-2022-07-20-at-12-12-23-AM.png"
              alt="Sample photo"
            />
            <div class="text">
              <h3 class="light-text text-slate-400 font-medium">Artist</h3>
              <p class="font-bold text-2xl pt-2 pb-5">Leo Power</p>
              <a
              target="empty"
                href="https://leopower.net/"
                class="light-text btn btn-primary btn-block text-purple-500"
                
                ><strong>Live Demo</strong></a
              >
            </div>
          </article>
          <article>
            <img
              src="https://i.postimg.cc/sgScNQXg/Screen-Shot-2022-07-20-at-12-14-04-AM.png"
              alt="Sample photo"
            />
            <div class="text">
              <h3 class="light-text text-slate-400 font-medium">Artist</h3>
              <p class="font-bold text-2xl pt-2 pb-5">Juan Sainz</p>
              <a
                href="https://www.juansainz.com"
                class="light-text btn btn-primary btn-block text-purple-500"
                target="empty"
                ><strong>Live Demo</strong></a
              >
            </div>
          </article>
          <article>
            <img
              src="https://i.postimg.cc/QtPKDmYG/Screen-Shot-2022-07-20-at-12-16-30-AM.png"
              alt="Sample photo"
            />
            <div class="text">
              <h3 class="light-text text-slate-400 font-medium">
                Music School (coming soon...)
              </h3>
              <p class="font-bold text-2xl pt-2 pb-5">En Clave Flamenca</p>
              <a
                href="https://claveflamenca.com/"
                class="light-text btn btn-primary btn-block text-purple-500"
                ><strong>Live Demo</strong></a
              >
            </div>
          </article>
        </main>
      </div>
      <!-- tirar -->
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRoute, useRouter } from "vue-router";
import { projectFirestore } from "@/firebase/config";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    console.log(route);
    const { post, error, load } = getPost(props.id);

    load();

    const handleClick = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();
      router.push({ name: "Home" });
    };

    return { post, error, handleClick };
  },
};
</script>

<style>
.light-text {
  color: rgba(0, 0, 0, 0.335);
}

.tags {
  display: flex;
  flex-direction: row;
}

li {
  margin-left: 15px;
}

img {
  max-height: 425px;
}

.my-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
}

.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.grid > article img {
  max-width: 100%;
}

.grid .text {
  padding: 20px;
}
</style>