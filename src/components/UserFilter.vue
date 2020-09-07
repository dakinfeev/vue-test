<template>
  <div class="input-group mb-3">
    <input v-model=name v-debounce:300="setFilter" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
  </div>
</template>

<script>
export default {
  name: "UserFilter",
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    setFilter() {
      this.$emit('set-filter', {
        name: this.name
      })
    }
  }
}
</script>

<style scoped>
  .form-control {
    width: 95%;
  }
  .input-group {
    margin-bottom: 10px;
  }
</style>
