<template>
  <div @click="childFn">child</div>
</template>

<script>
export default {
  setup() {
    const childFn = () => {
      return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
          return Promise.resolve('ιθΏ')
        } else {
          return Promise.reject('ζη»')
        }
      })
    }
    return {
      childFn
    }
  }
}
</script>