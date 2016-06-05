<template>
  <div class="exercise well" v-show="active">
    <h5>Exercise {{ exercise.num }}</h5>
    <h3>{{ exercise.description }}</h3>
    <img :src="exercise.image" class="img-responsive" />
    <div class="status" style="margin-top: 10px;">
      Next exercise in: {{ remainingTime }} | {{ durationRemaining }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['exercise'],
  data() {
    return {
      active: false,
      index: null,
      remainingTime: 0,
      durationRemaining: '',
    }
  },
  events: {
    showExercise(exerciseToShow) {
      this.active = (this.exercise.num == exerciseToShow)
    }
  },
  watch: {
    'active': function (val, oldVal) {
      let self = this;
      if (val) {
        this.remainingTime = this.exercise.duration
        this.durationRemaining = '#'.repeat(this.remainingTime);
        this.durationTimeoutId = setTimeout(function() {
          self.$dispatch('exerciseCompleted')
        }, self.exercise.duration * 1000)
        this.intervalId = setInterval(self.onTick, 1000);
      }
      else {
        clearTimeout(this.durationTimeoutId);
        clearTimeout(this.intervalId);
      }
    },
  },
  methods: {
    onTick() {
      this.remainingTime -= 1
      this.durationRemaining = this.durationRemaining.slice(0, -1)
    }
  }
  /*,
  attached: function() {
    this.active = true
  },
  detached: function() {
    this.active = false
  }
  */
}
</script>
