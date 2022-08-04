function getRatio(context) {
  if (!context) {
    return 1
  }
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1
  return (window.devicePixelRatio || 1) / backingStore
}

import { h, watchEffect, ref } from 'vue'
import { onFontsReady } from 'vooks'
import './watermark.scss'

export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: undefined
    },
    imageWidth: {
      type: Number,
      default: undefined
    },
    imageHeight: {
      type: Number,
      default: undefined
    },
    imageOpacity: {
      type: Number,
      default: 1
    },
    fontSize: {
      type: Number,
      default: 14
    },
    lineHeight: {
      type: Number,
      default: 14
    },
    fontFamily: {
      type: String,
      default: undefined
    },
    fontWeight: {
      type: Number,
      default: 400
    },
    fontColor: {
      type: String,
      default: 'rgba(128, 128, 128, .3)'
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    rotate: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 32
    },
    height: {
      type: Number,
      default: 32
    },
    zIndex: {
      type: Number,
      default: 10,
    },
    xOffset: {
      type: Number,
      default: 0
    },
    yOffset: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const base64UrlRef = ref('')


    const fontsReadyRef = ref(false)
    onFontsReady(() => (fontsReadyRef.value = true))

    watchEffect(() => {
      fontsReadyRef.value
      props.imageWidth
      props.imageHeight
      props.imageOpacity

      const ratio = getRatio(ctx)

      const canvasWidth = props.width * ratio
      const canvasHeight = props.height * ratio
      const canvasOffsetLeft = props.xOffset * ratio
      const canvasOffsetTop = props.yOffset * ratio
      canvas.width = canvasWidth
      canvas.height = canvasHeight

      if (ctx) {
        ctx.translate(0, 0)
        ctx.rotate(props.rotate * (Math.PI / 180))
        if (props.image) {
          // 图片
          const img = new Image()
          img.crossOrigin = 'anonymous'
          img.referrerPolicy = 'no-referrer'
          img.src = props.image
          img.onload = () => {
            ctx.globalAlpha = props.imageOpacity
            ctx.drawImage(
              img,
              canvasOffsetLeft,
              canvasOffsetTop,
              (
                props.imageWidth ||
                (props.imageHeight ? (img.width * props.imageHeight) / img.height : img.width)
              ) * ratio,
              (
                props.imageHeight ||
                (props.imageWidth ? (img.height * props.imageWidth) / img.width : img.height)
              ) * ratio
            )
            base64UrlRef.value = canvas.toDataURL()
          }
        } else if (props.content) {
          // 文本
          ctx.font = `
          ${props.fontWeight}
          ${props.fontSize * ratio}px/${props.lineHeight * ratio}px
          ${props.fontFamily || 'sans-serif'}
          `
          ctx.fillStyle = props.fontColor

          ctx.fillText(
            props.content,
            canvasOffsetLeft,
            canvasOffsetTop + props.lineHeight * ratio
          )

          base64UrlRef.value = canvas.toDataURL()
        }
      }
    })

    return () => {

      const watermarkNode = (
        <div
          class={['wgh-watermark', props.fullscreen && 'fullscreen']}
          style={{
            zIndex: props.zIndex,
            backgroundSize: `${props.width}px`,
            backgroundImage: `url(${base64UrlRef.value})`
          }}
        ></div>
      )

      if (props.fullscreen) {
        // 全屏幕
        return watermarkNode
      } else {

        return (
          <div class="wgh-watermark-box">
            {context.slots.default ? context.slots.default() : ''}
            {watermarkNode}
          </div>
        )
      }
    }

  }
}