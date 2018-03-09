<template>
  <div>
    <app-header/>
    <section class="main">
      <app-sidebar/>
      <main class="content">
        <transition name="content">
          <router-view class="inner"></router-view>
        </transition>
      </main>
    </section>
  </div>
</template>

<script>
import Header from '../components/header'
import Sidebar from '../components/sidebar'

export default {
  name: 'layout',
  title: 'WEDN.NET | make IT better',
  components: {
    'app-header': Header,
    'app-sidebar': Sidebar
  }
}
</script>
