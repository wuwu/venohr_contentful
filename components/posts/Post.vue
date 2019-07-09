<template>
    <div class="section">
        <hero-image
            :id="post.fields.imageMain.sys.id"
            :image="post.fields.heroImage.fields.file.url"
            :caption="post.fields.heroTitle"
            :gradient="gradient">
        </hero-image>
        <h4 class="section--name">{{post.fields.sectionName}}</h4>
        <div class="content">
            <div v-if="post.fields.heroText" v-html="$md.render(post.fields.heroText)" class="body"></div>
            <h2 class="title is-2 primary is-centered">{{post.fields.title}}</h2>
            <div v-html="$md.render(post.fields.sectionBody)" class="body"></div>

        </div>
    </div>
</template>

<script>
  import HeroImage from '~/components/commons/HeroImage';

  export default {
    name: 'post',
    components: {
      HeroImage
    },
    props: {
      post: {
        type: Object,
        required: true
      },
      gradient: String
    }
  }
</script>

<style lang="scss" scoped>
    .section {
        margin-bottom: 32px;
        @include tablet {
            margin-bottom: 128px;
        }
    }
    .content {
        padding: 0 10px;
        @include tablet {
            padding: 0 64px;
        }
        h2 {
            
            @include tablet {
                padding: 0 32px 0 96px;

            }
        }
    }
    h2 {
        padding: 5px 0;

        @include tablet {
            padding: 0  32px 0 96px;
            font-size: 36px;
            margin: 30px 0;
        }
    }
    h4{
        font-family: $sans-font;
        font-weight: 700;
        font-style: normal;
        text-transform: uppercase;
        font-size: 16px;
        padding-left: 10px;
        margin: 30px 0;

    }
    .body {
        p {
            padding: 5px 0
        }
    }
</style>
