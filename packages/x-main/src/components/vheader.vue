<template>
  <header class="stricky top-0 left-0 right-0 z-30 h-16 ring-2 ring-gray-100">
    <div class="container h-full flex items-center relative z-20">
      <img :src="logo" class="h-10 mr-10" alt="logo" srcset="">
      <div class="hidden lg:flex lg:items-center lg:h-full">
        <div v-for="(n, i) in menums" :key="`${i}`" @click="handleClickMenu(i + 1)" @mouseover="handleShowMenu(i === 1)" @mouseleave="handleHiddenMenu(i === 1)" :class="['group', 'relative', 'text-base', 'h-full', 'flex', 'flex-col', 'justify-between', 'items-center', menuIndex === i + 1 ? 'text-black' : 'text-gray-400', 'cursor-pointer', 'w-16', 'border-none']">
          <div></div>
          <div data-content="^" :class="[i === 1 ? 'after:content' : '', 'flex', 'items-center', 'menu-down-arrow']">{{n}}</div>
          <div class="h-0.5 w-5 group-hover:bg-red-600" :class="{'bg-red-600': i === menuIndex - 1}"></div>
        </div>
      </div>
      <!-- 频道的下拉菜单 -->
      <transition enter-active-class="transition ease-in duration-1000" enter-to-class="transform translate-y-0  opacity-100" enter-class="transform -translate-y-full opacity-0" leave-active-class="transition easa-out duration-1000" leave-class="transform translate-y-0  opacity-100" leave-to-class="transform -translate-y-full opacity-0">
        <div v-show="showSubMenu" @mouseleave="handleHiddenMenu(true)" @mouseover="handleShowMenu(true)" class="container -z-1 bg-gray-100 absolute top-full px-9 py-2 lg:py-6">
          <div class="flex flex-wrap w-full">
            <div class="rounded-full mr-4 mt-2.5 text-current cursor-pointer font-light hover:text-red-400 bg-gray-200 w-32 h-8 p flex items-center justify-center" v-for="(sub, i) in subMenus" :key="`${i}`">{{sub.name}}({{sub.channelCount}})</div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import logo from '@/assets/images/logo.png'
import { GET_HEADET_MENU } from '@/store/mutations-types'
import { meunCategoryData } from '@/store/data'
@Component
export default class HeaderCom extends Vue {
  // data属性内容
  logo = logo
  menuIndex = 1
  menums: string[] = ['发现', '频道', '我的']
  showSubMenu = false
  subMenus: meunCategoryData[] = []

  mounted ():void {
    this.$store.dispatch(GET_HEADET_MENU).then(d => (this.subMenus = d))
  }

  // method内容
  handleClickMenu (index: number):void {
    this.menuIndex = index
  }

  handleShowMenu (isShow: boolean):void {
    if (isShow) {
      this.showSubMenu = true
    } else {
      this.showSubMenu = false
    }
  }

  handleHiddenMenu (isHidden: boolean):void {
    if (isHidden) this.showSubMenu = false
  }
}
</script>
