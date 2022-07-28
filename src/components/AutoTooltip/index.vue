<template>
  <div class="auto-tooltip" ref="contentRef" :style="`-webkit-line-clamp: ${clamp}`">
    <el-tooltip 
      :content="content" 
      :disabled="isHideTip"
      :placement="placement"
      :effect="effect"
      >
        <span class="con">{{content}}</span>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    clamp: {
      type: Number,
      default: 1
    },
    placement: {
      type: String,
      default: 'top'
    },
    effect: {
      type: String,
      default: 'light'
    }
  },
  data() {
    return {
      isHideTip: true,
    }
  },
  watch: {
    content: {
      handler(val) {
        this.$nextTick(this.initFn)
      },
      immediate: true
    }
  },
  methods: {
    initFn() {
      const ele = this.$refs.contentRef
      if(ele) {
        // 原则上，不滚动情况下clientHeight = scrollHeight，但是在line-height比较小的时候，有些字体的scrollHeight会略微大于clientHeight，但是不会超过一个line-height
        if(ele.scrollHeight === ele.clientHeight) {
          this.isHideTip = true
        } else if(ele.scrollHeight - ele.clientHeight < ele.clientHeight / this.clamp) {
          this.isHideTip = true
        } else {
          this.isHideTip = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .auto-tooltip{
    font-size: inherit;
    overflow:hidden;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    >.con{
      font-size: inherit;
    }
  }
</style>