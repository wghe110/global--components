<template>
  <div class="auto-scroll" ref="scrollRef">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    speed: {
      type: Number,
      default: 30 // 30px/秒
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      scrollWidth: 0,
      offsetWidth: 0,
      moved: true,
    }
  },
  watch: {
    text: {
      handler(val) {
        this.initFn()
      },
      immediate: true,
    }
  },
  beforeUnmount() {
    const scrollEle = this.$refs.scrollRef.firstElementChild;
    scrollEle.removeEventListener('transitionend', this.setScrollLenFn)
  },
  methods: {
    initFn() {
      this.$nextTick(() => {
        const ele = this.$refs.scrollRef
        if (ele) {
          this.scrollWidth = ele.scrollWidth
          this.offsetWidth = ele.offsetWidth
          this.moved = false;

          if (this.scrollWidth > this.offsetWidth) {
            this.scrollFn()
          } else {
            ele.firstElementChild.removeEventListener('transitionend', this.setScrollLenFn)
          }
        }
      })
    },
    scrollFn() {
      const scrollEle = this.$refs.scrollRef.firstElementChild;

      this.setScrollLenFn();
      scrollEle.removeEventListener('transitionend', this.setScrollLenFn)
      scrollEle.addEventListener('transitionend', this.setScrollLenFn)
    },
    setScrollLenFn() {
      const scrollEle = this.$refs.scrollRef.firstElementChild;
      let during = 0;
      let len = this.offsetWidth

      if (!this.moved) {
        during = this.scrollWidth / this.speed;
        len = -this.scrollWidth
      } else {
        setTimeout(this.setScrollLenFn, 0)
      }

      scrollEle.style.transitionDuration = `${during}s`
      scrollEle.style.transform = `translateX(${len}px)`

      this.moved = !this.moved;
    },
  }
}
</script>

<style lang="scss" scoped>
.auto-scroll {
  overflow: hidden;
  font-size: inherit;
  white-space: nowrap;

  >span {
    font-size: inherit;
    display: inline-block;
    transition-timing-function: linear;
  }
}

@keyframes scrolling {

  0%,
  100% {
    transform: translateX(0);
    opacity: 1;
  }

  70%,
  96% {
    transform: translateX(-100%);
    opacity: 1;
  }

  97% {
    transform: translateX(-100%);
    opacity: 0;
  }

  98% {
    transform: translateX(0);
    opacity: 0;
  }

  99% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>