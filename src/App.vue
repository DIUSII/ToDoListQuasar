<template>
  <div id="app">
    <block></block>
  </div>
</template>

<script>
import block from './components/block'

export default {
  name: 'App',
  components: {
    block
  }
}
</script>

<style lang = "scss">
  body{
    background: #FCFCFF;
  }
  
</style>
