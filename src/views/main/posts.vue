<template>
  <div>
    <div class="heading">
      <h1 class="title" v-if="selections.length">{{ selections.length }} items selected</h1>
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
        <input type="text" placeholder="Search">
      </div>
      <router-link :to="{ name: 'new', params: { type: $route.params.type } }"><el-button type="primary" size="small" icon="el-icon-edit">写{{ type }}</el-button></router-link>
    </div>
    <el-table :data="posts" @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="title" label="Title" show-overflow-tooltip></el-table-column>
      <el-table-column label="Status" width="100">
        <template slot-scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column label="Categories" width="200">
        <template slot-scope="scope">
          <a v-for="item in scope.row.categories" :key="item.slug" href="#">{{ item.name }}, </a>
        </template>
      </el-table-column>
      <el-table-column label="Tags" width="240">
        <template slot-scope="scope">
          <a v-for="item in scope.row.tags" :key="item.slug" href="#">{{ item.name }}, </a>
        </template>
      </el-table-column>
      <el-table-column label="Author" width="100">
        <template slot-scope="scope">
          <a href="#">{{ scope.row.author.name }}</a>
        </template>
      </el-table-column>
      <el-table-column label="Comments" width="120">
        <template slot-scope="scope">
          <i class="icon-before icon-bubble">{{ scope.row.comment }}</i>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="Date" width="120"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page="4"
      :page-sizes="[50, 100, 150, 200]"
      :page-size="50"
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
            { name: 'None', slug: 'uncategoried' },
            { name: 'Test', slug: 'test-category' }
          ],
          tags: [
            { name: 'demo', slug: 'demo' },
            { name: 'tag', slug: 'test-tag' },
            { name: 'tag2', slug: 'test-tag2' },
            { name: 'tag3', slug: 'test-tag3' }
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
