<template>
  <div class="editor-box">
    <Editor :init="config" v-bind="$attrs" />
  </div>
</template>

 <script>
import { computed } from 'vue'

import 'tinymce'
import Editor from "@tinymce/tinymce-vue";
import './langs/zh-Hans'

import initDefault from './init-default'

export default {
  components: {
    Editor
  },
  props: {
    init: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    const config = computed(() => {
      return Object.assign(initDefault, props.init)
    })

    return {
      config
    }
  }
}
</script>

 <style lang="scss" scoped>
 .editor-box {
   //  height: 100%;
 }
 </style>