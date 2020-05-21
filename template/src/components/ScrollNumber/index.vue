<template>
  <div class='scroll-number'>
    <template v-for="(item, index) in formatStringNumberArray">
      <div :key="'snw_' + index" :class="'scroll-number__wrap' + (background ? ' background' : '')">
        <scroll-item :num="item"></scroll-item>
      </div>
    </template>
  </div>
</template>
<script>
/**
 *
 */
import ScrollItem from '@/components/ScrollNumber/ScrollItem'
export default {
  name: 'ScrollNumber',
  props: {
    background: Boolean,
    stringNumber: {
      type: [String, Number],
      default: ''
    },
    withThousandDot: Boolean,
    maxLength: {
      type: Number,
      default: 6
    }
  },
  computed: {
    formatStringNumberArray () {
      const resArray = Math.round(this.stringNumber).toString().split('')
      const arrLength = resArray.length
      if (resArray.length < this.maxLength) {
        for (let i = 0; i < (this.maxLength - arrLength); i++) { resArray.unshift('0') }
      }
      return resArray
    }
  },
  components: {
    ScrollItem
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped lang='scss'>
.scroll-number {
  display: flex;
}
.background {
  background-color: #636366;
  padding: 3px;
  margin: 3px;
  border-radius: 3px;
}
</style>
