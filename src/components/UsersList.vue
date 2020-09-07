<template>
  <div class="list-group-wrapper">
    <transition name="fade">
      <div class="loading" v-show="loading">
        <span class="fa fa-spinner fa-spin"></span> Loading
      </div>
    </transition>
    <div class="list-group" id="infinite-list">
      <div class="list-group-item" v-for="(item, key) in items" :key="key">
        <UserItem :data="item" :index="key"></UserItem>
      </div>
    </div>
  </div>
</template>

<script>
import users from '@/api/users';
import UserItem from '@/components/UserItem';
export default {
  name: "UsersList",
  components: {
    UserItem
  },
  data: function () {
    return {
      loading: false,
      nextItem: 1,
      items: [
      ]
    }
  },
  created() {
    this.loadMore();
  },
  mounted() {
    window.onscroll = () => {
      let bottomWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      bottomWindow && this.loadMore();
    }
  },
  methods: {
    loadMore () {
      this.loading = true;
      let items = [];
      users.getUsers().then(response => {
        items = response.data.users;
      });
      setTimeout(() => {
        this.items.push(...items)
        this.loading = false;
      }, 500);
    },
  }
}
</script>

<style>
.list-group-wrapper {
  width: 320px;
  position: relative;
  margin: auto;
}
.list-group {
  overflow: auto;
  border: 2px solid #dce4ec;
  border-radius: 5px;
}
.list-group-item {
  margin-top: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #dce4ec;
  text-align: start;
  vertical-align: middle;
}
.list-group-item img {
  width: 50%;
}
.loading {
  text-align: center;
  position: fixed;
  color: #fff;
  z-index: 9;
  background: red;
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - 45px);
  top: calc(50% - 18px);
}
</style>
