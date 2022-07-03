//take an arrayy of posts
//create a new tag set (no duplicates)
//add the tag of each post to the tag set
//return a single array of tags based on the set

import {
    ref
} from "vue";

const useTags = posts => {
    const tags = ref([])
    const tagSet = new Set()

    //iterate through posts and return single posts
    posts.forEach(item => {
        //iterate through all single posts and add all tags to "tagSet" variable
        item.tags.forEach(tag => tagSet.add(tag))
    })
    tags.value = [...tagSet]

    return { tags }
}

export default useTags