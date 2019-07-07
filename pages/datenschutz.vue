<template>
  <div class="container">
    <a href="/" class="button">zurück</a>
    <div class="body" v-html="blogPost.fields.body"></div>
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
  
  layout: 'simple',

  components: {
    SectionPost,
    ButtonScrollTop
  },
  async asyncData(env) {
    let post = await client.getEntry("5AzKYyQJthlneeT6oHzYKn")
    return {
        blogPost: post
    }
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .body {

    p {
      margin: 1em 0;
    }
  
    h1, h2, h3 {
    margin: 1em 0;
    }
  } 
}

.button{
  align-self: center;
  margin: 32px 0;
  background: $primary;
  color: $white;
  font-size: 20px;
  font-family: $sans-font;
  border-radius: 5px;
  padding: 8px 16px;
  text-decoration: none;

  &:hover {
      background: $secondary;
  }
}
</style>
