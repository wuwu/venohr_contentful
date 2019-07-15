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

<style lang='scss'>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#yella-venohr .body {
  img {
    width: 250px;
    height: auto;
  }
  p:nth-child(3) {
    text-align: center;
  }
  @include tablet {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    p:first-child {
      grid-column: 2 / 4;
      grid-row: 1;
    }
    p:nth-child(2) {
      grid-column: 2 / 4;
      grid-row: 2;
    }
    p:nth-child(3) {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
      text-align: left;
    }
  }
}

#kontakt .body {
  @include tablet {
    p:nth-child(4){
      float: left;
      line-height: 36px;
      width:40%;
    }
    img{
      padding: 15px 0 0;
    }
    p:nth-child(5){
      float: left;
      line-height: 36px;
    }
  }
}
</style>
