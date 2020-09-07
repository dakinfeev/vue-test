<template>
    <div class="item-wrap" v-on:click="highlight" v-bind:class="{'highlight-class' : isClick}">
      <span class="count-wrap">{{index + 1}}.</span>
      <div class="image-wrap">
        <img src="../assets/helmet.svg">
      </div>
      <div class="info-wrap">{{ data.name }}
        <div>{{time}} | {{ data.speed }} km/h</div>
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
    time: function() {
      const time = moment().millisecond(this.data.time).format('mm:ss.SSS')
      return time.valueOf();
    }
  },
  data:function () {
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
</style>
