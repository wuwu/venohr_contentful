<template>
    <div class="wrapper">
      <div class="header header--simple">
        <logo></logo>
      </div>
      <nuxt/>
    </div>
</template>
<script>
import Logo from '~/components/commons/Logo'
export default {
    components: {
      Logo
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
  background: #fff;
}

.header {
  display: flex;
  justify-content: center;
}
</style>
