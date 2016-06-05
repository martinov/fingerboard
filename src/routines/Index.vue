<template>
  <div id="routines">
    <div class="col-sm-12 well">
      <a v-link="{ name: 'routine', params: {id: 1}}">
        <img :src="image" class="img-responsive" />
      </a>
      <h4>{{ msg }}</h4>
    </div>
    <div class="col-sm-12">
      <ul>
        <li v-for="r in routines">
          <a v-link="{ name: 'routine', params: { id: r.id }}">{{ r.title }}</a>
          - {{ r.duration }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: '/static/img/routine-1/P5309524.JPG',
      msg: 'This simple app is helping me learn Vue.js while using my fingerboard at the same time.',
      routines: [{
        id: 1,
        title: 'Entry level routine',
        duration: '10 min',
      }],
    };
  },
};
</script>

<style>
#routines .well {
  text-align: center;
}
</style>
