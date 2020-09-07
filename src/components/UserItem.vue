<template>
    <div class="item-wrap" v-on:click="highlight" v-bind:class="{'highlight-class' : isClick}">
      <span class="count-wrap">{{ position }}</span>
      <div class="image-wrap">
        <img v-bind:class="[helmetColor]" src="../assets/helmet.svg">
      </div>
      <div class="info-wrap">{{ data.name }}
        <div>{{time}} | {{ speedString }}</div>
      </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
  name: "UserItem",
  props: {
    index: Number,
    data: Object
  },
  computed: {
    position: function () {
      let position = this.index + 1;
      return `${position}.`
    },
    speedString: function () {
      return `${this.data.speed} km/h`
    },
    time: function() {
      const time = moment().millisecond(this.data.time).format('mm:ss.SSS')
      return time.valueOf();
    },
    helmetColor: function () {
      return this.data.color.toLocaleLowerCase();
    }
  },
  data: function () {
    return {
      isClick: false
    }
  },
  methods: {
    highlight() {
      this.isClick = !this.isClick;
    }
  }
}
</script>

<style scoped>
  .highlight-class {
    background-color: purple;
  }
  .info-wrap {
    max-width: 320px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .image-wrap img{
    margin-left: 20%;
  }
  .image-wrap .red {
    filter: hue-rotate(140deg);
  }
  .image-wrap .green {
    filter: hue-rotate(250deg);
  }
  .item-wrap {
    display: flex;
  }
</style>
