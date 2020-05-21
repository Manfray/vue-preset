<template>
  <div class='detail'>
    <div class="opacity-btn" @click="$router.push('/home')"></div>
    <img class="detail-img" src="../assets/detail.png" alt="">
  </div>
</template>
<script>
export default {
  name: 'Detail'
}
</script>
<style scoped lang='scss'>
.detail {
  // width: 100%;
  position: relative;
  .opacity-btn {
    width: 150px;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
  }
}
.detail-img {
  width: 100%;
  height: 100%;
}
</style>
