<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <a class="navbar-brand" v-link="'/home'">
        <i class="glyphicon glyphicon-time"></i>
        {{* title }}
      </a>
      <!--ul class="nav navbar-nav">
        <li><a v-link="'/home'">Home</a></li>
        <li><a v-link="'/routines'">Routines</a></li>
      </ul-->
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: 'Fingerboard Trainer',
    };
  },
};
</script>
