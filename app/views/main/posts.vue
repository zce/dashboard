<template>
  <div>
    <div class="heading">
      <h1 class="title" v-if="selections.length">{{ selections.length }} 条被选中</h1>
      <h1 class="title" v-else>{{ posts.length }} 条{{ type }}</h1>
      <transition name="fade">
        <ul class="action" v-show="selections.length">
          <li><a href="#" class="icon-before icon-checkmark"></a></li>
          <li><a href="#" class="icon-before icon-blocked"></a></li>
          <li><a href="#" class="icon-before icon-bin"></a></li>
          <li><a href="#" class="icon-before icon-copy"></a></li>
        </ul>
      </transition>
      <div class="search icon-before icon-search">
        <input type="text" placeholder="搜索">
      </div>
      <router-link :to="{ name: 'new', params: { type: $route.params.type } }"><el-button type="primary" size="small" icon="edit">写{{ type }}</el-button></router-link>
    </div>
    <el-table :data="posts" @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="title" label="标题" show-overflow-tooltip></el-table-column>
      <el-table-column label="状态" width="80">
        <template scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column label="分类" width="200">
        <template scope="scope">
          <a v-for="item in scope.row.categories" :key="item.slug" href="#">{{ item.name }}、</a>
        </template>
      </el-table-column>
      <el-table-column label="标签" width="240">
        <template scope="scope">
          <a v-for="item in scope.row.tags" :key="item.slug" href="#">{{ item.name }}、</a>
        </template>
      </el-table-column>
      <el-table-column label="作者" width="100">
        <template scope="scope">
          <a href="#">{{ scope.row.author.name }}</a>
        </template>
      </el-table-column>
      <el-table-column label="评论" width="80">
        <template scope="scope">
          <i class="icon-before icon-bubble">{{ scope.row.comment }}</i>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" width="120"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="4"
      :page-sizes="[50, 100, 150, 200]"
      :page-size="50"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'posts',

    data () {
      return {
        type: '',
        size: 50,
        posts: [],
        selections: []
      }
    },

    created () {
      this.$title(this.$route.params.type)
      this.initData()
    },

    methods: {
      initData () {
        this.posts = []
        for (let i = 0; i < this.size; i++) {
          this.posts.push({
            title: `Hello world ${i}`,
            status: 'pub',
            categories: [
              { name: '未分类', slug: 'uncategoried' },
              { name: '测试分类', slug: 'test-category' }
            ],
            tags: [
              { name: '示例', slug: 'demo' },
              { name: '测试标签', slug: 'test-tag' },
              { name: '测试标签', slug: 'test-tag2' },
              { name: '测试标签', slug: 'test-tag3' }
            ],
            author: { name: '汪磊', slug: 'zce' },
            comment: 10,
            date: new Date().toLocaleDateString()
          })
        }

        switch (this.$route.params.type) {
          case 'blog':
            this.type = '博客'
            break
          case 'page':
            this.type = '页面'
            break
        }
      },
      handleSelectionChange (value) {
        this.selections = value
      },
      handleSizeChange (value) {
        console.log(`每页 ${value} 条`)
        this.size = value
        this.initData()
      },
      handleCurrentChange (value) {
        this.currentPage = value
        console.log(`当前页: ${value}`)
      }
    },

    // https://router.vuejs.org/zh-cn/essentials/dynamic-matching.html#响应路由参数的变化
    // https://router.vuejs.org/zh-cn/advanced/data-fetching.html
    watch: {
      $route () {
        this.initData()
      }
    }
  }
</script>

<style>
  .el-pagination {
    margin: 1rem 0 2rem;
    text-align: right;
  }
</style>
