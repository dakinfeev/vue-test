<template>
  <div id="app" class="card">
    <div class="card-body">
      <UsersList/>
    </div>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue'

export default {
  name: 'App',
  components: {
    UsersList
  }
}
</script>

<style>
#app {
  min-width: 320px;
  max-width: 1920px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
