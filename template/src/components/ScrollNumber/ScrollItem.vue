<template>
  <div class="num-block" :data-num="num">
    <span>
      0
      <br>1
      <br>2
      <br>3
      <br>4
      <br>5
      <br>6
      <br>7
      <br>8
      <br>9
      <br>
    </span>
    <!-- <span v-else>，</span> -->
  </div>
</template>

<script>
export default {
  name: 'scrollItem',
  props: {
    num: {
      type: [String, Number],
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .num-block {
    position: relative;
    height: 1em;
    overflow: hidden;
    // top: 50%;
    // transform: translate(0,-50%);
  }
  .num-block span {
    position: relative;
    display: block;
    line-height: 1;
    transition: bottom .5s ease-in-out;
    // margin-left: .4vw;
  }
  .num-block[data-num="0"] span {bottom: 0em;}
  .num-block[data-num="1"] span {bottom: 1em;}
  .num-block[data-num="2"] span {bottom: 2em;}
  .num-block[data-num="3"] span {bottom: 3em;}
  .num-block[data-num="4"] span {bottom: 4em;}
  .num-block[data-num="5"] span {bottom: 5em;}
  .num-block[data-num="6"] span {bottom: 6em;}
  .num-block[data-num="7"] span {bottom: 7em;}
  .num-block[data-num="8"] span {bottom: 8em;}
  .num-block[data-num="9"] span {bottom: 9em;}

</style>
