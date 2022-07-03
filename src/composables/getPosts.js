import {
  projectFirestore
} from "../firebase/config";
import {
  ref
} from "vue";


const getPosts = () => {
  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 2000)
    // })
    try {
      let res = await projectFirestore.collection('posts')
      .orderBy('createdAt', 'desc')
      .get()
      


      posts.value = res.docs.map(doc => {
        console.log()
        return {
          ...doc.data(),
          id: doc.id
        }
      })
    } catch (err) {
      error.value = err.message;
      console.log(error.value)
    }
  }

  return {
    posts,
    error,
    load
  }
}

export default getPosts