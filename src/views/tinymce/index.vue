<template>
  <wgh-tinymce v-model="content"></wgh-tinymce>

  <hr>

  <textarea :value="content" rows="6"></textarea>

  <hr>

  <a href="http://tinymce.ax-z.cn/" target="_blank">具体接口可参考:http://tinymce.ax-z.cn/</a>
  <hr>
  <a href="https://github.com/tinymce/tinymce-vue" target="_blank">https://github.com/tinymce/tinymce-vue</a>
</template>

<script setup>
import { ref } from 'vue'
const content = ref('')
</script>