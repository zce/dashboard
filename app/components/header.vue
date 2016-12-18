<template>
  <header class="header">
    <h1 class="logo">
      <router-link to="/">WEDN.NET</router-link>
    </h1>
    <nav class="menu">
      <ul class="list">
        <!-- add `.active` class name if item active -->
        <li class="item">
          <a href="#"><i class="dashicons dashicons-admin-comments"></i><span>0</span></a>
        </li>
        <li class="item">
          <a href="#"><i class="dashicons dashicons-plus"></i><span>新建</span></a>
          <!-- sub list -->
          <nav class="submenu">
            <ul class="list">
              <li class="item active"><a href="#">文章</a></li>
              <li class="item"><a href="#">页面</a></li>
              <li class="item"><a href="#">媒体</a></li>
              <li class="item"><a href="#">用户</a></li>
            </ul>
          </nav>
        </li>
      </ul>
      <ul class="list right">
        <li class="item">
          <a href="#">
            <span>Hi, iceStone</span>
            <img class="avatar" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjQ2ODc1IiB5PSIzMiIgc3R5bGU9ImZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMHB0O2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjY0eDY0PC90ZXh0PjwvZz48L3N2Zz4=" alt="avatar">
          </a>
          <nav class="submenu">
            <ul class="list">
              <li class="item"><a href="#">编辑个人资料</a></li>
              <li class="item"><a href="#">登出</a></li>
            </ul>
          </nav>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>
