import { defineStore } from 'pinia'

const globalStore = defineStore('global', {
  state() {
    return {
      showHeader: false,
      showAside: true,
    }
  }
})

export default globalStore