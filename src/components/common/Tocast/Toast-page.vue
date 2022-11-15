<template>
  <div v-show="isShow" class="toast-page">
    <div class="toast-mess">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'toast-page',
  data() {
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    showtoast (message, duration) {
      this.isShow = true,
      this.message = message
      setTimeout(() => {
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast-page {
  position: fixed;
  top: 56%;
  left: 50%;
  z-index: 99;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, .5);
}
.toast-mess {
  text-align: center;
  color: #fff;
  font-size: 16px;
}
</style>