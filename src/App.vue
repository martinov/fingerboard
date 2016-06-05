<template>
  <div id="wrapper">
    <toolbar></toolbar>
    <div class="container">
      <div class="col-sm-12">
        <router-view
          class="view"
          keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'

export default {
  components: {
    toolbar: Toolbar,
  },
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
