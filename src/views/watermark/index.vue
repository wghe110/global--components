<template>
  <wgh-watermark v-bind="init">
    <iframe src="https://openapi.lanxin.cn/doc/#/" frameborder="0" width="100%" height="600"></iframe>
  </wgh-watermark>

  <h2>参数：</h2>
  <el-tabs type="border-card" v-model="tabVal">
    <el-tab-pane label="字体">
      <el-form :model="formFont">
        <el-form-item label="content">
          <el-input v-model="formFont.content" />
        </el-form-item>

        <el-form-item label="fontFamily">
          <el-input v-model="formFont.fontFamily" />
        </el-form-item>

        <el-form-item label="fontColor">
          <el-input v-model="formFont.fontColor" />
        </el-form-item>

        <el-form-item label="fontSize">
          <el-input-number v-model="formFont.fontSize" />
        </el-form-item>

        <el-form-item label="lineHeight">
          <el-input-number v-model="formFont.lineHeight" />
        </el-form-item>

        <el-form-item label="fontWeight">
          <el-input-number v-model="formFont.fontWeight" />
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="图片">
      <el-form :model="formImage">
        <el-form-item label="image">
          <el-input v-model="formImage.image" disabled />
          <img :src="formImage.image" alt="" :width="formImage.imageWidth" :height="formImage.imageHeight"
            :style="{ opacity: formImage.imageOpacity }">
        </el-form-item>

        <el-form-item label="imageWidth">
          <el-input-number v-model="formImage.imageWidth" />
        </el-form-item>

        <el-form-item label="imageHeight">
          <el-input-number v-model="formImage.imageHeight" />
        </el-form-item>

        <el-form-item label="imageOpacity">
          <el-slider v-model="formImage.imageOpacity" :min="0" :max="1" :step="0.1" style="width: 200px" />
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>

  <div style="height: 20px"></div>

  <el-form :model="formCommon">
    <el-form-item label="width">
      <el-input-number v-model="formCommon.width" />
    </el-form-item>

    <el-form-item label="height">
      <el-input-number v-model="formCommon.height" />
    </el-form-item>

    <el-form-item label="rotate">
      <el-input-number v-model="formCommon.rotate" />
    </el-form-item>

    <el-form-item label="zIndex">
      <el-input-number v-model="formCommon.zIndex" />
    </el-form-item>

    <el-form-item label="xOffset">
      <el-input-number v-model="formCommon.xOffset" />
    </el-form-item>

    <el-form-item label="yOffset">
      <el-input-number v-model="formCommon.yOffset" />
    </el-form-item>

    <el-form-item label="fullscreen">
      <el-switch v-model="formCommon.fullscreen" />
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref, computed } from 'vue'

export default {
  setup() {
    const tabVal = ref('0')

    const formCommon = reactive({
      width: 100,
      height: 100,
      fullscreen: false,
      rotate: 0,
      zIndex: 10,
      xOffset: 0,
      yOffset: 0,
    })

    const formFont = reactive({
      content: '测试水印',
      fontSize: 14,
      lineHeight: 14,
      fontFamily: '微软雅黑',
      fontWeight: 400,
      fontColor: 'rgba(128, 128, 128, .3)',
    })

    const formImage = reactive({
      image: '/images/watermark.png',
      imageWidth: 20,
      imageHeight: 20,
      imageOpacity: 1,
    })

    const init = computed(() => {
      return tabVal.value === '0' ? Object.assign({}, formFont, formCommon) : Object.assign({}, formImage, formCommon)
    })

    return {
      tabVal,
      formCommon,
      formFont,
      formImage,
      init
    }
  }
}
</script>

<style lang="scss">
body {
  // background-image: url('$p/images/bg.png');
}
</style>