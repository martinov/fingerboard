<template>
  <v-layout row wrap>
    <v-flex>
      <v-carousel hide-controls="true">
        <v-carousel-item
          v-for="(item,i) in items"
          v-bind:key="i"
          v-bind:src="item.src"
          transition="fade"
          reverseTransition="fade"
        ></v-carousel-item>
      </v-carousel>
      <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'exercises',
  data () {
    return {
      valueDeterminate: 50,
      items: [
        {
          src: '/static/img/routine-1/P5309524-01.JPG'
        },
        {
          src: '/static/img/routine-1/P5309524-02.JPG'
        },
        {
          src: '/static/img/routine-1/P5309524-03-1.JPG'
        },
        {
          src: '/static/img/routine-1/P5309524-04.JPG'
        },
        {
          src: '/static/img/routine-1/P5309524-05-1.JPG'
        },
        {
          src: '/static/img/routine-1/P5309524-06-1.JPG'
        },
        {
          src: '/static/img/routine-1/P5309524-06-2.JPG'
        }
      ],
      interval: {}
    }
  },
  methods: {
    startTimer () {
      this.interval = setInterval(() => {
        if (this.valueDeterminate === 100) {
          // clearInterval(this.interval)
          this.valueDeterminate = 0
        }
        this.valueDeterminate += 1
      }, 1000)
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.startTimer()
  }
}
</script>

<style lang="stylus">
  #carousel-view
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>
