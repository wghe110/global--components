<template>
  <div class="auto-scroll" ref="scrollRef">
    <span>{{ text }}</span>
  </div>
</template>

<script>
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'

export default {
  props: {
    speed: {
      type: Number,
      default: 60 // 60px/秒
    },
    text: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const scrollWidth = ref(0)
    const clientWidth = ref(0)
    const scrollRef = ref()

    const handleEndFn = () => {
      const scrollEle = scrollRef.value.firstElementChild;
      scrollEle.removeEventListener('transitionend', handleEndFn)

      scrollEle.style.transitionDuration = `0s`
      scrollEle.style.transform = `translateX(${clientWidth.value}px)`

      setTimeout(startMoveFn)
    }

    const stopMoveFn = () => {
      scrollRef.value.firstElementChild.removeEventListener('transitionend', handleEndFn)
    }

    const startMoveFn = () => {
      const scrollEle = scrollRef.value.firstElementChild;
      const len = scrollWidth.value + clientWidth.value
      const during = len / props.speed;

      scrollEle.style.transitionDuration = `${during}s`
      scrollEle.style.transform = `translateX(${-scrollWidth.value}px)`

      // scrollEle.removeEventListener('transitionend', handleEndFn)
      scrollEle.addEventListener('transitionend', handleEndFn)
    }

    const initFn = () => {
      nextTick(() => {
        const ele = scrollRef.value
        if (ele) {
          scrollWidth.value = ele.scrollWidth
          clientWidth.value = ele.clientWidth

          if (scrollWidth.value > clientWidth.value) {
            const scrollEle = scrollRef.value.firstElementChild;
            scrollEle.style.transitionDuration = `0s`
            scrollEle.style.transform = `translateX(${clientWidth.value}px)`

            setTimeout(startMoveFn)
          } else {
            stopMoveFn()
          }
        }
      })
    }

    // 监听入参变化
    watch(props.text, initFn)
    watch(props.speed, initFn)
    initFn()

    onBeforeUnmount(stopMoveFn)

    return {
      scrollRef,
    }
  },
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