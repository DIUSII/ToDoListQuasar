<template>
  <div class="app">
    <login />
  </div>
</template>

<script>
import login from './components/login/login.vue'

export default {
  name: 'App',
  components: {
    login
  }
}
</script>

<style lang = "scss">
  body{
    background: #FCFCFF;
  }
  
</style>
