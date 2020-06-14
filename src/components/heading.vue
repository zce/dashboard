<template>
  <div class="heading">
    <h1 class="title">{{ title }}</h1>
    <transition name="fade">
      <ul class="action" v-show="showAction">
        <li><a href="#" class="icon-before icon-checkmark" @click="handleEnable"></a></li>
        <li><a href="#" class="icon-before icon-blocked" @click="handle"></a></li>
        <li><a href="#" class="icon-before icon-bin" @click="handle"></a></li>
        <li><a href="#" class="icon-before icon-copy" @click="handle"></a></li>
      </ul>
    </transition>
    <form class="search icon-before icon-search" v-if="showSearch" @submit="handleSearch">
      <input type="text" placeholder="Search">
    </form>
    <el-button :type="btnType" :size="btnSize" :icon="btnIcon" v-if="btnText">{{ btnText }}</el-button>
  </div>
</template>

<script>
// TODO: use this component for all page heading
export default {
  name: 'heading',
  props: {
    title: String,
    showAction: Boolean,
    showSearch: Boolean,
    btnText: String,
    btnType: {
      type: String,
      default: 'primary'
    },
    btnSize: {
      type: String,
      default: 'small'
    },
    btnIcon: {
      type: String,
      default: 'plus'
    }
  }
}
</script>
