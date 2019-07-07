<template>
  <div class="container">
    <section-post v-for="(post, i) in blogPosts" :key="i" :id="post.fields.sectionName | slugify" :post="post" gradient="gradient1"></section-post>
    <button-scroll-top></button-scroll-top>
  </div>
</template>

<script>

import {createClient} from '~/plugins/contentful.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import SectionPost from '~/components/posts/Post'
import ButtonScrollTop from '~/components/partials/ButtonScrollTop.vue'

const client = createClient()



export default {
  components: {
    SectionPost,
    ButtonScrollTop
  },
  async asyncData(env) {
    let post = await client.getEntry('c17bvS8ZCjp4uWDyZiF5S')
    return {
        contentful: post,
        blogPosts: post.fields.pageSectionReference
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
