<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title</label>
      <input type="text" v-model="title" required />
      <label>Content</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown" />
      <button>Add Post</button>
      <h1>{{ title }}</h1>
      <h1>{{ body }}</h1>
      <div class="pill" v-for="tag in tags" :key="tag">#{{ tag }}</div>
    </form>
  </div>

</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { projectFirestore, timestamp } from "../firebase/config";
export default {
  setup() {
    //ref variables

    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    //router

    const router = useRouter();
    console.log(router);

    //ref function variables

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/, ""); //it clears white space
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      
      const post = { 
       title: title.value,
       body: body.value,
       tags: tags.value,
       createdAt: timestamp()
       };

      const res = await projectFirestore.collection("posts").add(post);

      router.push({ name: "Home" });
    };

    return { handleSubmit, handleKeydown, title, body, tags, tag };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
}

input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}

textarea {
  height: 160px;
  /* animation: spin 3s ease infinite; */
}

label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}

label:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}

button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}

/* @keyframes spin {
    to {
        transform: rotateZ(-360deg);
    }
} */
</style>