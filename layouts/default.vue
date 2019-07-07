<template>
    <div class="wrapper">
        <header-global></header-global>
        <nuxt/>
        <footer-global></footer-global>
    </div>
</template>
<script>
import HeaderGlobal from '../components/partials/GlobalHeader'
import FooterGlobal from '../components/partials/GlobalFooter'
export default {
    components: {
      FooterGlobal,
      HeaderGlobal
    }
  }
</script>
<style>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
    max-width: 920px;
    margin: 0 auto;
    background: $white;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
