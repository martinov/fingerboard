<template>
  <div id="routine-{{ $route.params.id }}">
    <h2>{{ routine.title }} - {{ routine.duration }}</h2>
    <exercise v-for="e in routine.exercises" :exercise="e"></exercise>
    <!--div class="row">
      <div class="col-sm-2">
        <button class="btn btn-info">Prev</button>
      </div>
      <div class="col-sm-8" style="text-align:center;">
        <h4>Progress bar placehodler</h4>
      </div>
      <div class="col-sm-2" style="text-align:right;">
        <button class="btn btn-md btn-primary next-button" @click="showNextExercise()">Next</button>
      </div>
    </div-->
  </div>
</template>

<script>
import Exercise from './Exercise.vue'

export default {
  components: {
    exercise: Exercise,
  },
  data() {
    return {
      routine: {
        id: 1,
        title: 'Entry level routine',
        duration: '10 min',
        exercises: [{
          num: 1,
          description: '10 second dead hang',
          image: '/static/img/routine-1/P5309524-01.JPG',
          duration: 60,
          intervals: 10,
        },
        {
          num: 2,
          description: '15 seconds dead hang + 2 pull-ups',
          image: '/static/img/routine-1/P5309524-02.JPG',
          duration: 60,
          intervals: 15,
        },
        {
          num: 3,
          description: '2 offset pull-ups (each arm)',
          image: '/static/img/routine-1/P5309524-03-1.JPG',
          image2: '/static/img/routine-1/P5309524-03-2.JPG',
          duration: 60,
          intervals: [30, 30],
        },
        {
          num: 4,
          description: '15 seconds dead hang',
          image: '/static/img/routine-1/P5309524-04.JPG',
          duration: 60,
          intervals: 15,
        },
        {
          num: 5,
          description: '12 seconds dead hang + 5 knee raises',
          image: '/static/img/routine-1/P5309524-05-1.JPG',
          image2: '/static/img/routine-1/P5309524-02.JPG',
          duration: 60,
          intervals: [12, 48],
        },
        {
          num: 6,
          description: '16 seconds offset hang',
          image: '/static/img/routine-1/P5309524-06-1.JPG',
          image2: '/static/img/routine-1/P5309524-06-2.JPG',
          duration: 60,
          intervals: [8, 8],
        },
        {
          num: 7,
          description: '5 pull-ups',
          image: '/static/img/routine-1/P5309524-02.JPG',
          duration: 60,
        },
        {
          num: 8,
          description: '8 seconds bent arm hang (elbows @ 90 degrees)',
          image: '/static/img/routine-1/P5309524-05-1.JPG',
          duration: 60,
          intervals: [8],
        },
        {
          num: 9,
          description: '1 pull-up then 10 seconds hang (+1 pull-up)',
          image: '/static/img/routine-1/P5309524-04.JPG',
          duration: 60,
        },
        {
          num: 10,
          description: 'Dead hang to failure any holds',
          image: '/static/img/P5309524.JPG',
          duration: 60,
        }],
      },
      currentIndex: 1,
    };
  },
  methods: {
    showNextExercise() {
      this.currentIndex = (this.currentIndex !== 10 ? this.currentIndex + 1 : 1)
      this.$broadcast('showExercise', this.currentIndex)
    },
  },
  ready: function () {
    // Show the first exercise when ready.
    this.$broadcast('showExercise', this.currentIndex)
  },
  destroyed: function () {
    console.log(this.exerciseIntervalId, 'destroyed -> exercise ID')
    clearInterval(this.exerciseIntervalId)
  },
  events: {
    exerciseCompleted() {
      this.showNextExercise()
    }
  }
};
</script>
