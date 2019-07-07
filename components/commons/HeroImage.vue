<template>
    <div class="mood mood--image" :class="gradient">
        <figure>
            <img :src="image" alt="venohr consult">
            <figcaption v-if="caption" v-html="caption"></figcaption>
            
            <h3>debug</h3>
            <pre>{{contentful}}</pre>
        </figure>
    </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import axios from '~/plugins/axios.js'
const contentful = createClient()


  export default {
    name: 'heroimage',
    props: {
      id: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      caption: {
        type: String
      },
      gradient: {
        type: String
      },
      contentful: ''
    }
}

</script>

<style lang="scss" scoped>
    .mood--image {
        padding: 10px;
        background: $primary;
        background: linear-gradient(135deg, $primary 0%, rgba(99,80,153,1) 29%, $secondary 92%);
        figure {
            position: relative;
            line-height: 0;
            margin: 0;
            padding: 0;
        }
        figcaption {
            color: rgba($white, 1);
            text-align: left;
            line-height: 28px;
            font-size: 24px;
            padding: 15px 0 5px;
            p {
                margin: 0;
            }
            @include tablet {
                font-size: 36px;
                line-height:38px;
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                top: 0;
                left: 32px;
                right: 32px;
                bottom: 0;
                color: rgba($primary, .95);
                padding: 15px 10px 5px;
            }

        }
        img {
            width: 100%;
            height: auto;
        }
    }
    .gradient1 {
        background: linear-gradient(45deg, $primary 0%, $secondary 92%);
    }
    .gradient2 {
        background: linear-gradient(60deg, $secondary 0%, $primary 100%);
    }
    .gradient3 {
        background: linear-gradient(35deg, $primary 0%,  $secondary 40%, rgba(99,80,153,1) 90%);
    }
</style>
