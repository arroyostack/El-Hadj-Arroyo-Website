import {
  projectFirestore
} from "../firebase/config";
import { ref } from "vue";


const getPost = (id) => {
    const post = ref([])
    const error = ref(null)

    const load = async () => {
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000)
      // })
        try {
          let res = await projectFirestore.collection('posts').doc(id).get()
          console.log(res)

          if(!res.exists){
            throw Error('that post does not exist')
          }
          console.log(res)
          post.value = {...res.data(), id: res.id}
          console.log(post.value)
          
          
        } catch (err) {
          error.value = err.message; 
          console.log(error.value)
        }
      }

      return { post, error, load }
}

export default getPost