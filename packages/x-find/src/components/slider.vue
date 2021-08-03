<template>
  <div class="slider_wrapper h-100 position-relative" :class="{full: isfull}">
    <div class="silder_panel w-100 h-100 position-relative overflow-hidden">
      <div class="silder_item overflow-hidden transition" :style ="createTransform(itemCount - 1 - i - step)" :data-id="step" v-for="(item, i) in items" :key="i">
        <router-link :to="`/infoPage${item.url}`">
          <img :src="item.coverPath" class="silder_item_img" alt="" srcset="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component
export default class SliderComp extends Vue {
  step = 0 // 自动运行的步数
  timeid: number
  @Prop({ default: [] }) items!:[] // 轮播的对象
  @Prop({ default: false }) loop!: boolean // 是否循环播放
  @Prop({ default: false }) isfull!: boolean // 是否是全宽度展示，和展示方式相关
  @Watch('loop')
  onLoopChanged (val: boolean): void {
    if (val) {
      // loop为true时，加载时间
      this.timeid = setInterval(() => {
        if (this.step > this.items.length - 1) this.step = 0
        else this.step++
      }, 3000)
    }
  }

  get itemCount (): number {
    return this.items.length
  }

  mounted (): void {
    if (this.loop) {
      this.onLoopChanged(true)
    }
  }

  // 创建动态轮播
  createTransform (index: number):{[k: string]: string | number} {
    let transform = {}
    if (index < 0) index = index + this.itemCount
    if (this.itemCount > 3) { // 4张
      // 向右偏移量为165px
      if (index === 2) {
        // 放大
        transform = { transform: 'translate(165px, 0) scale(1)', zIndex: 1 }
      } else if (index === 1) { // 第一张时，按照左边中点偏移
        transform = { transform: 'translate(0, 0) scale(.87)', zIndex: -1, opacity: '.8', transformOrigin: '0% 50%' }
      } else if (index === 3) { // 第0张不显示
        transform = { transform: 'translate(331px, 0) scale(.87)', zIndex: -1, opacity: '.8', transformOrigin: '100% 50%' }
      } else {
        transform = { transform: `translate(${(index - 1) * 165}px, 0) scale(.87)`, zIndex: -1, opacity: 0 }
      }
    } else if (this.itemCount > 2) {
      // 向右偏移量为165px
      if (index === 1) {
        // 放大
        transform = { transform: 'translate(165px, 0) scale(1)', zIndex: 1 }
      } else if (index === 0) { // 第一张时，按照左边中点偏移
        transform = { transform: 'translate(0, 0) scale(.87)', zIndex: -1, opacity: '.8', transformOrigin: '0% 50%' }
      } else if (index === 2) { // 第0张不显示
        transform = { transform: 'translate(331px, 0) scale(.87)', zIndex: -1, opacity: '.8', transformOrigin: '100% 50%' }
      }
    } else {
      // 1张或者2张 按照全宽度展示
      if (index === 0) {
        transform = { transform: 'translate(0, 0) scale(1)', zIndex: 1, width: '100%' }
      } else {
        transform = { transform: 'translate(100%, 0) scale(1)', zIndex: -1, opacity: '.8' }
      }
    }
    return transform
  }
}
</script>

<style lang="less" scoped>
.slider_wrapper {
  .silder_item{
    width: 750px;
    height: 100%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    &.transition{
      transition: transform 300ms ease-out, opacity 300ms ease-out;
    }
    .silder_item_img{
      width: 100%;
      height: 100%;
    }
  }
  &.full{

  }
}

</style>
