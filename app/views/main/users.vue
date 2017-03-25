<template>
  <div class="inner">
    <div class="heading">
      <h1 class="title" v-if="selections.length">{{ selections.length }}个被选中</h1>
      <h1 class="title" v-else>{{ users.length }}个用户</h1>
      <transition name="fade">
        <ul class="action" v-show="selections.length">
          <li><a href="#" class="icon-before icon-checkmark"></a></li>
          <li><a href="#" class="icon-before icon-blocked"></a></li>
          <li><a href="#" class="icon-before icon-bin"></a></li>
          <li><a href="#" class="icon-before icon-copy"></a></li>
        </ul>
      </transition>
      <div class="search icon-before icon-search" v-if="users.length">
        <input type="text" placeholder="搜索">
      </div>
      <el-button type="primary" size="small" icon="plus">添加用户</el-button>
    </div>
    <el-table :data="users" @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="用户名"></el-table-column>
      <el-table-column label="状态" width="80">
        <template scope="scope">
          {{ scope.row.status }}
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
      <el-table-column prop="phone" label="手机" width="200"></el-table-column>
      <el-table-column label="角色" width="240">
        <template scope="scope">
          <a v-for="item in scope.row.roles" :key="item" href="#">{{ item }}、</a>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :current-page="4"
      :page-sizes="[50, 100, 150, 200]"
      :page-size="50"
      :total="400"
      v-if="users.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'users',

    data () {
      return {
        type: '',
        size: 50,
        users: [],
        selections: []
      }
    },

    methods: {
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
    }
  }
</script>

<style>
  .el-pagination {
    margin: 1rem 0 2rem;
    text-align: right;
  }
</style>
