<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  mounted (): void {
    // 默认点击发现标签，修改路由信息
    history.pushState(null, '', '/findPage')
  }
}
</script>
