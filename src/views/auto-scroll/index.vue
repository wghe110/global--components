<template>
  <div class="content">最近刚弄明白什么是组合式API，什么是选项式API，使用vue2.x这么多年，居然不知道一直在使用的居然是选项式API，以此文对这两个知识点做个总结，纪念自己的无知。</div>

  <hr>
  <div class="content">
    <wgh-auto-scroll :text="text">
    </wgh-auto-scroll>
  </div>

  <hr>
  <div class="content">
    <wgh-auto-scroll :text="text2">
    </wgh-auto-scroll>
  </div>

  <hr>
  <div class="content">
    <wgh-auto-scroll :text="text3">
    </wgh-auto-scroll>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('最近刚弄明白什么是组合的s')
const text2 = ref('最近刚弄明白什么是组合的a')
const text3 = ref('老外的东西是不错的，就是没有中文手册文档，拦住好多像我一样英语比较差的国人，限制了它的知名度，希望这份中文文档能帮助TinyMCE走进中国')
</script>

<style lang="scss" scoped>
.content {
  background-color: #ccc;
  width: 200px
}
</style>